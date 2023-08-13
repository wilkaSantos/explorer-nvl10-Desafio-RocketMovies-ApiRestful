import { ContainerInput } from './styles';

export function Input({ ...rest }){
    return(
        <ContainerInput>
            <input { ...rest } />
        </ContainerInput>
    );
}