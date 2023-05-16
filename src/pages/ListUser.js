import { useEffect, useState } from "react"
import { deletes, get } from "../services/usuariosService";
import { useNavigate } from "react-router-dom";

export const ListUser = () => {
    const navigate = useNavigate();
    const [users, handleUsers] = useState([]);

    const getUsers = async() => {
        const getusers = await get('users');
        handleUsers(getusers);
    }

    useEffect(() => {        
        getUsers();
    }, [])

    const handleDelete = async (id, name) => {
        await deletes(`users/${id}`);
        alert(`El usuario ${name} se ha eliminado`);
        getUsers();
    }

    const handleEdit = (user) => {
        navigate(`/updateUser/${user.id}`)
    }

    return <>
        <h1>Este es la página list user</h1>
        <ul>
        {
            users.map(user => <li key={user.id}>{user.username} <button onClick={() => handleDelete(user.id, user.username)} >Eliminar</button> <button onClick={() => handleEdit(user)}>Editar</button> </li>)
        }
        </ul>
    </>
}