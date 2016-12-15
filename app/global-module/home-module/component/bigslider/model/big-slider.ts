/* * * ./app/slider/model/slider.ts * * */
export class BigSlider {
    constructor(
        public status: number, 
        public success:number,
		public messages:string,
		public data:{'cms_block_data_image_slide':{},'uploadUrl':string}
        ){}
}