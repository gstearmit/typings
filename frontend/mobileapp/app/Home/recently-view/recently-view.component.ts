// Imports
import { Component, OnInit } from '@angular/core';
@Component({
    moduleId: module.id,
    selector: 'recently-view',
    templateUrl: `recently-view.component.html`
})
export class RecentlyViewComponent implements OnInit {
    recentlyView = [];
    ngOnInit() {
        this.loadRecentlyView();
    }
    private loadRecentlyView() {
        this.recentlyView =[
            {
                "productId" : "1",
                "productImageLink" : "http://i.ebayimg.com/00/s/MTIwMFgxNjAw/z/ywwAAOSwZG9Wi~mT/$_1.JPG",
                "productName" : "Product test 1",
                "productPrice" : "21.708.939"
            },
            {
                "productId" : "2",
                "productImageLink" : "http://i.ebayimg.com/images/g/cv8AAOSwKIpWCYtK/s-l240.jpg",
                "productName" : "Product test 2",
                "productPrice" : "21.708.939"
            },
            {
                "productId" : "3",
                "productImageLink" : "http://i.ebayimg.com/images/g/FUgAAOSwT6pV090y/s-l240.jpg",
                "productName" : "Product test 3",
                "productPrice" : "21.708.939"
            },
            {
                "productId" : "4",
                "productImageLink" : "http://i.ebayimg.com/images/g/jEMAAOSwHnFVwiJp/s-l240.jpg",
                "productName" : "Product test 4",
                "productPrice" : "21.708.939"
            },
            {
                "productId" : "5",
                "productImageLink" : "http://i.ebayimg.com/images/g/ProAAOSw0QFXCBgZ/s-l240.jpg",
                "productName" : "Product test 5",
                "productPrice" : "21.708.939"
            },
            {
                "productId" : "6",
                "productImageLink" : "http://i.ebayimg.com/images/g/7isAAOSwiylXBYcB/s-l240.jpg",
                "productName" : "Product test 6",
                "productPrice" : "21.708.939"
            },
            {
                "productId" : "7",
                "productImageLink" : "http://i.ebayimg.com/images/g/96oAAOSwQgpXArhH/s-l240.jpg",
                "productName" : "Product test 7",
                "productPrice" : "21.708.939"
            },
            {
                "productId" : "8",
                "productImageLink" : "http://i.ebayimg.com/images/g/esMAAOSwz2lXDMpi/s-l240.jpg",
                "productName" : "Product test 8",
                "productPrice" : "21.708.939"
            }
        ];
    }
}