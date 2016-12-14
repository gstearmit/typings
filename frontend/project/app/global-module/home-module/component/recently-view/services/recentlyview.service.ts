/* * * ./app/home/hot-deal/services/recentlyview.service.ts * * */
// Imports
import { Injectable }                               from '@angular/core';
import { Http, Headers, RequestOptions, Response }  from '@angular/http';
import { Recentlyview }                             from '../model/recentlyview';
@Injectable()
export class RecentlyviewService {
    public objRecentlyView=[];
    constructor (private http: Http) {}
    getAll() {
        if(localStorage.getItem('dataRecentlyview')){
            return JSON.parse(localStorage.getItem('dataRecentlyview'));
        }else{
            return [];
        }
    }

    create(Recentlyview) {
        var data_parsed = [];
        if(localStorage.getItem('dataRecentlyview')){
            data_parsed = JSON.parse(localStorage.getItem('dataRecentlyview'));
        }
        data_parsed.push(Recentlyview);
        localStorage.setItem("dataRecentlyview", JSON.stringify(data_parsed));
        return data_parsed;
       // console.log(localStorage.getItem('dataRecentlyview'));
    }

    update(Recentlyview) {
        return this.http.put('/api/users/' + Recentlyview.id, Recentlyview, this.jwt()).map((response: Response) => response.json());
    }

    delete(id) {
        return this.http.delete('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    // private helper methods

    private jwt() {
        // create authorization header with jwt token
        let recentlyviewStorage = JSON.parse(localStorage.getItem('recentlyviewStorage'));
        if (recentlyviewStorage) {
            return recentlyviewStorage;
        }
    }
}
