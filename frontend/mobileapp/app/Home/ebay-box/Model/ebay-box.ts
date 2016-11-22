/* * * ./app/home/amaxon-box/model/amazon-box.ts * * */
export class EbayBox {
    constructor(
        public id: string,
        public src: string, 
        public title:string,
        public price: string,
        public currency: string
        ){}
}