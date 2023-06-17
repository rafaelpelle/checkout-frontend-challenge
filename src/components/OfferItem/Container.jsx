import styled from 'styled-components';
import colors from '../../constants/colors';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${colors.darkBlue};
  border-radius: 15px;
  padding: 20px;
  cursor: pointer;

  &:not(:first-child) {
    margin-top: 12px;
  }

  * {
    cursor: pointer;
  }

  label {
    display: flex;
    flex-direction: column;
  }

  strong {
    color: ${colors.darkBlue};
    font-size: 14px;
    line-height: 18px;
  }

  span {
    color: ${colors.darkBlue};
    font-size: 12px;
    line-height: 16px;
    margin: 4px 0;
  }

  small {
    color: ${colors.orange};
    font-size: 10px;
    line-height: 13px;
  }

  input[type='radio'] {
    margin: 0;
    width: 16px;
    height: 16px;
    accent-color: ${colors.darkBlue};
  }
`;

export default Container;
