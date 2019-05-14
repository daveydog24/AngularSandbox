import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Sandbox';
    ParentCount = 0;
    ChildCount = 0;
    OutputCount;

    addOneToParent(){
        this.ParentCount += 1;
    }
    
    addOneToBoth(){
        this.ParentCount += 1;
        this.ChildCount += 1;

    }
    childEvent(event){
        this.ParentCount = event;
    }

    // service function


    // fake api function


    // promise/observable

    // rxjs??
}
