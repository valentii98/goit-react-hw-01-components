import { Status, List, Text, Image } from './friendlist.styled.js';

export const FriendList = ({ friends }) => {
  return (
    <div>
      <ul>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <List key={id}>
            <Status isOnline={isOnline}> </Status>
            <Image src={avatar} alt={name} />
            <Text>{name}</Text>
          </List>
        ))}
      </ul>
    </div>
  );
};
