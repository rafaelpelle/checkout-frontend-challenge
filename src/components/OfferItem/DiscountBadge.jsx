import styled from 'styled-components';
import colors from '../../constants/colors';

const DiscountBadge = styled.label`
  border-radius: 13px;
  padding: 3px 9px;
  background-color: ${colors.orange};
  color: white;
  font-size: 10px;
  line-height: 13px;
  text-align: center;
  margin: 0 auto auto 12px;
`;

export default DiscountBadge;
