import styled from 'styled-components';
import colors from '../../constants/colors';

const StyledButton = styled.button`
  background-color: ${colors.darkBlue};
  color: white;
  font-size: 14px;
  text-align: center;
  width: 100%;
  padding: 18px;
  border: none;
  border-radius: 35px;
  cursor: pointer;

  &:disabled {
    background-color: ${colors.gray1};
    color: ${colors.gray4};
    cursor: not-allowed;
  }
`;

export default StyledButton;
