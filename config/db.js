var config = {
  development: {
    //url to be used in link generation
    url: 'mongodb://spoofed:spoofed@ds119750.mlab.com:19750/903takings_mongodb'
    //mongodb connection settings
    //database: { host: '127.0.0.1', port: '27016', db: 'site' },
    //server details
    //server: { host: '127.0.0.1', port: '3420' }
  },
  production: {
    //url to be used in link generation
    url: 'mongodb://spoofed:spoofed@ds119750.mlab.com:19750/903takings_mongodb'
    //mongodb connection settings
    //database: { host: '127.0.0.1', port: '27017', db: 'site' },
    //server details
    //server: { host: '127.0.0.1', port: '3421' }
  }
};
module.exports = config;
