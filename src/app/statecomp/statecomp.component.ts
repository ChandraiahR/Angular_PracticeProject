import { Component, OnInit ,Input, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-statecomp',
  templateUrl: './statecomp.component.html',
  styleUrls: ['./statecomp.component.scss']
})
export class StatecompComponent implements OnInit {

  @Input("appStates") appStates : any;
 
  constructor() { }

  ngOnInit() {
  }

}
