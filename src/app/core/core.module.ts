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
		CourseControlButtonsComponent
	],
	exports: [
		CoursesPageComponent,
		BreadcrumbsComponent,
		HeaderComponent,
		FooterComponent
	],
	imports: [CommonModule, FormsModule]
})
export class CoreModule {}
