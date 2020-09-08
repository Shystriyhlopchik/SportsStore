import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route
} from '@angular/router';
import {StoreComponent} from './store/store.component';

@Injectable() // класс используется как сервис
export class StoreFirstGuard {
  private firstNavigation = true;
  constructor(private router: Router) { }
  // защита маршрутов
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {
    if (this.firstNavigation) {
      this.firstNavigation = false;
      if (route.component != StoreComponent) {
        this.router.navigateByUrl('/');
        return false;
      }
    }
    return true;
  }
}
