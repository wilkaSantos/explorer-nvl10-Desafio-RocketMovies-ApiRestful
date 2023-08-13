
exports.up = knex => knex.schema.createTable('movies', table => {
    table.increments('id_movie');
    table.text('title');
    table.text('description');
    table.integer('rating');
    table.integer('id_user').references('id_user').inTable('users');
    table.timestamp('created').default(knex.fn.now());
    table.timestamp('updated').default(knex.fn.now());
});

exports.down = knex => knex.schema.dropTable('movies');
