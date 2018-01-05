import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private http:Http) { }
    productObj:object = {};
    confirmationMsg:string = "New Data has been added";
    isAdded:boolean = false;
  ngOnInit() {
  }
    addNewProduct(product){
        this.productObj = {
            "name": product.name,
            "color": product.color
        }
        this.http.post("http://localhost:3000/products/", this.productObj).subscribe((res:Response) => {
            console.log(res);
            this.isAdded = true;
        })
    }
}
