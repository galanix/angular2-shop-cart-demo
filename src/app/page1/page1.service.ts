import { Injectable } from '@angular/core';

@Injectable()

export class Page1Service {
	toBuyList = [];
	alreadyBoughtList = [];
	message = true;

	addItem(itemName: string, itemQuantity: number) {
		let item = {
			name: itemName,
			quantity: itemQuantity
		}
		this.toBuyList.push(item);
	}

	buyItem(id) {
		this.message = false;
		this.alreadyBoughtList.push(this.toBuyList[id]);
		this.toBuyList.splice(id, 1);
	}

	getToBuyList() {
		return this.toBuyList;
	}

	getAlreadyBoughtList() {
		return this.alreadyBoughtList;
	}

	getMessage() {
		return this.message;
	}
}