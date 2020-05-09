import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesPageComponent } from './core/components/courses-page/courses-page.component';
import { LoginPageComponent } from './core/components/login-page/login-page.component';

const routes: Routes = [
	{ path: '', redirectTo: 'courses', pathMatch: 'full' },
	{
		path: 'courses',
		component: CoursesPageComponent
	},
	{
		path: 'login',
		component: LoginPageComponent
	},
	{ path: '**', redirectTo: 'courses' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
