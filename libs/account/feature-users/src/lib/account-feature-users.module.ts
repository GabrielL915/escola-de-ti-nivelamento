import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { accountFeatureUsersRoutes } from './lib.routes';
import { AccountFeatureUsersComponent } from './account-feature-users.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SignInComponent } from './containers/sign-in/sign-in.component';
import { SignUpComponent } from './containers/sign-up/sign-up.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(accountFeatureUsersRoutes),
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AccountFeatureUsersComponent,
    SignInComponent,
    SignUpComponent,
  ],
})
export class AccountFeatureUsersModule {}
