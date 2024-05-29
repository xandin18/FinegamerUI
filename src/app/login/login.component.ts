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
  
      this.http.get<any>(`https://localhost:7112/aplicattion/v1/login/${email}/password/${senha}`)
        .subscribe(
          response => {
            if(response == 1){
              this.router.navigate(['/']);
            }
            else if(response == 2){
              this.router.navigate(['/admin']);
            }
            else if(response == 3){
              alert('Erro ao fazer login. Verifique suas credenciais e tente novamente.');
            }
          },
          error => {
            alert('Erro ao fazer login. Verifique suas credenciais e tente novamente.');
            console.error('Erro no login:', error);
          }
        );
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }
}
