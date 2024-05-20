import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent{
  title = 'finegamer-app';
  produtos: Produto[] = [];
  form!: FormGroup;

  produtoAtual = 0;

  constructor(private http: HttpClient) { }

  getProdutos(): Observable<Produto[]> {
    const url = 'https://localhost:7112/aplicattion/v1/produto';
    return this.http.get<Produto[]>(url);
  }

  ngOnInit(): void {
    this.getProdutos().subscribe(produtos => {
      this.produtos = produtos;
    });
  }

  avancarProduto() {
    this.produtoAtual = (this.produtoAtual + 1) % this.produtos.length;
  }

  retrocederProduto() {
    this.produtoAtual = (this.produtoAtual - 1 + this.produtos.length) % this.produtos.length;
  }
}

export class Produto {
  nome: string;
  foto: string;
  valor: number;

  constructor(nome: string, foto: string, preco: number) {
    this.nome = nome;
    this.foto = foto;
    this.valor = preco;
  }
}
