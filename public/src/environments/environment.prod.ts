export const environment = {
  production: true,
  
  endpoints: {
    socketServer: '18.224.96.154:443/',
    logs: 'http://18.224.96.154:81/logs/',
    thumb: 'http://18.224.96.154:81/thumbs/'
  },

  roomTimer: {
    tokenCap: 5,
    tokenInterval: 1000 * 60 * 60 * 2,
    tokenTimeValue: 1000 * 60 * 60 * 4
  }
  // endpoints: {
  //   socketServer: 'localhost:5000/',
  //   logs: 'http://localhost:1337/logs/',
  //   thumb: 'http://localhost:1337/thumbs/'
  // },

  // roomTimer: {
  //   tokenCap: 5,
  //   tokenInterval: 1000 * 60 * 60 * 2,
  //   tokenTimeValue: 1000 * 60 * 60 * 4
  // }
};
