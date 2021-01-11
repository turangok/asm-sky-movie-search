import styled from "styled-components";

export const StyledImage = styled.img`
  width: 7.5rem;
  height: 10rem;
  box-sizing: border-box;
  `;

export const StyledSearchCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 0 0.5rem;
  border: 0.06rem solid #eee;
  width: 80%;
  min-width: 15.63rem;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.2), 0 0.38rem 1.25rem 0 rgba(0, 0, 0, 0.19);
    z-index : 1; 
  }
`;

export const StyledBody = styled.div`
  flex-grow: 2;
  margin-left: 1rem;
  color:${(p) => p.theme.doveGray};
`;

export const StyledItemName = styled.div` 
  font-size: 0.88rem;
`;

export const StyledItemDescription = styled.div`
  display: block;
  color: #${(p) => p.theme.doveGray};
  font-size: 0.75rem;
  margin-top: 0.38rem;

`;