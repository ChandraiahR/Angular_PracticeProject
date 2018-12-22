import { Component, OnInit ,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-listcomp',
  templateUrl: './listcomp.component.html',
  styleUrls: ['./listcomp.component.scss']
})
export class ListcompComponent implements OnInit {



  constructor() { }

  ngOnInit() {
  }

  @Input() data: any;
  @Output() buttonClicked = new EventEmitter<{}>();
  @Input() typeOfcard:string;
  @Input() className : string;

  clicked(card){
    this.buttonClicked.emit(card);
  }
  getClass(){
    return "row "+this.className;
  }
}
