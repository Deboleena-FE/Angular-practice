import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  fullname = '';
  articles = [];
  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.fullname = params['name'];
      });

      this.apiService.getNews().subscribe((data)=>{
        console.log(data);
        this.articles = data['articles'];
        console.log('articles', this.articles);
      });
  }
}
