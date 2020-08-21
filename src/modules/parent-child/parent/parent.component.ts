import { Component, OnInit } from '@angular/core';
import { ParentChildService } from '../parent-child.service';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.sass']
})
export class ParentComponent implements OnInit {

  flatmates : any[]

  constructor(private dataService: ParentChildService) {
    this.flatmates = this.dataService.Data
   }

  ngOnInit() {

  }
  removeItem(event:Event){
    //window.alert(`remove ${JSON.stringify(event)} request received!`);

    this.flatmates.forEach((element,index) => {
      if(element.name === event){
        //delete this.flatmates[index];
        this.flatmates.splice(index,1);
      }
    });

  }

}
