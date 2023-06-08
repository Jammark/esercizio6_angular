import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Post } from 'src/app/models/post.interface';
import { PostsService } from 'src/app/service/posts.service';

@Component({
    selector: 'app-inactive-posts',
    templateUrl: './inactive-posts.component.html',
    styleUrls: ['./inactive-posts.component.scss'],
})
export class InactivePostsComponent implements OnInit , AfterViewChecked{
    posts!: Post[];

    constructor(private postsSrv: PostsService) {}

    ngOnInit(): void {
        this.recuperaDati();
    }

     recuperaDati() {
        this.postsSrv.getPosts().subscribe(lista => {
          this.posts = lista;
        });
    }

    onActivePost(id: number, index: number) {
        this.postsSrv.updatePost({ active: true }, id).subscribe(result => {
          console.log(result);
        });
        this.posts.splice(index, 1);
    }

    ngAfterViewChecked(): void {
      //this.recuperaDati();
    }
}
