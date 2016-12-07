/* * * ./app/home/hot-deal/model/hotdeal.ts * * */
export class Hotdeal {
    constructor(
        public status: number, 
        public success:number,
		public messages:string,
		public data:{'cms_block_data_product':{'data':{'productSellPriceLocal':{},'productName':string},'limit':number,'totalItem':number},'uploadUrl':string}
        ){}
}