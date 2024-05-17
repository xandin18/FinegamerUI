import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  title = 'finegamer-app';
  produtos: Produto[] = [];

  constructor() { }

  ngOnInit(): void {
    this.produtos.push(new Produto("Produto 1", "produto1.png", 25.99));
    this.produtos.push(new Produto("Produto 2", "https://www.logitechstore.com.br/media/catalog/product/cache/1/image/634x545/9df78eab33525d08d6e5fb8d27136e95/g/2/g203-01.png", 19.99));
    this.produtos.push(new Produto("Produto 3", "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/peripherals/alienware/peripherals/alienware-trimode-720m-wireless-mouse/mouse-aw-aw720m-wireless-pdp-mod-04-dsotm.psd?qlt=95&fit=constrain%2C1&hei=321&wid=390&fmt=png-alpha", 35.50));
    this.produtos.push(new Produto("Teclado", "https://leonora.vteximg.com.br/arquivos/ids/163473-1000-1000/teclado-gamer-teclas-coloricas-geek-vermelho-letron-74491---1.png?v=638024972862400000", 300));
    this.produtos.push(new Produto("Mouse", "qualquer coisa", 230))
    this.produtos.push(new Produto("Mouse", "qualquer coisa", 230))
    this.produtos.push(new Produto("Mouse", "qualquer coisa", 230))
    this.produtos.push(new Produto("Mouse", "qualquer coisa", 230))
    this.produtos.push(new Produto("Mouse", "qualquer coisa", 230))
  }

  produtoAtual = 0;

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
  preco: number;

  constructor(nome: string, foto: string, preco: number) {
    this.nome = nome;
    this.foto = foto;
    this.preco = preco;
  }
}