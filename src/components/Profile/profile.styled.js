import styled from 'styled-components';
import { createColor } from 'components/GlobalStyle';

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: auto;
  padding: 0;
  width: inherit;
`;
export const ListItem = styled.li`
  display: flex;
  gap: 5px;
  flex-direction: column;
  align-items: center;
  background-color: ${createColor()};
  margin: 5px;
  min-width: 80px;
  border: 2px solid black;
`;

export const About = styled.p`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
`;

export const ProfileCard = styled.p`
  background-color: ${createColor()};
`;
