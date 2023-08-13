import { ContainerHome, Content } from './styles';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import { Movies } from '../../components/Movies';
import { Section } from '../../components/Section';
import { useState, useEffect } from 'react';
import { api } from '../../services/api';


export function Home(){
    const navigate = useNavigate();

    const [movies, setMovies] = useState([]);

    function handleNeMovie(){
        navigate('/createMovie');
    }

    function handlePreviewMovies(id_movie){
        navigate(`/preview/${id_movie}`);
    }

    useEffect(()=>{
        async function fetchMovies(){
            const response = await api.get('/movies');
            setMovies(response.data);
        }
        fetchMovies();
    },[]);

    return(
        <ContainerHome>
            <Header />
            <section>
                <h1>Meus Filmes</h1>
                <Button title ="+ Adicionar filme" onClick= {handleNeMovie}  />
            </section>
            <Content>
                <Section>
                    {
                        movies.map((movie, index)=>(
                            <Movies 
                                key={index}
                                data={movie}
                                onClick={()=> handlePreviewMovies(movie.id_movie)}
                            />
                        ))
                    }
                </Section>
            </Content>          
        </ContainerHome>
    );
}
