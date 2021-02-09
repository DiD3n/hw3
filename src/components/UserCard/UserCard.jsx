import styles from './usercard.module.css';

const UserCard = ({user}) => (
    <div className={styles.userCard}>
        <img className={styles.userIcon} src={user.icon}/>
        <span>
            <h1 className={styles.userName}>{user.name}</h1>
            <p className={styles.userSurname}>{user.surname}</p>
        </span>
    </div>	
);

UserCard.defaultProps = {
    user: {name: "Invalid", surname: "User"}
}

export default UserCard;