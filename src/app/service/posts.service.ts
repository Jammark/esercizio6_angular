import { Injectable } from '@angular/core';
import { Post } from '../models/post.interface';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { map } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class PostsService {
    posts: Post[] = [];

    constructor(private http : HttpClient) {}

     getPosts() {
        return this.http.get<Post[]>(environment.baseURL + 'posts');
    }

    getPost(id: number) {
      return this.http.get<Post>(environment.baseURL + 'posts/'+id);
    }

    updatePost(data: Partial<Post>, id: number) {
        this.posts = this.posts.map((post) =>
            post.id == id ? { ...post, ...data } : post
        );
        return this.posts.find((post) => post.id == id) as Post;
    }
}
