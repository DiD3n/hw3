import { useState } from 'react';
import { useUsers } from "../../contexts/Users";
import { UserModel } from "../../model/UserModel";

import styles from './Register.module.css';

const RegisterForm = () => {

    const { addUser } = useUsers();

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [icon, setIcon] = useState("");    

    const resetForm = () => {
        setSurname("");
        setName("");
        setIcon("");
        setEmail("");
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        addUser(new UserModel(name, surname, email, icon))
        resetForm();
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            
            <input 
                name="email"
                type="email" 
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="email"/>

            <input 
                name="name"
                type="text" 
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="imię"/>

            <input 
                name="surname"
                type="text" 
                value={surname}
                onChange={e => setSurname(e.target.value)}
                placeholder="nazwisko"/>

            <input 
                name="icon"
                type="text" 
                value={icon}
                onChange={e => setIcon(e.target.value)}
                placeholder="url obrazka"/>

            <input 
                type="submit" 
                value="Zapisz się!"/>
        </form>
    )
};

export default RegisterForm;