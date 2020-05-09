import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/base/header/header.component';
import { BreadcrumbsComponent } from './components/base/breadcrumbs/breadcrumbs.component';
import { SearchCourseComponent } from './components/courses-page/search-course/search-course.component';
import { FooterComponent } from './components/base/footer/footer.component';
import { CoursesListComponent } from './components/courses-page/courses-list/courses-list.component';
import { CoursesPageComponent } from './components/courses-page/courses-page.component';
import { CourseListItemComponent } from './components/courses-page/courses-list/course-list-item/course-list-item.component';
import { LogoComponent } from './components/base/logo/logo.component';
import { CourseControlButtonsComponent } from './components/courses-page/courses-list/course-list-item/course-control-buttons/course-control-buttons.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonComponent } from './components/base/UI/button/button.component';
import { CourseBorderDirective } from './directives/course-border.directive';
import { DurationPipe } from './pipes/duration/duration.pipe';
import { OrderByPipe } from './pipes/order-by/order-by.pipe';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LoginFormComponent } from './components/login-page/login-form/login-form.component';
import { TextInputComponent } from './components/base/UI/text-input/text-input.component';

@NgModule({
	declarations: [
		HeaderComponent,
		BreadcrumbsComponent,
		SearchCourseComponent,
		FooterComponent,
		CoursesListComponent,
		CoursesPageComponent,
		CourseListItemComponent,
		LogoComponent,
		CourseControlButtonsComponent,
		ButtonComponent,
		CourseBorderDirective,
		DurationPipe,
		OrderByPipe,
		LoginPageComponent,
		LoginFormComponent,
		TextInputComponent
	],
	exports: [
		CoursesPageComponent,
		BreadcrumbsComponent,
		HeaderComponent,
		FooterComponent
	],
	imports: [CommonModule, FormsModule, FontAwesomeModule]
})
export class CoreModule {}
