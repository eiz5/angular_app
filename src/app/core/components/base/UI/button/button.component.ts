import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
	@Input()
	public icon?;

	@Input()
	public click: () => void;

	@Output()
	buttonClick: EventEmitter<any> = new EventEmitter();

	constructor() {}

	ngOnInit(): void {}

	public onClickButton(): void {
		this.buttonClick.emit();
	}
}
