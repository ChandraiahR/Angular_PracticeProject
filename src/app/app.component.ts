import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { CaluclateServiceService } from './caluclate-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private calService : CaluclateServiceService){

  }

  listUsers:any;
  getAllUsers(){
     this.calService.getUsers().subscribe(
      (data : any )=> {
        console.log("Success response : "+JSON.stringify(data));
        this.listUsers = JSON.stringify(data);
      },
      (error : any )=> {
       console.log("Error response : "+error);
             },
      ( )=> {
        console.log("Calling Get users is completed.");
      }
    );
  }
  title = 'First App';
   sample = "Chandu It's working";
   myName = "";
   userName = 'admin';
   addToCards:any = [];
   addedCard = 0;

   isValidUser(){
      return this.userName ===  this.myName ? true : false;
   }

     handleObj(val){
     alert(val);
   }

   appcuntry=["INDIA","SRILANKA","BANGLADESH"];

   appStates = [];
   onCountryChange(appStates){
     console.log(appStates);
     this.appStates = appStates;
   }

   //creating Object
   customerInfo:{} = {
     title : "JOcata",
     desc : "Banjara Hills",
     info : "500018"
   }
   cards:{} [] =[ {
              title : "JOcata",
              desc : "Banjara Hills",
              info : "Add-to-Card"
            },{
              title : "JOcata1",
              desc : "Banjara Hills1",
              info : "Add-to-Card"
            },{
              title : "JOcata2",
              desc : "Banjara Hills 2",
              info : "Add-to-Card"
            }
           ]

           addToCard(card){
           //  alert(card);
            //  let c = this.cards.find(function(val){
            //   // console.log(val);
            //     return val.title = card.title;
            //  });
            //console.log('let c : '+c);
            //card.info = 'Remove-From-Cart'
            this.addToCards.push(card);

            this.addedCard = this.addToCards.length;
           }

           removeCart(card){
               this.addToCards.pop(card);
               this.addedCard = this.addToCards.length;
           }
           createObservales();
  
           createObservales(){
             const myObserver = Observable.create((observer : Observer<Number>) => {
              observer.next(2);
             });
             myObserver.subscribe(
               (data) => console.log(data),
               (error) => console.log(error),
               (complete) => console.log(complete)
            );
           }
}
