import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { BuyFrom }           from './../model/buy-from';
import {Observable} from 'rxjs/Rx';
import { contentHeaders,domainApi } from '../../../../../enu/headers';


@Injectable()
export class BuyFromService {
    constructor (private http: Http) {
    }
    private UrlApi = domainApi+'/common/homepage/';
    getBuyFrom() : Observable<BuyFrom[]>{
        return this.http.get(this.UrlApi+'brandlist?domain=weshop.com.vn',{ headers: contentHeaders })
            .map((res:Response) => res.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
    public getItemByCategoryId(categoryId,dataCategoryId){
        return dataCategoryId[categoryId];
    }
}
