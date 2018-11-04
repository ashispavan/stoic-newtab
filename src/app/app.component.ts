import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import uniqueRandomArray from 'unique-random-array';

const URL = 'https://randomstoicquotesapi.herokuapp.com/api/v1/quotes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  public quote : any;

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.getRandomQuote().subscribe((data) => {
       let quoteItem = uniqueRandomArray(data.data);
       this.quote = quoteItem().attributes.text;
    })
  }

  getRandomQuote() : any {
    return this.http.get(URL);
  }

}
