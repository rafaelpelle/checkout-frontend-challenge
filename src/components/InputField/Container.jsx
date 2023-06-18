import styled from 'styled-components';
import colors from '../../constants/colors';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  label {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: ${colors.gray4};
  }

  input {
    outline: none;
    border: none;
    border-bottom: 1px solid ${colors.gray1};
    padding: 4px 0 10px 0;
    font-size: 16px;
    line-height: 21px;
    letter-spacing: -0.02em;
    font-family: 'DM Sans';
  }

  strong {
    color: ${colors.red};
    font-size: 12px;
  }
`;

export default Container;
