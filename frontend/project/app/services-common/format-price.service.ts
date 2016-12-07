import { Injectable }     from '@angular/core';

@Injectable()
export class FormatPriceService {
     constructor () {
	 }
     getDefault(number,storeId){
		if(storeId==1){
			return (number);
		}else{
			return (number + 5);
		}
     }
}
