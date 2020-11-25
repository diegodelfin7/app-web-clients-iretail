// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
let firebaseConfig = {
  apiKey: "AIzaSyCu4Yg_OTgJewFS-o8IbxvN-yS0vbWIFo0",
  authDomain: "web-client-intercorp.firebaseapp.com",
  databaseURL: "https://web-client-intercorp.firebaseio.com",
  projectId: "web-client-intercorp",
  storageBucket: "web-client-intercorp.appspot.com",
  messagingSenderId: "431625738778",
  appId: "1:431625738778:web:dc4d1f89f71162c4c70fa3"
};

export const environment = {
  production: false,
  firebaseConfig 
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
