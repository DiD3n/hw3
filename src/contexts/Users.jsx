import React, {createContext, useContext, useState} from 'react';
import { UserModel } from '../model/UserModel';

const UserContext = createContext({});

/**
 * @returns {{users: UserModel[], addUser: (a: UserModel) => void}}
 */
export const useUsers = () => {
    return useContext(UserContext);
}

export const UsersContext = ({children}) => {

    const [users, setUsers] = useState([
        new UserModel("dawd", "surname", "e@el.d", "http://www.clker.com/cliparts/W/E/0/T/p/j/dasds.svg")
    ]);

    /**
     * @param {UserModel} user 
     */
    const addUser = (user) => {
        setUsers( a => [user, ...a]);
    }

    return (
        <UserContext.Provider
            value={{
                users,
                addUser
            }}>
                {children}
        </UserContext.Provider>
    )
}