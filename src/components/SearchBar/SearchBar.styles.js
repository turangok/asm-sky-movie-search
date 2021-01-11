import styled from 'styled-components';
import { StyledButton } from 'components';
import Select from 'react-select';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  background-color: ${(p) => p.theme.black};
`;

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  ${StyledButton} {
    margin: 0 0 0.06rem 0.4rem;
    transform: translate(0, -0.1rem);
    padding: 0.4rem 0.6rem;
  }
`;

export const StyledSelect = styled(Select)`
  width: 9.38rem;
  margin-right: 1.25rem;
`;
export const StyledHeader = styled.h1`
  font-size: 1rem;
  text-align: center;
  padding: 0.5rem 0;
  color: ${(p) => p.theme.white};
`;

export const StyledError = styled.span`
  color: ${(p) => p.theme.amaranth};
  margin : 0.3rem 0 0 0.63rem;
  display: block;
`;

export const StyledKeywords = styled.div`
  position: absolute;
  z-index: 1;
  background: ${(p) => p.theme.white};
  padding: 0.31rem;
  min-width: 12.5rem;
  left: 11.19rem;
  top: 2.81rem;
  div {
    border-bottom: 0.03rem solid ${(p) => p.theme.doveGrey};
  }
  display: ${(p) => !p.isShow && 'none'};
`;

export const StyledInputWrapper = styled.div`
  margin-right: 0.63rem;
`;
