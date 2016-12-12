/* * * ./app/comments/services/comment.service.ts * * */
// Imports
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { BuyFrom }           from './../model/buy-from';
import {Observable} from 'rxjs/Rx';
import { contentHeaders } from '../../../../../enu/headers';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BuyFromService {
    constructor (private http: Http) {
    }
    private sliderUrl = 'http://192.168.11.252:88/block/getblock';
    getBuyFrom() : Observable<BuyFrom[]>{
        return this.http.get(this.sliderUrl+'?pageName=mobile-home-page-vn&blockName=brand-category-mobile',{ headers: contentHeaders })
            .map((res:Response) => res.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
}
