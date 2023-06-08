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
        let item = this.posts.filter(item =>  item.id == id).map(post =>{
            return { ...post, ...data }
         } ).pop();
         console.table(`patch${item}`);
         data['id'] = id;
        return this.http.patch<any>(environment.baseURL + 'posts/'+id, data);
    }
}
