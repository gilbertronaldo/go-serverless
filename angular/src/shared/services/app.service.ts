import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private http: HttpClient,
  ) {
  }

  dummyGet(): Observable<any> {
    const requestUrl = this.getApiUrl('');

    return this.http.get<any>(requestUrl, {});
  }

  setApiUrl(url: string, secure: boolean = false) {
    this.setConfig('api.url', this.setUrl(url, secure));
    this.setConfig('api.secure', secure ? 'true' : 'false');
    this.setConfig('api.hostname', url);
  }

  getApiUrl(url: string) {
    return `${this.getConfig('api.url')}/${url}`;
  }

  setUrl(url: string, secure: boolean = false): string {
    const protocol = secure ? 'https://' : 'http://';

    return protocol + url;
  }

  setConfig(key: string, value: string | null) {
    localStorage.setItem(key, value);
  }

  unsetConfig(key: string) {
    localStorage.removeItem(key);
  }

  getConfig(key: string) {
    return localStorage.getItem(key);
  }
}
