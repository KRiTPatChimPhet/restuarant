import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.css']
})
export class FoodMenuComponent implements OnInit {
  allowAddMenuItem = false;
  menuItemCreationStatus = "ไม่มีการเพิ่มรายการเมนู";
  menuItemName = "";
  menuItemCreated = false;
  menuList = ["ข้าวมันไก่","ข้าวขาหมู"];
  constructor() {
    setTimeout( () => { this.allowAddMenuItem = true },3000);
  }

  ngOnInit(): void {
  }

  onCreatMenuItem() {
    this.menuItemCreated = true;
    this.menuList.push(this.menuItemName);
    this.menuItemCreationStatus = "รายการเมนู "+this.menuItemName+" ได้ถูกเพิ่มขึ้นเเล้ว";
  }

  onUpdateMenuName(event: Event) {
    this.menuItemName = (<HTMLInputElement>event.target).value;
  }
}
