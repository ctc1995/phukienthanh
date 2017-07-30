import { Injectable }  from '@angular/core'
import { Http, Headers } from '@angular/http'
import { Observable } from 'rxjs/observable';
import { SharpService } from './sharp.serivce'

@Injectable()

export class GetHttp{
    constructor(
        private sharpService: SharpService,
        private http: Http
    ){}
    public getProd(query){
        let api = this.sharpService.API.getProd 
        if(query){
            api += "?name=" + query
        }
        return this.http.get(api).map(
            res=>{
                return res.json()||{}
            }
        )
    }
    public getData(query, api){
        if(query){
            api += "?name=" + query
        }
        return this.http.get(api).map(
            res=>{
                return res.json()||{}
            }
        )
    }
}