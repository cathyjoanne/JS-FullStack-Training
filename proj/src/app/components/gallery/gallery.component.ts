import { Component, OnInit } from '@angular/core';
import { MyserService } from 'src/app/services/myser.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  products:any;
  constructor(private ser:MyserService) { }

  ngOnInit(): void {
    this.products=this.ser.getProducts();
  }

}
