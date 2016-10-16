module.exports = {
  development: {
    client: 'pg',
    connection: { user: 'cek', database: 'battleship', host: 'localhost' }
  },
  production: {
    client: 'postgresql',
    connection: {
      host: process.env.PG_HOST || 'localhost',
      user: process.env.PG_USER || 'postgres',
      password: process.env.PG_PASSWORD || 'postgres',
      database: 'postgres://nkpwgmaxfjshhp:c6DIW4EziII-effGiHO7dFSjad@ec2-54-243-203-87.compute-1.amazonaws.com:5432/dadraqijfvt324',
    },
    migrations: {
      tableName: 'migrations'
    }
  }
};