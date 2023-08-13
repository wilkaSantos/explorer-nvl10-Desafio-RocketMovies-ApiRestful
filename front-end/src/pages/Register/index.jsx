import { ContainerRegister, Form, Image } from './styles';
import { BiArrowBack } from 'react-icons/bi';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { api } from '../../services/api';

export function Register(){

    const [username, setUserName] = useState("");
    const [user_email, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const navigate = useNavigate();

    function signUp(){

        if(!username || !user_email || !userPassword){
            return alert('Preencher todos os campos.');
        }

        api.post('/users', {username, user_email, userPassword}).then(()=>{
            alert('Usuário cadastrado.');
            navigate('/');

        }).catch(error => {
            if(error.response){
                alert('error.response.data.message');
            }else{
                alert('Não foi possível cadastrar.');
            }
        });

    }

    return(
        <ContainerRegister>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <h2>Crie sua conta</h2>

                <Input
                    type = "text" 
                    placeholder ="Nome"
                    onChange = {event => setUserName(event.target.value)}
                />
                <Input 
                    type = "text"
                    placeholder ="E-mail"
                    onChange = {event => setUserEmail(event.target.value)}
                />
                <Input 
                    type = "password"
                    placeholder ="Senha"
                    onChange = {event => setUserPassword(event.target.value)}
                />

                <Button 
                    title="Cadastrar" onClick = {signUp}
                />

                <Link to="/">
                    <BiArrowBack />
                    Voltar para o login
                </Link>
            </Form>
            <Image />
        </ContainerRegister>
    );
}