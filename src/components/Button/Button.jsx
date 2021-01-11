import { StyledButton } from './Button.styles';
export { StyledButton } from './Button.styles';

export const Button = (props) => {
  return <StyledButton {...props} data-testid="buttonId"></StyledButton>;
};
