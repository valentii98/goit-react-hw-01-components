export const FriendList = ({ friends }) => {
    return (
      <div>
        <ul >
          {friends.map(({ avatar, name, isOnline, id }) => (
            <li  key={id}>
              <span>
                {isOnline}
              </span>
              <img src={avatar} alt={name} />
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };