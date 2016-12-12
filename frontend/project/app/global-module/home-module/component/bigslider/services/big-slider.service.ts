/* * * ./app/comments/services/comment.service.ts * * */
// Imports
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { BigSlider }           from './../model/big-slider';
import {Observable} from 'rxjs/Rx';
import { contentHeaders } from '../../../../../enu/headers';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BigSliderService {
    constructor (private http: Http) {
    }
    private sliderUrl = 'http://192.168.11.252:88/homepage/';
     getSliders() : Observable<BigSlider[]>{
         return this.http.get(this.sliderUrl+'slider?domain=weshop.com.vn',{ headers: contentHeaders })
                         .map((res:Response) => res.json())
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
     }

     // Add a new comment
    addSlider (body: Object): Observable<BigSlider[]> {
        let bodyString = JSON.stringify(body); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.post(this.sliderUrl+'addcomment', body, options) // ...using post request
                         .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }   

    // Update a comment
    updateSlider (body: Object): Observable<BigSlider[]> {
        let bodyString = JSON.stringify(body); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.put(`${this.sliderUrl}editcomment`, body, options) // ...using put request
                         .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    } 
    // Delete a comment
    removeSlider (id:string): Observable<BigSlider[]> {
        return this.http.get(`${this.sliderUrl}removecomment?id=${id}`) // ...using put request
                         .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }   
}
