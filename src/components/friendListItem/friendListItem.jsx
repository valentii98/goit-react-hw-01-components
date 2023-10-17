import { Status, Item, Text, Image } from './friendlistItem.styled.js';
export const FriendListItem = ({ avatar, name, isOnline, id}) => {
  return (
    <Item key={id}>
      <Status isOnline={isOnline}> </Status>
      <Image src={avatar} alt={name} />
      <Text>{name}</Text>
    </Item>
  );
};
