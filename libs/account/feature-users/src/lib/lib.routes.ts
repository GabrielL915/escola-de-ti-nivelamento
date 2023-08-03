import { Route } from '@angular/router';
import { AccountFeatureUsersComponent } from './account-feature-users.component';
import { SignInComponent } from './containers/sign-in/sign-in.component';
import { SignUpComponent } from './containers/sign-up/sign-up.component';

export const accountFeatureUsersRoutes: Route[] = [
  {
    path: '',
    component: AccountFeatureUsersComponent,
    children: [
      {
        path: 'sing-in',
        component: SignInComponent,
      },
      {
        path: 'sing-up',
        component: SignUpComponent,
      },
    ],
  },
];
