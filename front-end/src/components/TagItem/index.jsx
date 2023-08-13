import { FiPlus, FiX } from 'react-icons/fi';
import { ContainerItem } from './styles';

export function TagItem({ isNew = false, value, onClick, ...rest }){
    return(
        <ContainerItem isNew={isNew}>
            <input type="text" value={value} readOnly={!isNew} {...rest} />
            <button type="button" onClick={onClick} className={ isNew ? 'button-add': 'button-remove'}>
                { isNew ? <FiPlus /> : <FiX /> }
            </button>
        </ContainerItem>
    );
}
