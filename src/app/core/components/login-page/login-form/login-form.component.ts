import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../../../services/authorization/authorization.service';

@Component({
	selector: 'app-login-form',
	templateUrl: './login-form.component.html',
	styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
	private email: string;
	private password: string;

	constructor(private authorizationService: AuthorizationService) {}

	ngOnInit(): void {}

	public onChangeEmail(email: string) {
		this.email = email;
	}

	public onChangePassword(password: string) {
		this.password = password;
	}

	public login() {
		console.log(this.password, 'password');
		console.log(this.email, 'email');
	}
}
