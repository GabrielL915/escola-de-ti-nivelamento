import { Component } from '@angular/core';
import { UserForm } from '../../forms/user-form';
import { AuthService } from '../../+store/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'escola-de-ti-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  form = new UserForm();

  constructor(private authService: AuthService, private router: Router) {

  }

  onSubmit() {
    console.log(this.form.value);
  }

  goToSignIn() {
    this.router.navigate(['/auth-users/sing-in']);
  }
}
