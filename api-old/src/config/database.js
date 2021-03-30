module.exports = {
    dialect: 'postgres',
    host:  process.env.NODE_ENV === 'production' ? process.env.DB_HOST_ADDRESS : 'localhost',
    port: process.env.NODE_ENV === 'production' ? process.env.DB_HOST_PORT : 5432,
    logging: true,
    database: process.env.NODE_ENV === 'production' ? process.env.DB_NAME : 'business_eagle',
    username: process.env.NODE_ENV === 'production' ? process.env.DB_USERNAME : 'postgres',
    password: process.env.NODE_ENV === 'production' ? process.env.DB_PASSWORD : 'postgres',
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true
    }
  }