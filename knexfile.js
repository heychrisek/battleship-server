module.exports = {
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'cek',
    database: 'battleship'
  },
  migrations: {
    tableName: 'migrations'
  },
  production: {
    client: 'postgresql',
    connection: {
      database: 'postgres://nkpwgmaxfjshhp:c6DIW4EziII-effGiHO7dFSjad@ec2-54-243-203-87.compute-1.amazonaws.com:5432/dadraqijfvt324',
      user:     'username',
      password: 'password'
    }
  }
}