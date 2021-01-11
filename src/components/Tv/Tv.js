import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import {
    StyledTv,
    StyledItemName,
    StyledImage,
    StyledItemDescription,
    StyledCast,
    StyledBody,
    StyledCastItem,
    StyledTitle
} from './Tv.styles';

export const Tv = ({ type, cast, details }) => {
    const history = useHistory();
    const handleGoToTv = (id) => {
        history.push(`/details/person/${id}`);
    };

    return (
        <StyledTv data-testid="TvId">
            <StyledImage
                alt={details?.name}
                src={details?.poster_path ? `${process.env.REACT_APP_IMAGE_API_URL}w500${details?.poster_path}?api_key=${process.env.REACT_APP_THE_MOVIE_DB_API_KEY}` : 'images/Not-available2.png'}
            />
            <StyledBody>

                <StyledItemName>{details.name}</StyledItemName>
                <StyledTitle> CAST  </StyledTitle>
                <StyledCast>
                    {cast?.map((item) => {
                        return <StyledCastItem key={item.id} onClick={() => handleGoToTv(item.id)}>
                            {item.name}
                        </StyledCastItem>
                    })}
                </StyledCast>

                <StyledTitle>  Overview </StyledTitle>
                <StyledItemDescription>{details.overview}</StyledItemDescription>

                <StyledTitle>  First Air Date   </StyledTitle>
                <StyledItemDescription>{details.first_air_date}</StyledItemDescription>

                <StyledTitle>  Original Name </StyledTitle>
                <StyledItemDescription>{details.original_name}</StyledItemDescription>
            </StyledBody>

        </StyledTv >
    );
};

Tv.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    flipped: PropTypes.bool,
    matched: PropTypes.bool,
    clicked: PropTypes.func,
};
