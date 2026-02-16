import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form = this.fb.group({
    email: [''],
    password: ['']
  });

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}

  login() {
    if (this.form.invalid) return;

    this.auth.login(this.form.value).subscribe({
      next: (res: any) => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', JSON.stringify(res.user));

        console.log(res.user?.role,"res.user?.roleres.user?.role")


        if (res.user?.role === 'admin') {
          this.router.navigate(['/admin/products']);
        } else {
          this.router.navigate(['/']);
        }
      },
      error: (err) => {
        console.error('Login failed', err);
      }
    });
  }
}
