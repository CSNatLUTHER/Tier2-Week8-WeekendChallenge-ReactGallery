const pg = require( 'pg' );

const pool = new pg.Pool({
    database: 'gallery_weekend_challenge',
    host: 'localhost',
    port: 5432,
    max: 12,
    idleTimeoutMillis: 27000
})

module.exports = pool;