
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { EbayBox }           from '../model/ebay-box';
import {Observable} from 'rxjs/Rx';
import { contentHeaders,domainApi } from '../../../../../enu/headers';

@Injectable()
export class EbayBoxService {
    constructor (private http: Http) {}
    private UrlApi = domainApi+'/common/homepage/';
     getDataEbayBox() : Observable<EbayBox[]>{
         return this.http.get(this.UrlApi+'ebay?domain=weshop.com.vn',{ headers: contentHeaders })
                         .map((res:Response) => res.json())
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        
     }
}
