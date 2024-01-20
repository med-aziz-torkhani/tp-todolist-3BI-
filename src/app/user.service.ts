import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { pipe } from 'rxjs';
import { map , filter} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient : HttpClient ) {}

  //le bouton qui recoit sign in ou sign out
  btnSignValue: string='';


  getUser(login:string,password:string): Observable<User[]>{

      // return this.httpClient.get<User[]>(`http://localhost:3000/users`).pipe(
      //   //fct map on donne un tableau (liste des utilisayyeurr) elle va filter la lister 
      //   //pour chaque ut elle va verifier si le login et password exactes
      //   map(users=>users.filter(user=>user.login===login && user.password===password))
      // )

      //pour creer des parametres par le httpparams
      let params=new HttpParams()
      .set("login" , login)
      .set("password" , password)

      return this.httpClient.get<User[]>(`http://localhost:3000/users`,{params})

  }
}
