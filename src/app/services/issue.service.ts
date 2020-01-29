import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from "rxjs";
import {Repo} from "../models/repos.types";

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  private userUrl = `${environment.apiUrl}/repos`;

  constructor(private http: HttpClient) { }

  getIssues(owner, repo): Observable<Repo[]>{
    return this.http.get<Repo[]>(`${this.userUrl}/${owner}/${repo}/issues`);
  }
}
