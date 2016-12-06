/* * * ./app/home/hot-deal/services/recentlyview.service.ts * * */
// Imports
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Recentlyview }           from '../model/recentlyview';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RecentlyviewService {
    // Resolve HTTP using the constructor
    constructor (private http: Http) {}
    // private instance variable to hold base url
    private UrlApi = 'http://192.168.11.252:88/';

    // Fetch all existing comments
    getDataRecentlyView() : Observable<Recentlyview[]>{
        // ...using get request
        return this.http.get(this.UrlApi+'getdatarecentlyview')
        // ...and calling .json() on the response to return data
            .map((res:Response) => res.json())
            //...errors if any
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

    }
}
