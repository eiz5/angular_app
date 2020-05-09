import { Injectable } from '@angular/core';
import { IUser } from '../../types/i-user';

@Injectable({
	providedIn: 'root'
})
export class AuthorizationService {
	constructor() {}

	public login(user: IUser): void {
		const obj = JSON.stringify(user);
		localStorage.setItem('user', obj);
	}

	public logout(): void {
		localStorage.removeItem('user');
	}

	public isAuthenticated(): boolean {
		return Boolean(localStorage.getItem('user'));
	}

	public getUserInfo(): IUser {
		const user = localStorage.getItem('user');
		return JSON.parse(user);
	}
}
