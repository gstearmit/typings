/* * * ./app/home/hot-deal/services/hotdeal.ts * * */
// Imports
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { AmazonBox }           from '../model/amazon-box';
import {Observable} from 'rxjs/Rx';
import { contentHeaders } from './../../../enu/headers';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AmazonBoxService {
    constructor (private http: Http) {
    }
    private UrlApi = 'http://192.168.11.252:88/block/getblock';
     
     // Fetch all existing comments
     getDataAmazonBox() : Observable<AmazonBox[]>{
         // ...using get request
         return this.http.get(this.UrlApi+'?pageName=mobile-home-page-vn&blockName=buy-from-amazon-mobile',{headers:contentHeaders})
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        
     }
}
