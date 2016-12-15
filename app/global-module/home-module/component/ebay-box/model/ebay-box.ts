/* * * ./app/home/amaxon-box/model/amazon-box.ts * * */
export class EbayBox {
    constructor(
        public status: number,
        public success:number,
        public messages:string,
        public data:{'uploadUrl':string,'cms_block_data_image_banner':{},'image':string}
    ){}
}