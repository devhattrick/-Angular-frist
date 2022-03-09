import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  value=0;
  title = 'my-test';
  myName ="Peerapol";
  peerapolConsole(){
    console.log('Hello Hattrick')
  }
  changeName(name:string){
    this.myName=name
  }
  calSum(value:string){
    if(isNaN(this.value=(parseInt(value) *3)/4)){
      alert('Invalid')
    }else{ this.value=(parseInt(value) *3)/4}
   
  }
}
