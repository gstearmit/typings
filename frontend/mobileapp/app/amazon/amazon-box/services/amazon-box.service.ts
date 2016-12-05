/* * * ./app/home/hot-deal/services/hotdeal.ts * * */
// Imports
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { AmazonBox }           from '../model/amazon-box';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AmazonBoxService {
     // Resolve HTTP using the constructor
     constructor (private http: Http) {}
     // private instance variable to hold base url
    private UrlApi = 'http://localhost:5000/api/';
     
     // Fetch all existing comments
     getDataAmazonBox() : Observable<AmazonBox[]>{
         // ...using get request
         return this.http.get(this.UrlApi+'getdataamazonbox')
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        
     }
}
