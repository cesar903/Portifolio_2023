import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  ngOnInit() {}

  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'pt']);
    
    const browserLang = translate.getBrowserLang();
    console.log(browserLang)

    if(browserLang == 'pt'){
      translate.use('pt')
    }else if(browserLang == 'en'){
      translate.use('en')
    }else{
      translate.setDefaultLang('en');
    }
    
  }

}
