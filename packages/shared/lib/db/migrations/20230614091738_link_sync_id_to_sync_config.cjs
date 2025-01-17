const tableName = '_nango_sync_configs';
const syncs = '_nango_syncs';

exports.up = function (knex, _) {
    return knex.schema.withSchema('nango').alterTable(tableName, function (table) {
        table.uuid('sync_id').references('id').inTable(`nango.${syncs}`).onDelete('CASCADE');
    });
};

exports.down = function (knex, _) {
    return knex.schema.withSchema('nango').alterTable(tableName, function (table) {
        table.dropColumn('sync_id');
    });
};
