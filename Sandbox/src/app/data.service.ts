import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    childCount = 0;
    parentCount = 0;
    totalCount = 0;

    constructor() { }

    fromChild(childsCount){
        this.childCount = childsCount;
    }

    fromParent(parentsCount){
        this.parentCount = parentsCount;

    }

    getTotal(){
        this.totalCount = this.parentCount + this.childCount;
        return this.totalCount;
    }

}
