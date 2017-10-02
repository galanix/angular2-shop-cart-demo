import { Component } from "@angular/core";
import { Page1Service } from "./page1.service";

@Component({
	moduleId: module.id,
	selector: "page-1",
	templateUrl: "page1.component.html",
	styleUrls: ["page1.component.css"],
	providers: [Page1Service]
})

export class Page1Component {
	constructor(private page1Service: Page1Service) {};
	name: string = "";
	quantity: number;
	itemsToBuy = this.page1Service.getToBuyList();
	itemsAlreadyBought = this.page1Service.getAlreadyBoughtList();

	add() {
		this.page1Service.addItem(this.name, this.quantity);
	}

	buy(id) {
		this.page1Service.buyItem(id);
	}


}