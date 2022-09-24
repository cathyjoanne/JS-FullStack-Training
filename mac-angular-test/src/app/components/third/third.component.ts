import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {
  prodata: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("assets/products.json").subscribe((res: any) => {
      console.log(res.products);
      this.prodata = res.products;
    })
  }

}
