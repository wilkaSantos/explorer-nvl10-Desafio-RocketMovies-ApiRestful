import { ContainerMovies } from './styles';
import { Tag } from '../Tag';

export function Movies({ data, ...rest }){
    return(
        <ContainerMovies {...rest}>
            <h1>{ data.title }</h1>
            <div>
                <span>Nota:</span>
                <label>{ data.rating }</label>
             </div>
            <p>{ data.description }</p>
            { 
                <footer>
                    {
                        data.tags.map((tag, id) => 
                            <Tag 
                                key={id} 
                                title = {tag.tagname}
                            />
                        )
                    }
                </footer>
            }
        </ContainerMovies>
    );
}