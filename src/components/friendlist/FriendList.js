import { FriendListItem } from './FriendListItem/FriendListItem.jsx';
import styles from './FriendList.module.css';

export const FriendList = ({ friends }) => (
  <ul className={styles['friend-list']}>
    <FriendListItem friends={friends} />
  </ul>
);
