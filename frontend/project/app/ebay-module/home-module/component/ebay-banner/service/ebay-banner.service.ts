/**
 * Created by idea on 14/12/2016.
 */
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { EbayBanner } from '../model/ebay-banner';

import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class EbayBannerService{
    constructor(private http:Http){}
    getBannerEbayHome() : Observable<EbayBanner[]>{
        let headers = new Headers({ 'Accept': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.get('http://api.weshop.com/ebay/ebayhome/banner?domain=weshop.com.vn',options)
            // ...and calling .json() on the response to return data
            .map((res:Response) => res.json())
            //...errors if any
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
}
