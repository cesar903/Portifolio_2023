import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
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
