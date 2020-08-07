import {Component, OnInit} from '@angular/core';
import {environment} from '../environments/environment';
import {AppService} from '../shared/services/app.service';
import {faSpinner} from '@fortawesome/free-solid-svg-icons/faSpinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  config;
  loading = false;
  faSpinner = faSpinner;
  data = null;

  constructor(
    private appService: AppService
  ) {
  }

  ngOnInit() {
    this.initConfig();
  }

  initConfig() {
    this.config = environment;

    this.appService.setApiUrl(this.config.api.url, this.config.api.secure);
  }

  getData() {
    this.data = null;
    this.loading = true;
    this.appService.dummyGet()
      .subscribe(value => {
        this.data = value;
        this.loading = false;
      }, error => {
        console.log(error);
        this.data = 'error';
        this.loading = false;
      });
  }
}
