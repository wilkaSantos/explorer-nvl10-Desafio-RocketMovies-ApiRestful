import { ContainerPreview, Content } from './styles';
import { LuClock3 } from 'react-icons/lu';
import { BiArrowBack } from 'react-icons/bi';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';
import { Link } from 'react-router-dom';
import { api } from '../../services/api';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import avatarPlaceHolder from '../../assets/userProfileDefault.png';
import { useAuth } from '../../hooks/auth';


export function Preview(){
    const { user } = useAuth();
    const [data, setData] = useState(null);
    const params = useParams();
    const navigate = useNavigate();
    
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/file/${user.avatar}` : avatarPlaceHolder;

    useEffect(()=>{
        async function fetchMovie(){
            const response = await api.get(`/movies/${params.id_movie}`);
            setData(response.data);
        }

        fetchMovie();
    }, []);

    return(
        <ContainerPreview>
            <Header />
            <Link to="/">
                <BiArrowBack />
                Voltar
            </Link>
            {
                data &&
                <Content>
                    <section>
                        <h1>{ data.title }</h1>
                    </section>
                    <div className='wrappedUserData'>
                        <img src={avatarUrl} alt="Imagem do usuario"/>
                        <p>Por {user.username}</p>
                        <LuClock3 />
                        <p>{user.created}</p>
                    </div>
                    {
                        data.tags &&
                        <div className='wrappedTags'>
                            {
                                data.tags.map((tag, id)=>(
                                    <Tag
                                        key={id}
                                        title={tag.tagname} 
                                    />
                                ))
                            }
                        </div>
                    }
                    <p>{ data.description  }</p>
                </Content>
            }
        </ContainerPreview>
    );
}