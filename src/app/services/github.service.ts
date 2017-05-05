import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username:string;
  private client_id = 'da305229c6117f9f40c5';
  private client_secret = '24f79089612f93906e55e215b44a45da5258009d';

  constructor(private _http: Http) {
    console.log('Github service ready')
    this.username = 'moussaDoumbia9219'
   }

   getUser(){
      return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
        .map(res => res.json())
   }

   getRepos(){
      return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
        .map(res => res.json())
   }

   updateUser(username: string){
     this.username = username;

   }

}
