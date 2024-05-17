import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent {
  nameproduct: string = "";
  preco = 200.90;  

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.nameproduct = params['name']);
  }

}
