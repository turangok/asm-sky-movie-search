import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${(p) =>
    p.disabled ? p.theme.doveGrey : p.theme.royalBlue};
  color: ${(p) => p.theme.white};
  border: 0.06rem solid ${(p) => p.theme.white};
  width: max-content;
  border-radius: 0.31rem;
  padding: 0.13rem 0.56rem;
  margin: 0 0.3rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: ${(p) => (p.disabled ? 'default' : 'pointer')};
`;
