
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { AmazonBox }           from '../model/amazon-box';
import {Observable} from 'rxjs/Rx';
import { domainApi,contentHeaders } from '../../../../../enu/headers';

@Injectable()
export class AmazonBoxService {
    constructor (private http: Http) {
    }
    private UrlApi = domainApi+'/common/homepage/';
     getDataAmazonBox() : Observable<AmazonBox[]>{
         return this.http.get(this.UrlApi+'amazon?domain=weshop.com.vn',{headers:contentHeaders})
                         .map((res:Response) => res.json())
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        
     }
}
