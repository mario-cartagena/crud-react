import { Formulario } from "../components/common/Formulario"
import { post } from "../services/usuariosService";
import { useNavigate } from "react-router-dom";

export const CreateUser = () => {
    const navigateTo = useNavigate();

    const recieveCreateUser = async (newUser) => {
        await post('/users', newUser);
        alert('Usuário creado con éxito');
        navigateTo('/listUser');
    }

    return <>
        <h1>Este es la página create user</h1>
        <Formulario handleUser={recieveCreateUser}></Formulario>
    </>
}