import { Component, OnInit } from '@angular/core';
import {GithubUserService} from '../../services/github-user.service';
import {GithubRepoService} from "../../services/repo.service";

@Component({
  selector: 'app-github-users',
  templateUrl: './github-users.component.html',
  styleUrls: ['./github-users.component.css']
})
export class GithubUsersComponent implements OnInit {

  constructor(
    private githubUserService: GithubUserService,
    private githubRepoService: GithubRepoService
  ) { }

  ngOnInit() {
    this.githubUserService.getUser('andriyor').subscribe(userData => {
      console.log(userData);
    });
    this.githubRepoService.getPersonalRepos().subscribe(repos => {
      console.log(repos);
    })
  }

}
