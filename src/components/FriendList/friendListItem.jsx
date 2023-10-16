import { Status, Item, Text, Image } from './friendlist.styled.js';

export const FriendListItem = ({ friends }) => {
  return (
    <>
    {friends.map(({ avatar, name, isOnline, id }) => (
          <Item key={id}>
            <Status isOnline={isOnline}> </Status>
            <Image src={avatar} alt={name} />
            <Text>{name}</Text>
          </Item>
        ))}
    </>
  );
};
