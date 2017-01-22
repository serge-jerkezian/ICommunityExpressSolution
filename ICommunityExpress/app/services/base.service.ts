import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { HttpModule, URLSearchParams, RequestOptions } from '@angular/http';


export class BaseService
{
    private http : Http;

    constructor(http : Http)
    {
        this.http = http;
    }

    protected get(url:string, params? : any) : Observable<any>
    {
        let options = new RequestOptions();

        if(params)
        {
            let paramString  : string = this.jsonToQueryString(params) ;

            options = new RequestOptions({
                search: new URLSearchParams(paramString) 
            });
        }

        return this.http.get(url,options)
                    .map(this.extractData)
                    .catch(this.handleError);
    }

    private extractData(res: Response) 
    {
      let body = res.json();
      return body || { };
    }

    private handleError (error: Response | any) 
    {
        let errMsg: string;
        if (error instanceof Response) 
        {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } 
        else 
        {
            errMsg = error.message ? error.message : error.toString();
        }
        //console.warn(errMsg);
        console.warn(JSON.stringify(error));
        return Observable.throw(errMsg);        
    }

    private jsonToQueryString(json) {
        //return '?' + 
        return Object.keys(json).map(function(key) {
            return encodeURIComponent(key) + '=' +
                encodeURIComponent(json[key]);
        }).join('&');
    }


}