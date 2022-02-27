import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-menu-item',
  templateUrl: './food-menu-item.component.html',
  styleUrls: ['./food-menu-item.component.css']
})
export class FoodMenuItemComponent implements OnInit {
foodMenuId: number = 1;
  foodMenuStatus: string = 'Available';

  getFoodMenuStatus() {
    return this.foodMenuStatus;
  }

  constructor() {

  }

  ngOnInit(): void {
  }
}
