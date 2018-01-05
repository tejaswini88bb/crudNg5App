import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private user:UserService, private http:Http) { }
    id:number;
    private headers = new Headers({'Content-Type': 'application/json'});
  ngOnInit() {
      this.loadData();
  }
  products = [];
  loadData() {
     this.user.fetchData().subscribe(
        data => {
            this.products = data;
        }
    );
  }
    deleteProduct(id){
        if(confirm("Are you Sure???")){
            const url = `${"http://localhost:3000/products"}/${id}`;
            return this.http.delete(url, {headers: this.headers}).toPromise().then(() => {
                this.loadData();
            });
        }
    }
}
