import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-text-input',
	templateUrl: './text-input.component.html',
	styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {
	@Input()
	public id: string;

	@Input()
	public placeholder: string;

	@Input()
	public label?: string;

	@Input()
	public icon?;

	@Input()
	public isFormField?: boolean;

	@Output()
	valueChanged: EventEmitter<any> = new EventEmitter();

	public value: string;
	constructor() {}

	ngOnInit(): void {}

	public onValueChanged(value: string): void {
		this.value = value;
		this.valueChanged.emit(value);
	}
}
