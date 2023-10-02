import { FriendListItem } from './FriendListItem/FriendListItem.jsx';
import styles from './FriendList.module.css';

export const FriendList = ({ friends }) => (
  <ul className={styles['friend-list']}>
    {friends.map(friend => (
      <FriendListItem key={friend.id} friend={friend} />
    ))}
  </ul>
);
