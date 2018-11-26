module.exports = {
  apps : [{
    name: 'API',
    script: 'app.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    
    env: {
      NODE_ENV: 'development',
      AWSRDS_EP: 'agars979.c8qzmmsw5czy.us-east-1.rds.amazonaws.com',
      AWSRDS_PW: 'Sisthebest93',
      PHOTON_ID: '5a0044001051373331333230',
      PHOTON_TOKEN: '484d03f24fc4be976c45825a044c030e3be8b406'
    },
    
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'node',
      host : '212.83.163.1',
      ref  : 'origin/master',
      repo : 'git@github.com:repo.git',
      path : '/var/www/production',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
