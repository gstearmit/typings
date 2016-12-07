/* * * ./app/home/recently-view/model/recentlyview.ts * * */
export class Recentlyview {
    constructor(
        public id: string,
        public src: string,
        public title:string,
        public price: string,
        public currency: string,
        public sale: string
    ){}
}