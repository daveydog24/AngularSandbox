import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    toggleOn: boolean = false;
    counter = 0;
    clicks = [];

    constructor() { }

    ngOnInit() {
    }

    findColor(num){
        if (num >= 5){
            return 'blue';
        } else{
            console.log(num)
        }
    }

    onClick(){
        this.counter += 1;
        this.clicks.push(this.counter)
        this.toggleOn = !(this.toggleOn)
    }

}
