// Imports
import { Component, OnInit } from '@angular/core';
import { CommentService } from './services/comment.service'
@Component({
    selector: 'my-app',
    templateUrl: 'app/homes/home.component.html'
})
// Component class implementing OnInit
export class HomeComponent implements OnInit {
  // Private property for binding
  comments: {};
  constructor(private commentService: CommentService) {

  }

  // Load data ones componet is ready
  ngOnInit() {
    // Pass retreived pets to the property
    this.comments = this.commentService.getComments();
  }
}
