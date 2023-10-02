import styles from './FriendListItem.module.css';
import clsx from 'clsx';

export const FriendListItem = ({ friends }) =>
  friends.map(({ avatar, name, isOnline, id }) => (
    <li className={styles.item} key={id}>
      <span
        className={clsx(styles.status, isOnline && styles['is-online'])}
      ></span>
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  ));
