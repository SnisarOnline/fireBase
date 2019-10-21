import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {environment} from '../../environments/environment';


const httpHeaders = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
const userToken = localStorage.getItem(environment.authTokenKey);

const API_USERS_URL = 'users';
const API_USER_URL = `${environment.api_url}/user`;

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient
  ) {}

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error('Full description of the BUG: ', error);

      this.log(`${operation}() ERROR : ${error.message}`);

      return of(result as T);
    };
  }

  private log(message: string) {
    console.info(`AuthService: ${message}`);
  }



  public login(email: string, password: string): Observable<{ user: any, token: string }> {
    return this.http.post<{ user: any, token: string }>(`${environment.api_url}/login`, {email, password}, httpHeaders);
  }

  public register(user: any): Observable<any> {
    return this.http.post<any>('users', user, httpHeaders)
      .pipe(
        map((res: any) => res),
        catchError(this.handleError('register', []))
      );
  }


  public getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>('users', httpHeaders);
  }

  public deleteUsers(userId: number) {
    const url = 'users' + userId;
    return this.http.delete(url, httpHeaders);
  }

  public getUserById(userId: number): Observable<any> {
    return this.http.get<any>(`${environment.api_url}/user` + userId, httpHeaders);
  }

  public updateUser(user: any): Observable<any> {
    return this.http.patch(`${environment.api_url}/user/${user.id}`, user, httpHeaders);
  }

}
