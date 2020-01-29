import { Component, OnInit } from '@angular/core';
import {IssueService} from '../../services/issue.service';
import {Subject} from "rxjs";
import {debounceTime, distinctUntilChanged} from "rxjs/operators";
import {SearchService} from '../../services/search.service';
import {User} from "../../models/user.types";
import {GithubRepoService} from '../../services/repo.service';
import {Repo} from "../../models/repos.types";

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {
  userName;
  users: User[] = [];
  userNameUpdate = new Subject<string>();
  userRepos: Repo[] = [];
  currentReposPage = 1;

  constructor(
    private issueService: IssueService,
    private searchService: SearchService,
    private githubRepoService: GithubRepoService
  ) {}

  updateUsers(userName) {
    this.searchService.users(userName).subscribe(users => {
      this.users = users['items'];
      console.log(this.users);
    })
  }

  onUserSelect(userName) {
    this.githubRepoService.getUserRepos(userName).subscribe(repos => {
      this.userRepos = repos;
      console.log(repos);
    })
  }

  ngOnInit() {
    this.userNameUpdate.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(value => {
        this.updateUsers(value);
        console.log(value);
      });
  }

  onScroll () {
    this.currentReposPage += 1;
    this.githubRepoService.getPersonalRepos(this.currentReposPage).subscribe(repos => {
      this.userRepos = [...this.userRepos, ...repos];
    })
  }

}
