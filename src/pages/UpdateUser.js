import { useEffect, useState, useCallback } from "react";
import { Formulario } from "../components/common/Formulario"
import { useNavigate, useParams } from "react-router-dom";
import { getById, put } from "../services/usuariosService";

export const UpdateUser = () => {
    const[user, handleUser] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();

 
    const getUser = useCallback(async() => {
        const response = await getById(`users/${id}`);
        handleUser(response);
      }, [id]);

    useEffect(() => {
        getUser();
    }, [getUser])

    const handleNewUser = async (newUser) => {
        await put(`users/${id}`, newUser);
        alert("Usuário actualizado con éxito");
        navigate('/listUser')
    }
    return <>
    
        <h1>Este es la página update user</h1>
        <Formulario 
            username={user.username} 
            age={user.age} 
            email={user.email} 
            password={user.password}
            phone={user.phone}
            address={user.address}
            handleUser={handleNewUser} />
    </> 
}