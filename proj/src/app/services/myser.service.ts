import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserService {

  constructor() { }
  getCourses(){
    return ["php","java","sql","c++"];
  }
  getProducts(){
    return ["iphone xs max", "google pixel", "samsung z-flip"];
  }
}
