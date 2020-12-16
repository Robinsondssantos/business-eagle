module.exports = {
  apps : [{
    script: 'build/server.js',
    watch: '.',
    env: {
      'NODE_ENV': 'development',
      'AUTH_SECRET': 'secret',
      'BASE_URL': 'http://localhost:8080',
      'HOST_ADDRESS': 'localhost',
      'HOST_PORT': 5432,
      'DB_NAME': 'business_eagle',
      'DB_USERNAME': 'postgres',
      'DB_PASSWORD': 'postgres',
      'SERVER_PORT': 3333
    },
    env_production: {
      'NODE_ENV': 'development',
      'AUTH_SECRET': '',
      'BASE_URL': 'http://localhost:8080',
      'HOST_ADDRESS': 'localhost',
      'HOST_PORT': 5432,
      'DB_NAME': 'business_eagle_sql_db',
      'DB_USERNAME': 'postgres',
      'DB_PASSWORD': '',
      'SERVER_PORT': 3000      
    }
  }],
};
