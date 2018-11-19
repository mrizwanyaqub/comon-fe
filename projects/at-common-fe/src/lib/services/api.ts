import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QueryString } from '../helpers';
import { AtConfigs } from './configs';

@Injectable()
export class Api {
  constructor(@Inject(AtConfigs) private configs, private http: HttpClient) {
  }

  public get = this.callHttpWithQueryString('get');

  private callHttpWithQueryString(method: string) {
    return (url, params = {}): Promise<any> => {
      if(params) {
        const qs = new QueryString();
        if(url.includes('='))
          url += '&' + qs.toQueryParams(params, true);
        else
          url += qs.toQueryString(params, true);
      }

      url = this.configs.api.url + url;
      return new Promise((res, rej) => {
        this.http[method](url).subscribe(
          data => {
            res({ data });
          },
          err => {
            res({ err });
          });
      });
    }
  }
}
