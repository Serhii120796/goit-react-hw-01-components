import './FriendList.css';
import clsx from 'clsx';

export const FriendList = ({ friends }) => (
        <ul className="friend-list">
            {friends.map(({ avatar, name, isOnline, id }) => {
                const statusClasses = ["friend-status"];
                if (isOnline) statusClasses.push("is-online");

                return (
                    <li className="friend-list-item" key={id}>
                        <span className={clsx("friend-status", isOnline && "is-online")}></span>
                        <img className="friend-avatar" src={avatar} alt="User avatar" width="48" />
                        <p className="friend-name">{name}</p>
                    </li>
                );
            })}
        </ul>
    );
