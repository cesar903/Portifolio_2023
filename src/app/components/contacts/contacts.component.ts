import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  msg: boolean = false;
  showButton = false;

  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'pt']);

    const browserLang = translate.getBrowserLang();
    console.log(browserLang)

    if (browserLang == 'pt') {
      translate.use('pt')
    } else if (browserLang == 'en') {
      translate.use('en')
    } else {
      translate.setDefaultLang('en');
    }

  }

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
