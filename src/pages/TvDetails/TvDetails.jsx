import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDetails, getCast } from 'services/SearchServices';
import { Tv } from 'components';
import { StyledTvDetails } from './TvDetails.styles';

const TvDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let response = await getDetails({
        type: 'tv',
        key: id,
      });

      setDetails(response);

      response = await getCast({
        type: 'tv',
        key: id,
      });

      setCast(response?.cast);
    }
    fetchData();
  }, [id]);

  return details ? (
    <StyledTvDetails data-testid="testIdTvDetails">
      <Tv type="tv" cast={cast} details={details} />
    </StyledTvDetails>
  ) : null;
};

export default TvDetails;
