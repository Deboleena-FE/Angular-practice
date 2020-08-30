import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_KEY = 'fa3b9897b7ca45dda948737289c6fb13'; // got this API_Key after login in nwes site to access the data
  constructor(private httpClient: HttpClient) {
    
  }

  public getNews(){
    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`);
  }
}
