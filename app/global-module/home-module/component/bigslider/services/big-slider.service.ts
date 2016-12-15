/* * * ./app/comments/services/comment.service.ts * * */
// Imports
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { BigSlider }           from './../model/big-slider';
import { Observable } from 'rxjs/Rx';
import { contentHeaders,domainApi } from '../../../../../enu/headers';
@Injectable()
export class BigSliderService {
    constructor (private http: Http) {
    }
    private UrlApi = domainApi+'/common/homepage/';
    getSliders() : Observable<BigSlider[]>{
         return this.http.get(this.UrlApi+'slider?domain=weshop.com.vn',{ headers: contentHeaders })
                         .map((res:Response) => res.json())
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
}
