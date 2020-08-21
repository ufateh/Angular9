import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Signatory } from '../models';

@Component({
  selector: 'app-signatory',
  templateUrl: './signatory.component.html',
  styleUrls: ['./signatory.component.sass']
})
export class SignatoryComponent implements OnInit {

  @Output() onAccept: EventEmitter<Signatory>;
  @Output() onReject: EventEmitter<Signatory>;
  @Output() resendEmail: EventEmitter<Signatory>;

  @Input() signatory: Signatory;
  @Input() loggedInUserId: string;
  @Input() isWorkflowOwnerLoggedIn: boolean;
  @Input() isApprovalInitiatorLoggedIn: boolean;


  constructor() { }

  ngOnInit() {
    this.onAccept = new EventEmitter();
    this.onReject = new EventEmitter();
    this.resendEmail = new EventEmitter();
  }

}
