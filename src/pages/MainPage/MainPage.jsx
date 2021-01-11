import { useSelector } from 'react-redux';
import { SearchCard } from 'components';
import { StyledMainPage } from './MainPage.styles';

const MainPage = () => {
  const searchResults = useSelector((state) => {
    return state?.searchResults?.searchResults;
  });

  return (
    <StyledMainPage>
      {searchResults?.results?.map((item) => {
        let name = '';
        let imageUrl = '';
        let overView = '';
        const type =
          searchResults.searchType === 'multi'
            ? item.media_type
            : searchResults.searchType;
        switch (type) {
          case 'person':
            name = item.name;
            imageUrl = item.profile_path;
            break;
          case 'movie':
            name = item.title;
            imageUrl = item.poster_path;
            overView = item.overView;
            break;

          case 'tv':
            name = item.name;
            imageUrl = item.poster_path;
            overView = item.overView;
            break;

          default:
            break;
        }

        return (
          <SearchCard
            id={item.id}
            key={item.id}
            name={name}
            imageUrl={imageUrl}
            type={type}
            description={overView}
          >
            {JSON.stringify({ item })} <hr />
          </SearchCard>
        );
      })}
    </StyledMainPage>
  );
};

export default MainPage;
