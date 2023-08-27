import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  constructor(private private_http: HttpClient) {}

  sendMessage(body) {
    debugger
    let headers = {
      headers : new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      responseType: 'text' as const
    }
    return this.private_http.post('http://15.206.7.12:3000/sendmail', body, headers);
  }
}
