import { Component, OnInit } from '@angular/core';
import { AccountDataModel } from 'src/app/model/accountDataModel';
import { GetCardsService } from 'src/app/services/get-cards.service';

@Component({
  selector: 'app-card-box',
  templateUrl: './card-box.component.html',
  styleUrls: ['./card-box.component.css']
})
export class CardBoxComponent implements OnInit {

	constructor(private service: GetCardsService) {

	}

	accountData: AccountDataModel = {
		name: "Fulano",
		account: {
			agency: "0000",
			number: "00.0000-0"
		},
		card: {
			limit: 0,
			number: "0000 0000 0000"
		}
	}

	ngOnInit(): void {
			this.getAccountData()
	}

	getAccountData() {
		this.service.getCard().subscribe(data => {
			this.accountData.name = data.name;
			this.accountData.account.agency = data.account.agency;
			this.accountData.account.number = data.account.number;
			this.accountData.card.limit = data.card.limit;
			this.accountData.card.number = data.card.number.split(" ")[3];
		})
	}
}
