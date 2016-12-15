import { Injectable }     from '@angular/core';
import { Http,Response}            from '@angular/http';
import { Hotdeal }        from '../model/hotdeal';
import {Observable}       from 'rxjs/Rx';
import { contentHeaders,domainApi } from '../../../../../enu/headers';

@Injectable()
export class HotdealService {
    constructor (private http: Http) {}
    private UrlApi = domainApi+'/common/homepage/';
     getDataHotdeal() : Observable<Hotdeal[]>{
         return this.http.get(this.UrlApi+'hotdeals?domain=weshop.com.vn',{ headers: contentHeaders })
                         .map((res:Response) => res.json())
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
     }
}
