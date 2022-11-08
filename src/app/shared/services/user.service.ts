import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {User} from "../interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  // fetchUsers(): Observable<User[]> {
  //   return this.http.get("https://randomuser.me/api/?results=100").pipe(
  //     map((res: { results: any[]; info: any }) => {
  //       const users = res.results.map(user => ({
  //         gender: user.gender,
  //         cell: user.cell,
  //         email: user.email,
  //         nat: user.nat,
  //         phone: user.phone
  //       }));
  //       return users;
  //     })
  //   );
  // }
}
