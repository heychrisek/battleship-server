module.exports = {
  development: {
    client: 'pg',
    connection: { user: 'cek', database: 'battleship', host: 'localhost' }
  },
  production: {
    client: 'pg',
    connection: 'postgres://nkpwgmaxfjshhp:c6DIW4EziII-effGiHO7dFSjad@ec2-54-243-203-87.compute-1.amazonaws.com:5432/dadraqijfvt324'
    migrations: {
      tableName: 'migrations'
    }
  }
};