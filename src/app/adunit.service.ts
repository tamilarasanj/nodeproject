import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdUnit } from './components/index/AdUnit';
import { RouterModule, Router, } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdunitService {

  uri = 'http://localhost:4000/adunits';

  constructor(private http: HttpClient, private router: Router) { }

  addAdUnit(unit_name, unit_price, adate, comments) {
    const obj = {
      unit_name: unit_name,
      unit_price: unit_price,
      adate : adate,
      comments: comments,
    };
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => this.router.navigate(['/', 'index']));
  }

  getAdUnits() {
    return this
           .http
           .get(`${this.uri}`);
}

editAdUnit(id) {
  return this
            .http
            .get(`${this.uri}/edit/${id}`);
}

updateAdUnit(unit_name, unit_price, comments, id) {
  const obj = {
    unit_name: unit_name,
    unit_price: unit_price,
    comments: comments
  };
  this
    .http
    .post(`${this.uri}/update/${id}`, obj)
    .subscribe(res => this.router.navigate(['/', 'index']));
}

  deleteAdUnit(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
}
