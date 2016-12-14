import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { LeftMenuComponent }   from './component/left-menu/left-menu.component';

@NgModule({
	imports: [
		CommonModule
	],
	providers: [

	],
	declarations: [
		LeftMenuComponent
	],
	exports: [
		CommonModule,
		LeftMenuComponent
	]
})
export class CommonSystemModule { }


