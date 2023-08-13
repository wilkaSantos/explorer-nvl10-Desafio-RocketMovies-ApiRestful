import { ContainerCreate, Form } from './styles';
import { BiArrowBack } from 'react-icons/bi';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { TagItem } from '../../components/TagItem';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export function CreateMovie(){
    const navigate = useNavigate();
    
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [rating, setRating] = useState(null);

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    function handleAddTag(){
      setTags(prevState => [...prevState, newTag]);
      setNewTag("");
    }

    function handleRemoveLink(deleted){
        setTags(prevState => prevState.filter(tag => tag !== deleted));
    }

    async function handleNewMovie(){
        if(!title || !rating || !description){
            return alert("Os campos título, nota e observação são obrigatórios.");
        }

        await api.post('/movies', {title, description, rating, tags})
        .then(()=>{
            alert("Filme cadastrado.");
            navigate('/');
        })
        .catch(error => {
            if(error.response){
                alert(error.response.data.message);
            }else{
                alert("Não foi possível cadastrar o filme.");
            }
        });
    }

    return(
        <ContainerCreate>
            <Header />
            <Link to="/">
                <BiArrowBack />
                Voltar
            </Link>
            <main>
                <Form>
                    <h1>Novo Filme</h1>
                    <section className='wrappedInputs'>
                        <Input
                            type="text"
                            placeholder ="Título"
                            onChange={event => setTitle(event.target.value)}
                        />
                        <Input
                            type="number" 
                            placeholder ="Sua nota (de 0 a 5)"
                            min="0"
                            max="5"
                            onChange={event => setRating(event.target.value)}
                        />
                    </section>
                    <textarea
                        type="text"
                        placeholder='Observações'
                        onChange={event => setDescription(event.target.value)}
                    ></textarea>

                    <h2>Marcadores</h2>
                    <section className='wrappedItems'>
                        {
                            tags.map((tag, index)=>(
                                <TagItem
                                    key={index}
                                    value={tag}
                                    onClick={()=> handleRemoveLink(tag)} 
                                />
                            ))
                        }
                        <TagItem
                            isNew
                            placeholder="Nova Tag"
                            value={newTag}
                            onChange={event => setNewTag(event.target.value)}
                            onClick={handleAddTag}
                        />
                    </section>

                    <section className='wrappedButton'>
                        <Button 
                            title="Salvar Filme"
                            onClick={handleNewMovie}
                        />
                    </section>
                </Form>
            </main>
        </ContainerCreate>
    );
}