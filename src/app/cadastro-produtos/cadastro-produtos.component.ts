import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-produtos',
  templateUrl: './cadastro-produtos.component.html',
  styleUrls: ['./cadastro-produtos.component.scss']
})
export class CadastroProdutosComponent implements OnInit {
  registerForm!: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      cd_Registrante: [1],
      cd_Desconto: [null],
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
      valor: ['', Validators.required],
      imagem: [null, Validators.required]
    });
  }


  onSubmit(): void {

    if (this.registerForm.valid) {
      const formValue = this.registerForm.value;
      const fileInput = document.getElementById('fileInput') as HTMLInputElement;

      if (fileInput.files && fileInput.files.length) {
        const file = fileInput.files[0];
        const reader = new FileReader();

        reader.onload = () => {
          const binaryString = reader.result as string;
          const base64String = btoa(binaryString);

          const payload = {
            cd_Registrante: formValue.cd_Registrante,
            nome: formValue.nome,
            descricao: formValue.descricao,
            valor: formValue.valor,
            imagem: base64String,
          };

          console.log(payload);

          this.http.post('https://localhost:7112/aplicattion/v1/produto', payload)
            .subscribe(
              response => {
                alert('Registrado com sucesso');
              },
              error => {
                alert('Registro de forma incorreta');
                console.log(payload);
                console.log(error);
              }
            );
        };

        reader.readAsBinaryString(file);
      } else {
        alert('Por favor, selecione uma imagem.');
      }
    } else {
      alert('Insira todos os valores');
    }
  }
}
