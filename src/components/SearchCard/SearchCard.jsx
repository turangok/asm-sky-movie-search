import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import {
  StyledSearchCard,
  StyledItemName,
  StyledImage,
  StyledItemDescription,
  StyledBody,
} from './SearchCard.styles';

export const SearchCard = ({ id, type, name, imageUrl, description }) => {
  const history = useHistory();

  const handleGoToDetails = () => {
    history.push(`/details/${type}/${id}`);
  };

  return (
    <StyledSearchCard
      data-testid="searchCardId"
      onClick={() => handleGoToDetails()}
    >
      <StyledImage
        alt={name}
        src={
          imageUrl
            ? `${process.env.REACT_APP_IMAGE_API_URL}w185${imageUrl}?api_key=${process.env.REACT_APP_THE_MOVIE_DB_API_KEY}`
            : 'images/Not-available2.png'
        }
      />
      <StyledBody>
        <StyledItemName>{name}</StyledItemName>
        <StyledItemDescription>{description}</StyledItemDescription>
      </StyledBody>
    </StyledSearchCard>
  );
};

SearchCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  flipped: PropTypes.bool,
  matched: PropTypes.bool,
  clicked: PropTypes.func,
};
