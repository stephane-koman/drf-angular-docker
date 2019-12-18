// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  auth: {
    clientID: 'rgfrSD8QdbdI7Lv3IMUZi5bBFi5APaeB',
    domain: 'dev-slr11awd.auth0.com', // e.g., you.auth0.com
    audience: 'http://djangoangularapi',
    auth0RedirectUri: 'http://192.168.57.3:8080/callback', // URL to return to after auth0 login
    auth0ReturnTo: 'http://192.168.57.3:8080', // URL to return to after auth0 logout
    scope: 'openid profile'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
