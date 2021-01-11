import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import {
    StyledMovie,
    StyledItemName,
    StyledImage,
    StyledItemDescription,
    StyledCast,
    StyledBody,
    StyledCastItem,
    StyledTitle
} from './Movie.styles';

export const Movie = ({ type, cast, details }) => {
    const history = useHistory();
    const handleGoToPerson = (id) => {
        history.push(`/details/person/${id}`);
    };

    return (
        <StyledMovie data-testid="MovieId">
            <StyledImage
                alt={details?.name}
                src={details?.poster_path ? `${process.env.REACT_APP_IMAGE_API_URL}w500${details?.poster_path}?api_key=${process.env.REACT_APP_THE_MOVIE_DB_API_KEY}` : 'images/Not-available2.png'}
            />
            <StyledBody>

                <StyledItemName>{details.title}</StyledItemName>
                <StyledTitle> CAST  </StyledTitle>
                <StyledCast>
                    {cast?.map((item) => {
                        return <StyledCastItem key={item.id} onClick={() => handleGoToPerson(item.id)}>
                            {item.name}
                        </StyledCastItem>
                    })}
                </StyledCast>

                <StyledTitle>  Overview </StyledTitle>
                <StyledItemDescription>{details.overview}</StyledItemDescription>

                <StyledTitle>  Release Date   </StyledTitle>
                <StyledItemDescription>{details.release_date}</StyledItemDescription>

                <StyledTitle>  Original Title </StyledTitle>
                <StyledItemDescription>{details.original_title}</StyledItemDescription>

            </StyledBody>

        </StyledMovie >
    );
};

Movie.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    flipped: PropTypes.bool,
    matched: PropTypes.bool,
    clicked: PropTypes.func,
};
