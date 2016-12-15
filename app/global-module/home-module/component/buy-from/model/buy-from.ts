/* * * ./app/slider/model/slider.ts * * */
export class BuyFrom {
    constructor(
        public status: number,
        public success:number,
        public messages:string,
        public data:{'cms_block_data_category':{},'cms_block_data_image_brand':{},'uploadUrl':{}}
    ){}
}