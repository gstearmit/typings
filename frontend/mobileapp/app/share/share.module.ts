import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common'; //<-- This one 
// import { ShareComponent } from './share.component';
import { TranslateModule, TranslatePipe } from 'ng2-translate';
@NgModule({
	imports: [
		// CommonModule,
		TranslateModule
	],

	exports: [
		// CommonModule,
		TranslateModule,
	],
	providers: [

	],
	declarations: [
		// ShareComponent
	]
})
export class ShareModule { }


