import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
    @Input() ChildsCount;
    @Input() ParentsCount;
    @Output('OutputCount') countInChild = new EventEmitter;
    
    
    totalFromService;

    constructor(private DataService: DataService) { }

    ngOnInit() {
    }

    sendChild(){
        this.countInChild.emit(this.ChildsCount)
    }
    

    getTotal(){
        this.DataService.fromChild(this.ChildsCount)
        this.DataService.fromParent(this.ParentsCount)
        this.totalFromService = this.DataService.getTotal()
    }


}
