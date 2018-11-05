export const environment = {
  production: true,
  
  endpoints: {
    hub: 'http://localhost:9000/',
    drawChatSocket: 'http:/localhost:5000/',
    strokeLog: 'http://localhost:1337/logs/',
    snapShot: 'http://localhost:1337/snapshots/'
  },

  roomTimer: {
    tokenCap: 5,
    tokenIntervals: 1000 * 60 * 60 * 2,
    tokenTimeValue: 1000 * 60 * 60 * 4
  }
};
