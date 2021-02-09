import { useUsers } from "../../contexts/Users";
import UserCard from "../UserCard/UserCard";

const UserList = () => {

    const { users } = useUsers();

    return (
        <>
            {users.map(
                (el, key) => <UserCard key={key} user={el} />
            )}
        </>
    );
}

export default UserList;