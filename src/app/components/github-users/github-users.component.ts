import { Component, OnInit } from '@angular/core';
import {GithubUserService} from '../../services/github-user.service';
import {GithubRepoService} from "../../services/repo.service";
import {Repo} from '../../models/repos.types';

@Component({
  selector: 'app-github-users',
  templateUrl: './github-users.component.html',
  styleUrls: ['./github-users.component.css']
})
export class GithubUsersComponent implements OnInit {
  repos: Repo[] = [];
  currentPage = 1;

  constructor(
    private githubUserService: GithubUserService,
    private githubRepoService: GithubRepoService
  ) { }

  ngOnInit() {
    this.githubUserService.getUser('andriyor').subscribe(userData => {
      console.log(userData);
    });
    this.githubRepoService.getPersonalRepos(this.currentPage).subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    })
  }

  onScroll () {
    console.log('scrolled down!!');
    this.currentPage += 1;
    this.githubRepoService.getPersonalRepos(this.currentPage).subscribe(repos => {
      console.log(repos);
      this.repos = [...this.repos, ...repos];
    })
  }

}
