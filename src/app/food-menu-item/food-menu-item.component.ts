import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-menu-item',
  templateUrl: './food-menu-item.component.html',
  styleUrls: ['./food-menu-item.component.css']
})
export class FoodMenuItemComponent implements OnInit {
  foodMenuId: number = 1;
  // foodMenuStatus: string = 'Available';
  foodMenuStatus = Math.random() > 0.5 ? "Available" : "Not Availible";
  arrayIcon = ['fish','shrimp','bacon','drumstick','carrot','mug-saucer']
  randomIcon = this.arrayIcon[Math.floor(Math.random() * this.arrayIcon.length)]

  getFoodMenuStatus() {
    return this.foodMenuStatus;
  }

  getColor() {
    return this.foodMenuStatus === "Available" ? "green": "gray";
  }

  constructor() {

  }

  ngOnInit(): void {
  }
}
