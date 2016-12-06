import { NgModule } from '@angular/core';
import { TranslateModule} from 'ng2-translate';
@NgModule({
	imports: [
		TranslateModule,
		TranslateModule.forRoot()
	],

	exports: [
		TranslateModule
	],
	providers: [

	],
	declarations: [
	]
})
export class ShareModule { }


