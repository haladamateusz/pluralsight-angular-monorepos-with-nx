import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const AuthActions = createActionGroup({
  source: 'Auth',
  events: {
    Login: emptyProps(),
    'Login Complete': props<{ profile: any; isLoggedIn: boolean }>(),
    'Check Auth': emptyProps(),
    Logout: emptyProps(),
    'Logout Complete': emptyProps(),
  },
});