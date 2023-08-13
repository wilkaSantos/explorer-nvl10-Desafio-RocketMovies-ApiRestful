import { ContainerProfile, Form, Avatar } from './styles';
import { BiArrowBack } from 'react-icons/bi';
import { AiOutlineCamera } from 'react-icons/ai';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuth  } from '../../hooks/auth';
import { api } from '../../services/api';
import avatarPlaceHolder from '../../assets/userProfileDefault.png';

export function Profile(){
    const { user, updateProfile } = useAuth();

    const [username, setUserName] = useState(user.username);
    const [user_email, setUserEmail] = useState(user.user_email);
    const [oldPassword, setPasswordOld] = useState();
    const [newPassword, setPasswordNew] = useState();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/file/${user.avatar}` : avatarPlaceHolder;

    const [avatar, setAvatar] = useState(avatarUrl);
    const [fileAvatar, setFileAvatar] = useState(null);

    async function handleUpdate(){
        const updated = {
            username,
            user_email,
            oldPassword,
            newPassword
        }

        const userUpdated = Object.assign(user, updated);
        await updateProfile({ user: userUpdated, fileAvatar });
    }
    
    async function handleChangeAvatar(event){
        const file = event.target.files[0];
        setFileAvatar(file);

        const imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview);
    }


    return(
        <ContainerProfile>
            <header>
                <Link to="/">
                    <BiArrowBack />
                    Voltar
                </Link>
            </header>
            <Form>
                <Avatar>
                    <img src={avatar} alt="Imagem do usuário" />
                    <label htmlFor="avatar">
                        <AiOutlineCamera />
                        <input 
                            type="file" 
                            id="avatar"
                            onChange={handleChangeAvatar} 
                        />
                    </label>
                </Avatar>
                <Input 
                    type="text" 
                    placeholder ="Nome"
                    value = {username}
                    onChange={event => setUserName(event.target.value)}
                />
                <Input 
                    type="text" 
                    placeholder ="E-mail"
                    value = {user_email}
                    onChange ={event => setUserEmail(event.target.value)}
                />
                <Input 
                    type="password" 
                    placeholder ="Senha atual"
                    onChange={event => setPasswordOld(event.target.value)}
                />
                <Input 
                    type="password" 
                    placeholder ="Nova senha"
                    onChange={event => setPasswordNew(event.target.value)}
                 />

                <Button title="Salvar" onClick ={handleUpdate} />
                
            </Form>                
        </ContainerProfile>
    );
}