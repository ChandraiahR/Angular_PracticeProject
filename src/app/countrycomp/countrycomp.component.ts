import { Component, OnInit, Input,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-countrycomp',
  templateUrl: './countrycomp.component.html',
  styleUrls: ['./countrycomp.component.scss']
})
export class CountrycompComponent implements OnInit {

  @Input("countryData") countryData : any;
  @Output() onCountrychange = new EventEmitter<{}>();
  constructor() { }

  ngOnInit() {
  }


  states=[];
  state:{}[] =[ {
    "countryName" : "INDIA",
    "states" :["ANDHRA PRADESH","TELANGANA","NEW DELHI"]
   
 },{
   "countryName" : "SRILANKA",
   "states" :["SRILANKA 1","SRILANKA 2","SRILANKA 3"]
  
}];

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
       this.onCountrychange.emit(this.states);
   });
 }

}
