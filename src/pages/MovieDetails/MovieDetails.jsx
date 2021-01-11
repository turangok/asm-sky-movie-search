import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDetails, getCast } from 'services/SearchServices';
import { Movie } from 'components';
import { StyledMovieDetails } from './MovieDetails.styles';

const MovieDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let response = await getDetails({
        type: 'movie',
        key: id,
      });

      setDetails(response);

      response = await getCast({
        type: 'movie',
        key: id,
      });

      setCast(response?.cast);
    }
    fetchData();
  }, [id]);

  return details ? (
    <StyledMovieDetails data-testid="testIdMovieDetails">
      <Movie type="movie" cast={cast} details={details} />
    </StyledMovieDetails>
  ) : null;
};

export default MovieDetails;
