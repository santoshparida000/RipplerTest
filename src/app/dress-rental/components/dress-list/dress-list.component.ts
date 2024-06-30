import { Component, OnInit } from '@angular/core';
import { DressDataModel } from '../../models/dress-list.model';
import { DressListService } from '../../services/dress-list.service';
import { GlobalConstants } from 'src/app/app.global';

@Component({
  selector: 'app-dress-list',
  templateUrl: './dress-list.component.html',
  styleUrls: ['./dress-list.component.scss']
})
export class DressListComponent implements OnInit {

  dresses: DressDataModel[] = [];

  constructor(private dressListService: DressListService) { }

  ngOnInit(): void {

    this.dressListService.getDressList().subscribe((data) =>{
      this.dresses = data.data;
      this.dresses.forEach(dress => {
        dress.currentImageIndex = 0;
        dress.images = dress.images.map(image => GlobalConstants.DOMAIN_END_POINT + image);
      }); 
    });
  }

  prevImage(dress: DressDataModel): void {
    if (dress?.currentImageIndex > 0) {
      dress.currentImageIndex--;
    } else {
      dress.currentImageIndex = dress.images.length - 1;
    }
  }

  nextImage(dress: DressDataModel): void {
    debugger;
    if (dress.currentImageIndex < dress.images.length - 1) {
      dress.currentImageIndex++;
    } else {
      dress.currentImageIndex = 0;
    }
  }

}
