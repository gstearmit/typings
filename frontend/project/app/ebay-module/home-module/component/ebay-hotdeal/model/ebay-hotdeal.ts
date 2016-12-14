/**
 * Created by idea on 14/12/2016.
 */
export class EbayHotdeal {
    constructor(
        public status: number,
        public success:number,
        public messages:string,
        public data:{'uploadUrl':string,'cms_block_data_image_banner':{},'image':string}
    ){}
}