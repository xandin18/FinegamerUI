import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      const { email, senha } = this.loginForm.value;

      this.http.post<any>('https://localhost:7112/aplicattion/v1/login', { email, senha })
        .subscribe(
          response => {
            this.router.navigate(['/']); // Redireciona para a página inicial em caso de sucesso
          },
          error => {
            this.errorMessage = 'Erro ao fazer login. Verifique suas credenciais e tente novamente.';
            console.error('Erro no login:', error);
          }
        );
    } else {
      this.errorMessage = 'Por favor, preencha todos os campos.';
    }
  }
}
