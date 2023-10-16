import styled from 'styled-components';
import { createColor } from 'components/GlobalStyle';

export const Table = styled.table`
  width: 400px;
  border: 4px solid ${createColor()};
  border-spacing: 0px;
`;

export const Head = styled.thead`
  background-color: ${createColor()};
`;

export const Body = styled.tbody`
  background-color: ${createColor()};
`;
