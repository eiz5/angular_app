import { Component, OnInit } from '@angular/core';
import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { AuthorizationService } from '../../../../services/authorization/authorization.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	public faUser = faUser;
	public faSignOutAlt = faSignOutAlt;
	public isAuth: boolean;

	constructor(private authorizationService: AuthorizationService) {}

	ngOnInit(): void {
		this.isAuth = this.authorizationService.isAuthenticated();
	}
}
