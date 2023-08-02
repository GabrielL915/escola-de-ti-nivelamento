import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

export class AuthForm extends FormGroup {
  constructor() {
    super({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }
}

@Component({
  selector: 'escola-de-ti-account-feature-users',
  templateUrl: './account-feature-users.component.html',
  styleUrls: ['./account-feature-users.component.scss'],
})
export class AccountFeatureUsersComponent {

  httpClient = inject(HttpClient);
  router = inject(Router);

  form = new AuthForm();

  users$ = this.httpClient.get('/api/auth/profile');

  onSubmit() {
    this.httpClient.post('/api/users', this.form.value).subscribe(console.log);
  }

  gotoStore() {
    this.router.navigate(['/']);
  }
}
