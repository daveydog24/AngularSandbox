import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
    runningTotal;
    currentNumber = undefined;
    displayTotal;
    firstEquation;
    secondEquation;
    action;

    constructor() { }

    ngOnInit() {
    }

    tally(str){
        if (str === "clr"){
            this.clear();
        }
        else if (str === "+"){
            this.firstEquation = this.currentNumber;
            this.currentNumber = undefined;
            this.action = "+";
        }
        else if (str === "-"){
            this.firstEquation = this.currentNumber;
            this.currentNumber = undefined;
            this.action = "-";
        }
        else if (str === "*"){
            this.firstEquation = this.currentNumber;
            this.currentNumber = undefined;
            this.action = "*";
        }
        else if (str === "/"){
            this.firstEquation = this.currentNumber;
            this.currentNumber = undefined;
            this.action = "/";
        }
        else if (str === "="){
            if (this.action === "+") {
                this.runningTotal = parseInt(this.firstEquation) + parseInt(this.currentNumber);
                this.total();
            }
            else if (this.action === "-") {
                this.runningTotal = parseInt(this.firstEquation) - parseInt(this.currentNumber);
                this.total();
            }
            else if (this.action === "*") {
                this.runningTotal = parseInt(this.firstEquation) * parseInt(this.currentNumber);
                this.total();
            }
            else {
                this.runningTotal = (parseInt(this.firstEquation) / parseInt(this.currentNumber));
                this.total();
            }
        }
        else if (str === "1"){
            if (this.currentNumber === undefined) {
                this.currentNumber = "1"
            }
            else {
                this.currentNumber += "1"
            }
        }
        else if (str === "2"){
            if (this.currentNumber === undefined) {
                this.currentNumber = "2"
            }
            else {
                this.currentNumber += "2"
            }
        }
        else if (str === "3"){
            if (this.currentNumber === undefined) {
                this.currentNumber = "3"
            }
            else {
                this.currentNumber += "3"
            }
        }
        else if (str === "4"){
            if (this.currentNumber === undefined) {
                this.currentNumber = "4"
            }
            else {
                this.currentNumber += "4"
            }
        }
        else if (str === "5"){
            if (this.currentNumber === undefined) {
                this.currentNumber = "5"
            }
            else {
                this.currentNumber += "5"
            }
        }
        else if (str === "6"){
            if (this.currentNumber === undefined) {
                this.currentNumber = "6"
            }
            else {
                this.currentNumber += "6"
            }
        }
        else if (str === "7"){
            if (this.currentNumber === undefined) {
                this.currentNumber = "7"
            }
            else {
                this.currentNumber += "7"
            }
        }
        else if (str === "8"){
            if (this.currentNumber === undefined) {
                this.currentNumber = "8"
            }
            else {
                this.currentNumber += "8"
            }
        }
        else if (str === "9"){
            if (this.currentNumber === undefined) {
                this.currentNumber = "9"
            }
            else {
                this.currentNumber += "9"
            }
        }
        else {
            if (this.currentNumber === undefined) {
                this.currentNumber = "0"
            }
            else {
                this.currentNumber += "0"
            }
        }
    }

    clear(){
        this.runningTotal = 0;
        this.displayTotal = undefined;
        this.currentNumber = undefined;
        this.firstEquation = 0;
    }
    
    total(){
        this.displayTotal = this.runningTotal;
    }

}
