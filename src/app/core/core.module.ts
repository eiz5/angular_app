import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/base/header/header.component';
import { BreadcrumbsComponent } from './components/base/breadcrumbs/breadcrumbs.component';
import { SectionComponent } from './components/courses-page/section/section.component';
import { FooterComponent } from './components/base/footer/footer.component';
import { CoursesListComponent } from './components/courses-page/courses-list/courses-list.component';
import { CoursesPageComponent } from './components/courses-page/courses-page.component';
import { CourseComponent } from './components/courses-page/courses-list/course/course.component';
import { LogoComponent } from './components/base/logo/logo.component';

@NgModule({
	declarations: [
		HeaderComponent,
		BreadcrumbsComponent,
		SectionComponent,
		FooterComponent,
		CoursesListComponent,
		CoursesPageComponent,
		CourseComponent,
		LogoComponent
	],
	exports: [
		CoursesPageComponent,
		BreadcrumbsComponent,
		HeaderComponent,
		FooterComponent
	],
	imports: [CommonModule]
})
export class CoreModule {}
