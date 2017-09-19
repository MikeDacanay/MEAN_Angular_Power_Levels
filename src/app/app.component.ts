import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	powerlevel = {num:0, num2:0};
	title = 'intial power level';

	onSubmit(){
		this.powerlevel.num2 = this.powerlevel.num;
	}
}
