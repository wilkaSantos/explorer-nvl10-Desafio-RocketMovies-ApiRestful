const baseConnection = require('../database/knex');

class movieController{

    async create(request, response){
        const { title, description, rating, tags } = request.body;
        const id_user = request.user.id;

        const [ id_movie ] = await baseConnection('movies').insert({ title, description, rating, id_user });

        const tagsInsert = tags.map(tag => {
            return {
                id_movie,
                id_user,
                tagname: tag
            }
        });

        await baseConnection('tags').insert(tagsInsert);
        
        return response.json({ "status": "201", "message": "Filme cadastrado com Sucesso." });
    }

    async show(request, response){
        const { id_movie } = request.params;

        const movie = await baseConnection('movies').where({ id_movie }).first();
        const tags = await baseConnection('tags').where({ id_movie }).orderBy('tagname');

        return response.json({... movie, tags});
    }

    async index(request, response){
        const id_user = request.user.id;
        let movies;

       movies = await baseConnection('movies').where({ id_user }).orderBy('title');

        const userTags = await baseConnection('tags').where({ id_user });
        const moviesAndTags = await movies.map(movie => {
            const moviesTags = userTags.filter(tag => tag.id_movie === movie.id_movie);

            return{...movie, tags: moviesTags};
        });

        response.json(moviesAndTags);
    }

    async delete(request, response){
        const { id_movie } = request.params;
        const tagExists = await baseConnection('tags').where({ id_movie });

        if(tagExists.length >= 1){
            return response.json({ 'message': 'Não será possível, excluir o filme. Pois existe tag vinculada.' });
        }

        await baseConnection('movies').where({ id_movie }).delete();

        return response.json({ 'message': 'Filme excluido.' });
    }
}

module.exports = movieController;