import styles from './FriendListItem.module.css';
import clsx from 'clsx';

export const FriendListItem = ({ friend }) => {
  const { avatar, name, isOnline } = friend;
  return (
    <li className={styles.item}>
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
  );
};
