// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  endpoints: {
<<<<<<< HEAD
    hub: 'http://localhost:9000/',
    drawChatSocket: 'http://localhost:5000/',
    strokeLog: 'http://localhost:1337/logs/',
    snapShot: 'http://localhost:1337/snapshots/'
  },

  roomTimer: {
    tokenCap: 5,
    tokenIntervals: 1000 * 60 * 60 * 2,
    tokenTimeValue: 1000 * 60 * 60 * 4
  }
=======
    socketServer: 'localhost:5000/',
    logs: 'http://localhost:1337/logs/',
    thumb: 'http://localhost:1337/thumbs/'
  },
>>>>>>> dev
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
