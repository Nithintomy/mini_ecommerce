import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterLink],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  loading = false;

  constructor(private fb:FormBuilder,
    private auth:AuthService,
    private router: Router
  ){}

  form = this.fb.group({
    name:['',[Validators.required]],
    email:['',[Validators.required, Validators.email]],
    password:['',[Validators.required],Validators.minLength(6)],

  })


  register(){
    if(this.form.invalid){
      return
    }

    this.auth.register(this.form.value).subscribe({
      next(res:any){
        localStorage.setItem('token',res.token)
        localStorage.setItem('user',JSON.stringify(res.user))
      }
    })



  }

}
