import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent {
  nameproduct: string = "";
  foto: any;
  descricao!: string;
  preco: any;  

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.route.params.subscribe(params => this.nameproduct = params['name']);
  }

  getProdutos(produto: string): Observable<Produto> {
    const url = `https://localhost:7112/aplicattion/v1/produto/${produto}`;
    return this.http.get<Produto>(url);
  }

  ngOnInit(): void {
    this.getProdutos(this.nameproduct).subscribe(produto => {
      this.foto = produto.imagem ? `data:image/png;base64,${produto.imagem}` : "",
      this.descricao = produto.descricao,
      this.preco = produto.valor
    });
  }
}

export interface Produto {
  nome: string;
  imagem: string;
  descricao: string;
  valor: number;
  foto?: string; // Adicionando opcionalmente para o mapeamento
}
