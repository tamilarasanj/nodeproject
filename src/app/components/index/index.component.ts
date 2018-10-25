import { Component, OnInit } from '@angular/core';
import { AdUnit } from './AdUnit';
import { AdunitService } from '../../adunit.service';
import { RouterModule, Router, } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  adunits: AdUnit[];

  constructor(private adunitservice: AdunitService, private router: Router) { }

  deleteAdUnit(id) {
    // alert("Are you sure do you want to delete");
    this.adunitservice.deleteAdUnit(id).subscribe(res => {
      this.router.navigate(['/', 'create']);
    });
  }

  ngOnInit() {
    this.adunitservice
      .getAdUnits()
      .subscribe((data: AdUnit[]) => {
      this.adunits = data;
    });
  }
}
