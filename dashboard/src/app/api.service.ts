import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000';
  private announcementUpdate = new Subject<void>();

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/data`);
  }

  sendData(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/data`, data).pipe(
      tap(() => {
        this.triggerAnnouncementUpdate(); // Обновляем объявления после отправки данных
      })
    );
  }

  triggerAnnouncementUpdate() {
    this.announcementUpdate.next();
  }

  getAnnouncementUpdateListener(): Observable<void> {
    return this.announcementUpdate.asObservable();
  }
}
