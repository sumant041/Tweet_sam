import { Component } from '@angular/core';
import { Http, Headers} from '@angular/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private http: Http) {}
  makecall() {
    let headers = new Headers();
    headers.append('Content-type', 'application/X-www-form-urlencoded');
    this.http.post('http://localhost:3000/authorize',{headers:headers}).subscribe((res)=>{
    console.log(res);
    })
  }
}
