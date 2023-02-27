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
  select:string=''
ngOnInit(){
  this.testservice.getdata().subscribe(
    (data)=>{
      this.test_arr=data;
    }
  )
}
update(id:any,val:any){
 let  projectdata:any;
  let a:string='';
  for(let i of this.test_arr){
    if(i.id==id){
       a =i.subject
     i.subject= a.concat(" ",val.value)
      projectdata = { ...i };

      break;
    }
  }

  this.testservice.update(id,projectdata).subscribe(
    (data)=>{
      this.testservice.getdata().subscribe(
        (data)=>{
          this.test_arr=data;
          
        }
      )
    }
  )
}
}
