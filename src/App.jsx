import React from 'react';
import styles from './App.module.css';
import RegisterForm from './components/RegisterForm/RegisterForm';
import UserList from './components/UserList/UserList';
import { UsersContext } from './contexts/Users';

function App() {
    return (
        <UsersContext>
            <div className={styles.app}>
                <div className={styles.column}>
                    <UserList/>
                </div>
                <div className={styles.column}>
                    <RegisterForm/>
                </div>
            </div> 
        </UsersContext>
    );
}

export default App;
