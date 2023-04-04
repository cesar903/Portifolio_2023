import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient} from '@angular/common/http'


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  msg: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  enviar() {
    this.msg = true
    alert("SUCCESSFULLY SENT")
    return true
  }

}
