import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {environment} from '../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*'
  })
};

const imgUrls = [
  'assets/img/1.jpg',
  'assets/img/2.jpg',
  'assets/img/3.jpg',
  'assets/img/4.jpg'
];

@Injectable({
  providedIn: 'root'
})
export class OfferingsService {

  constructor(
    private http: HttpClient
  ) { }

  getOfferings() {
    return this.http.get(`${environment.apiPath}/offerings`, httpOptions)
      .pipe(
        map(res => this.replaceImgUrls(res))
      );
  }

  private replaceImgUrls(dataset) {
    return dataset.map((item, i) => {
      return {
        ...item,
        imgUrl: imgUrls[i]
      };
    });
  }
}
