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
      database: 'postgres://nkpwgmaxfjshhp:c6DIW4EziII-effGiHO7dFSjad@ec2-54-243-203-87.compute-1.amazonaws.com:5432/dadraqijfvt324',
    },
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        tableName: 'migrations'
    }
  }
};