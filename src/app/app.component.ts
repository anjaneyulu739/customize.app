
import { Component} from '@angular/core';
import{CdkDragDrop,moveItemInArray }from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todo = [
    'Slider images',
    'Image Grid',
    'Banner images',
    'Product Grid',
    'Instagram grid',
    
  ];
drop(event: CdkDragDrop<string[]>){
  moveItemInArray(this.todo, event.previousIndex,event.currentIndex);
}
}
  

