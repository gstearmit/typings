/* * * ./app/home/hot-deal/services/hotdeal.ts * * */
// Imports
import { Injectable }     from '@angular/core';
import { Http,Response}            from '@angular/http';
import { Hotdeal }        from '../model/hotdeal';
import {Observable}       from 'rxjs/Rx';
import { contentHeaders } from './../../../enu/headers';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HotdealService {
     // Resolve HTTP using the constructor
     constructor (private http: Http) {}
     // private instance variable to hold base url
    private UrlApi = 'http://192.168.11.252:88/block/getblock';
     // Fetch all existing comments
     getDataHotdeal() : Observable<Hotdeal[]>{
         return this.http.get(this.UrlApi+'?pageId=34&blockName=category-product',{ headers: contentHeaders })
                         .map((res:Response) => res.json())
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
     }
}
