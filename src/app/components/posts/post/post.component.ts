import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs';
import { PostI } from 'src/app/shared/models/post.interface';
import { PostService } from '../post.service';
import { MaterialModule } from '../../../material.module'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  // public posts$: Observable<PostI[]>;
  @Input() post?: PostI;

  constructor(private postSvc: PostService) { }

  ngOnInit() {
    // this.posts$ = this.postSvc.getAllPosts();
  }
}
