import { Component } from '@angular/core';
import { AuthForm } from '../../forms/auth.form';
import { Router } from '@angular/router';

@Component({
  selector: 'escola-de-ti-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  form = new AuthForm();

  constructor(private router: Router) {}

  onSubmit() {
    console.log(this.form.value);
  }

  goToSignUp() {
     this.router.navigate(['/auth-users/sing-up']);
  }
}
