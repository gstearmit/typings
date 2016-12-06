/* * * ./app/comments/services/comment.service.ts * * */
// Imports
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Slider }           from '../model/slider';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SliderService {
    private headers;
    constructor (private http: Http) {
        this.headers = new Headers({ 'Accept': 'application/json' });
    }
    private sliderUrl = 'http://192.168.11.252:88/block/getblock';
     getSliders() : Observable<Slider[]>{
         return this.http.get(this.sliderUrl+'?pageId=53&blockName=header-alias-topstore1',{headers:this.headers})
                         .map((res:Response) => res.json())
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
     }

     // Add a new comment
    addSlider (body: Object): Observable<Slider[]> {
        let bodyString = JSON.stringify(body); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.post(this.sliderUrl+'addcomment', body, options) // ...using post request
                         .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }   

    // Update a comment
    updateSlider (body: Object): Observable<Slider[]> {
        let bodyString = JSON.stringify(body); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.put(`${this.sliderUrl}editcomment`, body, options) // ...using put request
                         .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    } 
    // Delete a comment
    removeSlider (id:string): Observable<Slider[]> {
        return this.http.get(`${this.sliderUrl}removecomment?id=${id}`) // ...using put request
                         .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }   
}
