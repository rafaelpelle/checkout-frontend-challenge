import React from 'react';
import styled from 'styled-components';
import colors from '../../constants/colors';

const StyledText = styled.span`
  font-size: 12px;
  border: 1px solid ${colors.gray1};
  border-radius: 12px;
  padding: 4px 12px;
`;

function UserTag(props) {
  return <StyledText>{props.children}</StyledText>;
}

export default UserTag;
