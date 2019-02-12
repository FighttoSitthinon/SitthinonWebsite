// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAHJvlTqE-K7RVGrySv1CbHz8FxhX6Dnfk',
    authDomain: 'sitthinonwebsite.firebaseapp.com',
    databaseURL: 'https://sitthinonwebsite.firebaseio.com',
    projectId: 'sitthinonwebsite',
    storageBucket: 'sitthinonwebsite.appspot.com',
    messagingSenderId: '1097465210869'
  }
};
