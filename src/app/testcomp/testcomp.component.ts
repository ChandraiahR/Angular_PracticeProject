import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { CaluclateServiceService } from '../caluclate-service.service';

@Component({
  selector: 'app-testcomp',
  templateUrl: './testcomp.component.html',
  styleUrls: ['./testcomp.component.scss']
})
export class TestcompComponent implements OnInit {

  @ViewChild("empName") name ;
  constructor(private serv: CaluclateServiceService) { 
    
  }

  ngOnInit() {
    console.log("ngOnInit() CaluclateServiceService : add 1+2 : "+this.serv.add(1,2));
  }

  hadleValue(){
    console.log(this.name.nativeElement.value);
    alert(this.name.nativeElement.value);
  }

  hadleValueRef(empName){
    console.log(empName.value);
    alert(empName.value);
  }

  cuntry=["INDIA","SRILANKA","BANGLADESH"];
  state:{}[] =[ {
     "countryName" : "INDIA",
     "states" :["ANDHRA PRADESH","TELANGANA","NEW DELHI"]
    
  },{
    "countryName" : "SRILANKA",
    "states" :["SRILANKA 1","SRILANKA 2","SRILANKA 3"]
   
 }];

 states=[];

 findStates(cunt){
  console.log(cunt.target.value);
  // var Obj = this.state.filter(function(_val){
  //   return _val.countryName === cunt;
  // });

  Object.keys(this.state).forEach(key => {
    if (this.state[key].countryName === cunt.target.value) {
        console.log("Found.");
        this.states=this.state[key].states;
        console.log(this.states);
    }
});
 }

}
