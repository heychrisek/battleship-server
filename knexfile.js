module.exports = {
  development: {
    client: 'pg',
    connection: { user: 'cek', database: 'battleship', host: 'localhost' }
  },
  production: {
    client: 'pg',
    connection: 'postgres://trudlkvcwyqudi:nnFj0zaxKBjDl_nVFJK7BesuU7@ec2-184-72-240-189.compute-1.amazonaws.com:5432/d9i9dcnohjdc8v',
    migrations: {
      tableName: 'migrations'
    }
  }
};