import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDetails, getCredits } from 'services/SearchServices';
import { Person } from 'components';
import { StyledPersonDetails } from './PersonDetails.styles';

const PersonDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [tvCredits, setTvCredits] = useState([]);
  const [movieCredits, setMovieCredits] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let response = await getDetails({
        type: 'person',
        key: id,
      });

      setDetails(response);

      response = await getCredits({
        type: 'tv',
        key: id,
      });

      setTvCredits(response?.cast);

      response = await getCredits({
        type: 'movie',
        key: id,
      });

      setMovieCredits(response?.cast);
    }
    fetchData();
  }, [id]);

  return details ? (
    <StyledPersonDetails data-testid="testIdPersonDetails">
      <Person
        details={details}
        tvCredits={tvCredits}
        movieCredits={movieCredits}
      />
    </StyledPersonDetails>
  ) : null;
};

export default PersonDetails;
