import styled from "styled-components";


export const StyledTv = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr; 
  background: ${(p) => p.theme.lightGrey}; 
  color: ${(p) => p.theme.white}; 
`;

export const StyledImage = styled.img`
  max-width: 21.88rem;
  box-sizing: border-box;
  margin: 1rem;
  `;

export const StyledBody = styled.div`
  flex-grow: 2;
  margin-left: 1rem;
`;

export const StyledItemName = styled.h3` 
margin-top: 1rem;
padding-right: 9.38rem;
text-align: center; 
`;

export const StyledItemDescription = styled.div`
  display: block; 
  font-size: 0.75rem;
  margin-top: 0.38rem;
`;
export const StyledCast = styled.div`
display : flex;
flex-wrap :  wrap; 
  color: ${(p) => p.theme.royalBlue};
  font-size: 0.69rem;
  margin-top: 0.38rem;
  
`;

export const StyledCastItem = styled.div`
width: 12.5rem; 
 &:hover {
    cursor: pointer;
    box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.2), 0 0.38rem 1.25rem 0 rgba(0, 0, 0, 0.19);
    z-index : 1; 
  }
`

export const StyledTitle = styled.h6`
margin-top: 1rem;
  `;

