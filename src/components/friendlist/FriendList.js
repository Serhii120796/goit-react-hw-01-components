import './FriendList.css';

export const FriendList = ({ friends }) => (
        <ul className="friend-list">
            {friends.map(({ avatar, name, isOnline, id }) => {
                const statusClasses = ["friend-status"];
                if (isOnline) statusClasses.push("is-online");
                
                return (
                    <li className="friend-list-item" key={id}>
                        <span className={statusClasses.join(" ")}></span>
                        <img className="friend-avatar" src={avatar} alt="User avatar" width="48" />
                        <p className="friend-name">{name}</p>
                    </li>
                );
            })}
        </ul>
    );
