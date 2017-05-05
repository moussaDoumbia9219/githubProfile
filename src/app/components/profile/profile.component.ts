import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any[];
  repos: any[];
  username:string;

  constructor( private _githubservie: GithubService) { 
    this._githubservie.getUser().subscribe(user => {
      console.log(user);
      this.user = user;
    });

    this._githubservie.getRepos().subscribe(repos => {
      // console.log(user);
      this.repos = repos;
    });

  }
  

  ngOnInit() {
    
  }

  searchUser(){
    this._githubservie.updateUser(this.username);

    this._githubservie.getUser().subscribe(user => {
      // console.log(user);
      this.user = user;
    });

    this._githubservie.getRepos().subscribe(repos => {
      // console.log(user);
      this.repos = repos;
    });
  }

}
