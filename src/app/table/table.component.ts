import { Component,OnInit } from '@angular/core';
import { TestService } from '../test.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  constructor(private testservice:TestService){}
  test_arr:any=[];
ngOnInit(){
  this.testservice.getdata().subscribe(
    (data)=>{
      this.test_arr=data;
    }
  )
}
update(val:any){
  this.testservice
}
}
