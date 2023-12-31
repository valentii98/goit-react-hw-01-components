import { GlobalStyle } from './GlobalStyle';
import { Profile } from './Profile/profile.jsx';
import { Statistics } from './Statistics/statistics.jsx';
import { FriendList } from './FriendList/friendList.jsx';
import { TransactionHistory } from './Transaction/transaction.jsx';

import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      <GlobalStyle />
    </div>
  );
};
