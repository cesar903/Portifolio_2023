import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'
import { HostListener } from '@angular/core';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  msg: boolean = false;
  showButton = false;

  constructor() { }

  ngOnInit(): void { }

  enviar() {
    this.msg = true
    alert("SUCCESSFULLY SENT")
    return true
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const verticalOffset = window.pageYOffset
      || document.documentElement.scrollTop
      || document.body.scrollTop || 0;

    if (verticalOffset > 400) {
      this.showButton = true;
    } else {
      this.showButton = false;
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
