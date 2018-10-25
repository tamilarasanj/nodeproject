import { Component, OnInit, Input } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { AdunitService } from '../../adunit.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
 
  levels: Array<Object> = [
    {num: 0, name: 'Open'},
    {num: 1, name: 'In progress'},
    {num: 2, name: 'Completed'},
];
  selectedLevel = this.levels[0];

  angForm: FormGroup;
   constructor(private adunitservice: AdunitService, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      unit_name: ['', Validators.required ],
      unit_price: ['', Validators.required ],
      adate: ['', Validators.required ],
      comments: ['', Validators.required],
   });
  }

  addAdUnit(unit_name, unit_price, adate, comments) {
    this.adunitservice.addAdUnit(unit_name, unit_price, adate, comments);
}
  ngOnInit() {
  }

}
