import { ContainerLogin, Form, Image } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { useState } from 'react';

export function Login(){

    const [user_email, setUserEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signIn } = useAuth();

    function handleSignIn(){
        signIn({ user_email, password });
    }


    return(
        <ContainerLogin>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça seu login</h2>
                <Input
                    type="email" 
                    placeholder="E-mail" 
                    onChange={event => setUserEmail(event.target.value)}
                />
                <Input
                    type="password"
                    placeholder="Senha"
                    onChange={event => setPassword(event.target.value)}
                />
                
                <Button title ="Entrar" onClick ={handleSignIn}/>

                <Link to="/register">Criar conta</Link>
            </Form>
            <Image />
        </ContainerLogin>
    );
}