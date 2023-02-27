import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TestService {
  url = 'http://localhost:3000/students'
  constructor(private httpclient:HttpClient) { }
  getdata(){
    return this.httpclient.get(this.url);
  }
  // update()
}
