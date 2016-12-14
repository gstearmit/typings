/* * * ./app/home/hot-deal/services/hotdeal.ts * * */
// Imports
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { EbayBox }           from '../model/ebay-box';
import {Observable} from 'rxjs/Rx';
import { contentHeaders } from '../../../../../enu/headers';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class EbayBoxService {
     // Resolve HTTP using the constructor
     constructor (private http: Http) {}
     // private instance variable to hold base url
    private UrlApi = 'http://192.168.11.252:88/common/homepage/';
     
     // Fetch all existing comments
     getDataEbayBox() : Observable<EbayBox[]>{
         // ...using get request
         return this.http.get(this.UrlApi+'ebay?domain=weshop.com.vn',{ headers: contentHeaders })
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        
     }
}
