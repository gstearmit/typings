/* * * ./app/home/hot-deal/model/hotdeal.ts * * */
export class Hotdeal {
    constructor(
        public id: string,
        public src: string, 
        public title:string,
        public price: string,
        public currency: string
        ){}
}