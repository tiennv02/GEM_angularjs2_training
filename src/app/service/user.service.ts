import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map"

@Injectable()
export class UserService {
    private apiUrl = "http://59b0349ce54d3d001198e72b.mockapi.io/api/users/";
    constructor(private http: Http){

    }
    GetList(): Observable <any[]> {
        return this.http.get(this.apiUrl).map((response: Response) => response.json());
    }
    GetSingle(id:number): Observable <any> {
        return this.http.get(this.apiUrl + id).map((response: Response) => response.json());
    }
    Update(id:number, data:any): Observable <any> {
        return this.http.put(this.apiUrl+id,data).map((response: Response) => response.json());
    }
    Add(data:any): Observable <any> {
        return this.http.post(this.apiUrl,data).map((response: Response) => response.json());
    }
    Delete(id:number): Observable <any> {
        return this.http.delete(this.apiUrl + id).map((response: Response) => response.json());
    }



}