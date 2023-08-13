
exports.up = knex => knex.schema.createTable('users', table => {
    table.increments('id_user');
    table.text('username');
    table.text('user_email');
    table.text('password');
    table.text('avatar');
    table.timestamp('created').default(knex.fn.now());
    table.timestamp('updated').default(knex.fn.now());

});


exports.down = knex => knex.schema.dropTable('users');
