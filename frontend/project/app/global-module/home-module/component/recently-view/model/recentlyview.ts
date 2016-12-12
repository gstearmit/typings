/* * * ./app/home/recently-view/model/recentlyview.ts * * */
export class Recentlyview {
    constructor(
        public id: number,
        public src: string,
        public title:string,
        public price: number,
        public currency: string,
        public sale: string
    ){}
}