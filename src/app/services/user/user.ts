import { IUser } from '../../types/i-user';

export class User implements IUser {
	public id: string;
	public firstName: string;
	public lastName: string;
	constructor(id, firstName, lastName) {
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
	}
}
