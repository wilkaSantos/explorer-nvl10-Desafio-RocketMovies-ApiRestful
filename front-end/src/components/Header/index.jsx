import avatarPlaceHolder  from '../../assets/userProfileDefault.png';
import { ContainerHeader, Profile, Logout, Title } from './styles';
import { useNavigate } from 'react-router-dom'; 
import { useAuth } from '../../hooks/auth';
import { Input } from '../../components/Input';
import { api } from '../../services/api';
import { useState, useEffect } from 'react';

export function Header(){
    const { signOut, user } = useAuth();
    const navigate = useNavigate();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/file/${user.avatar}` : avatarPlaceHolder; 

    function handleSignOut(){
        navigate('/');
        signOut();
    }

    function handleHome(){
        navigate('/');
    }

    function handleProfile(){
        navigate('/profile');
    }

    return(
        <ContainerHeader>
            <Title onClick = {handleHome}>Rocketmovies</Title>
            <Input 
                placeholder="Pesquisar pelo título"
            />
            <Profile>
                <div>
                    <h2 onClick={handleProfile} >{user.username}</h2>
                    <Logout onClick={handleSignOut} >Sair</Logout>
                </div>
                <img 
                    src={avatarUrl}
                    alt="Foto do usuario"
                    onClick ={handleProfile} 
                />
            </Profile>
        </ContainerHeader>
    );
}