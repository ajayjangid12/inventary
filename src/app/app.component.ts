import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Template';
 details:object 
  total:number;
  
savedetails(i:any)
{
   
  this.details=i;
  this.total=i.total;
  
}



}
