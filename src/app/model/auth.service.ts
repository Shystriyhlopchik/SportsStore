import {Injectable} from '@angular/core';
import {RestDataSource} from './rest.datasource';
import {Observable} from 'rxjs';

@Injectable()
export class AuthService {
  constructor(private datasource: RestDataSource) {}
  // проверка данных для аунтефикации
  authenticate(username: string, password: string): Observable<boolean> {
    return this.datasource.authenticate(username, password);
  }
  // возвращает true если источник данных получил маркер аунтификации
  get authenticated(): boolean {
    return this.datasource.auth_token != null;
  }
  // удаляет маркер из источника данных
  clear() {
    this.datasource.auth_token = null;
  }
}
