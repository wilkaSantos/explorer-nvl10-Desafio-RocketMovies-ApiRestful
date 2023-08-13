import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Preview } from '../pages/MoviePreview';
import { CreateMovie } from '../pages/CreateMovie';
import { Profile } from '../pages/Profile';


export function AppRoutes(){
    return(
        <Routes>
            <Route path='/' element={ < Home /> } />
            <Route path='/profile' element={ < Profile /> } />
            <Route path='/preview/:id_movie' element={ < Preview /> } />
            <Route path='/createMovie' element={ < CreateMovie /> } />
        </Routes>
    );
}