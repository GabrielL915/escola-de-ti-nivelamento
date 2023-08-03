import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './+store/auth.service';
import { AuthForm } from './forms/Auth.form';

@Component({
  selector: 'escola-de-ti-account-feature-users',
  templateUrl: './account-feature-users.component.html',
  styleUrls: ['./account-feature-users.component.scss'],
})
export class AccountFeatureUsersComponent implements OnInit {

  httpClient = inject(HttpClient);
  router = inject(Router);
  authService = inject(AuthService);

  form = new AuthForm();
/* 
  users$ = this.httpClient.get('/api/users/profile');
 */

  ngOnInit(): void {
      console.log(this.authService);
  }

  onSubmit() {
    this.authService.singIn(this.form.value).subscribe(console.log);
    this.httpClient.post('/api/users', this.form.value).subscribe(console.log);
  }

  gotoStore() {
    this.router.navigate(['/']);
  }
}
