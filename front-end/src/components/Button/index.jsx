import { ContainerButton } from './styles';

export function Button({ title,  ...res}){
    return(
        <ContainerButton type="button"  {...res}>
           { title } 
        </ContainerButton>
    );
}