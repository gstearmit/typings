/* * * ./app/home/hot-deal/services/recentlyview.service.ts * * */
// Imports
import { Injectable }             from '@angular/core';
import { Http, Headers, RequestOptions, Response }  from '@angular/http';
import { Recentlyview }                             from '../model/recentlyview';
@Injectable()
export class RecentlyviewService {
    public objRecentlyView=[];
    constructor (private http: Http) {}
    getAll() {
        return this.http.get('/api/users', this.jwt()).map((response: Response) => response.json());
    }

    getById(id) {
        return this.http.get('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    create(Recentlyview) {
    //     var data_parsed = JSON.parse(Recentlyview);
    //     this.objRecentlyView.push(data_parsed);
    //     if(localStorage.getItem('recentlyviewStorage')){

    //     }
    //     let recentlyviewStorage = this.objRecentlyView.join();
    //     if(localStorage.getItem('recentlyviewStorage'))
    //    // let recentlyviewStorage = JSON.parse(localStorage.getItem('recentlyviewStorage'));
    //     if (recentlyviewStorage) {
    //     localStorage.setItem('key', recentlyviewStorage);
    //     console.log(this.objRecentlyView);
    //     }
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
