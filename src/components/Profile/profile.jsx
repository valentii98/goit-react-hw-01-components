import { List, ListItem, About, ProfileCard } from "./profile.styled.js"

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <ProfileCard>
  <div>
    <img
      src={avatar}
      alt={username}
    />
    <About>{username}</About>
    <About>@{tag}</About>
    <About>{location}</About>
  </div>

  <List>
    <ListItem>
      <span>Followers</span>
      <span>{stats.followers}</span>
    </ListItem>
    <ListItem
    >
      <span>Views</span>
      <span>{stats.views}</span>
    </ListItem>
    <ListItem>
      <span>Likes</span>
      <span>{stats.likes}</span>
    </ListItem>
  </List>
</ProfileCard>
    )
}