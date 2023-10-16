import styled from 'styled-components';

export const Status = styled.span`
  height: 25px;
  width: 25px;
  background-color: ${({isOnline}) => (isOnline ? 'green' : 'red')};
  border-radius: 50%;
  display: inline-block;
  margin: auto 10px;
`;

export const List = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;


export const Text = styled.p`
font-size: 30px;
display: inline-block;
  margin: auto;
`;


export const Image = styled.img`
 height: 100px;
  width:100px;
display: inline-block;
  margin: 5px;
`;


