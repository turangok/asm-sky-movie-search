import { useState } from 'react';
import { Input, Button } from 'components';
import SearchKeywords from './SearchKeywords';
import { TYPES } from 'config/constants';
import {
  StyledHeader,
  StyledForm,
  StyledError,
  StyledWrapper,
  StyledSelect,
  StyledInputWrapper,
} from './SearchBar.styles';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { fetchSearchResults } from 'store/actions/searchActions';

export const SearchBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isShow, setIsShow] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [selectedType, setSelectedType] = useState({
    label: 'All',
    value: 'multi',
  });
  const options = useSelector((state) => {
    return state?.searchResults?.searchKeywords;
  });

  const handleOnChange = (e) => {
    setSearchValue(e.target.value);
    e?.target?.value?.length > 4 ? setIsShow(true) : setIsShow(false);
    if (e.target.value.length === 0) {
      setErrorMsg('Please enter input');
      return;
    } else {
      setErrorMsg('');
    }

    dispatch(
      fetchSearchResults({
        type: selectedType.value,
        params: { query: e.target.value, page: 1 },
      })
    );
  };

  const handleOnSelectType = (value) => {
    setSelectedType(value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const searchValue = e.target[1].value;

    setSearchValue(searchValue);
    setIsShow(false);
    if (searchValue.length > 0) {
      dispatch(
        fetchSearchResults(
          {
            type: selectedType.value,
            params: { query: searchValue, page: 1 },
          },
          true
        )
      );
      setErrorMsg('');
    } else {
      setErrorMsg('Please enter input');
    }
    history.push(`/`);
  };

  return (
    <StyledForm onSubmit={onSubmit} data-testid="searchBarId">
      <StyledHeader> Movie Search </StyledHeader>
      <StyledWrapper>
        <StyledSelect
          options={TYPES}
          value={selectedType}
          onChange={handleOnSelectType}
          // defaultValue={{ label: 'All', value: 'multi' }}
        />
        <StyledInputWrapper>
          <Input
            type="text"
            placeholder="Enter search word"
            name="searchKey"
            onChange={handleOnChange}
            autoComplete="off"
            value={searchValue}
            autoFocus
          />

          {options?.length > 0 && (
            <SearchKeywords
              isShow={isShow}
              options={options}
              onSubmit={onSubmit}
              setIsShow={setIsShow}
            />
          )}
        </StyledInputWrapper>
        <Button type="submit">Search</Button>
      </StyledWrapper>
      {errorMsg && <StyledError>{errorMsg}</StyledError>}
    </StyledForm>
  );
};
