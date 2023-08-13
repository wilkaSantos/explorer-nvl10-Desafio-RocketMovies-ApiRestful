
exports.up = knex => knex.schema.createTable('tags', table => {
    table.increments('id_tag');
    table.integer('id_movie').references('id_movie').inTable('movies').onDelete('CASCADE');
    table.integer('id_user').references('id_user').inTable('users');
    table.text('tagname');
});

exports.down = knex => knex.schema.dropTable('tags');
