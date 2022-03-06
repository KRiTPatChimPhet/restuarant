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
  arrayIcon = ["<i class="fa-solid fa-candy-cane"></i>"];
  iconMenu = Math.floor(Math.random()*this.arrayIcon.length);
  icon = this.arrayIcon[this.iconMenu];

  getIcon() {
    return this.icon;
  }

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
