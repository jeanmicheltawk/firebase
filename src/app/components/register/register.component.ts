import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  Router
} from '@angular/router';
import {
  AuthService
} from 'src/app/services/auth/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  RegisterForm: FormGroup;
  submitting = false;
  constructor(
    private auth: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.RegisterForm = this.fb.group({
      fname: new FormControl(''),
      lname: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl('')
    });
  }
  ngOnInit(): void {}

  register(): void {
    this.submitting = true;
    const email = this.RegisterForm.value.email;
    const password = this.RegisterForm.value.password;
    if (email && password) {
      this.auth.SignUp(email, password).then(_ => {
        this.submitting = false;
      }, err => {
        this.submitting = false;
      });
    } else {
      this.submitting = false;

      return;
    }
      }

  gotoDashboardPage(): void {
    this.router.navigate(['dashboard']);
  }
  gotoSigninPage(): void {
    this.router.navigate(['login']);
  }
}
