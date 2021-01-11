import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import {
    StyledPerson,
    StyledItemName,
    StyledImage,
    StyledItemDescription,
    StyledCast,
    StyledBody,
    StyledCastItem,
    StyledTitle
} from './Person.styles';

export const Person = ({ tvCredits, movieCredits, details }) => {
    const history = useHistory();

    const handleGoToPerson = (id, type) => {
        history.push(`/details/${type}/${id}`);
    };

    return (
        <StyledPerson data-testid="PersonId">
            <StyledImage
                alt={details?.name}
                src={details?.profile_path ? `${process.env.REACT_APP_IMAGE_API_URL}w500${details?.profile_path}?api_key=${process.env.REACT_APP_THE_MOVIE_DB_API_KEY}` : 'images/Not-available2.png'}
            />
            <StyledBody>

                <StyledItemName> {details.name}</StyledItemName>
                <StyledTitle> TV CREDITS  </StyledTitle>
                <StyledCast>
                    {tvCredits?.map((item) => {
                        return <StyledCastItem key={item.id} onClick={() => handleGoToPerson(item.id, 'tv')}>
                            {item.name}
                        </StyledCastItem>
                    })}
                </StyledCast>

                <StyledTitle> MOVIE CREDITS  </StyledTitle>
                <StyledCast>
                    {movieCredits?.map((item) => {
                        return <StyledCastItem key={item.id} onClick={() => handleGoToPerson(item.id, 'movie')}>
                            {item.title}
                        </StyledCastItem>
                    })}
                </StyledCast>

                <StyledTitle>  Biography </StyledTitle>
                <StyledItemDescription>{details.biography}</StyledItemDescription>

                <StyledTitle>  Place of Birth   </StyledTitle>
                <StyledItemDescription>{details.place_of_birth}</StyledItemDescription>

                <StyledTitle>  Birthday </StyledTitle>
                <StyledItemDescription>{details.birthday}</StyledItemDescription>



            </StyledBody>

        </StyledPerson >
    );
};

Person.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    flipped: PropTypes.bool,
    matched: PropTypes.bool,
    clicked: PropTypes.func,
};
