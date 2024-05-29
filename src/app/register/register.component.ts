import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: ['', Validators.required],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordsMatchValidator });
  }

  passwordsMatchValidator(form: FormGroup) {
    const senha = form.get('senha')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return senha === confirmPassword ? null : { mismatch: true };
  }

  onSubmit(): void {
    const formValue = this.registerForm.value;
    if (this.registerForm.valid) {
      
      const payload = {
        email: formValue.email,
        senha: formValue.senha
      };

      console.log(payload);

      this.http.post('https://localhost:7112/aplicattion/v1/cliente', payload)
        .subscribe(
          response => {
            alert('Registrado com sucesso');
          },
          error => {
            alert('Algo de errado está acontecendo tente novamente');
          }
        );
    }else{
      alert('Algo de errado está acontecendo tente novamente');
    }    
  }
}
