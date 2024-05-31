import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private username = new BehaviorSubject<string>('');

  setUsername(name: string) {
    this.username.next(name);
  }

  getUsername() {
    return this.username.asObservable();
  }
}
