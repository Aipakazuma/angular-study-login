export let LOGIN_API_URL: string = 'http://cake-test.localhost/login';
export let LOGOUT_API_URL: string = 'http://cake-test.localhost/logout';
export let AUTH_PROVIDERS: Array<any> = [
  // {provide: AuthService, useClass: AuthService},
  // {provide: LoggedInGardService, useClass: LoggedInGardService},
  {provide: LOGIN_API_URL, useValue: LOGIN_API_URL},
  {provide: LOGOUT_API_URL, useValue: LOGOUT_API_URL},
];
