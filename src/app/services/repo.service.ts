import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubRepoService {
  private userUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) { }

  getPersonalRepos() {
    return this.http.get(`${this.userUrl}/user/repos`);
  }
}
