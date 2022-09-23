import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  prodata:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get("assets/products.json").subscribe((res:any)=>{
      console.log(res.products);
      this.prodata=res.products;
    })
  }

}
