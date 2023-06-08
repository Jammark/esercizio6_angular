import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/service/posts.service';
import { Post } from 'src/app/models/post.interface';
import { ActivatedRoute } from '@angular/router'; // Serve per intercettare l'url della rotta attiva e leggerlo
import { Subscription } from 'rxjs'; // Operatore che consente di interagire con un Observable (oggetto in grado di comunicare stato, valore e loro eventuali cambiamenti a una variabile, a un component, a un service...)

@Component({
    selector: 'app-post-details',
    templateUrl: './post-details.component.html',
    styleUrls: ['./post-details.component.scss'],
})
export class PostDetailsComponent implements OnInit {

    sub!: Subscription;
    post: Post | undefined;

    constructor(private postSrv: PostsService, private router: ActivatedRoute) {}

    ngOnInit(): void {
        this.sub = this.router.params.subscribe((parametri) => { // Sottoscrizione dell'observable params, che legge l'url e inserisce le varie parti in un array
            const idLetto = +parametri['id']; // lettura del parametro id dell'url
            this.postSrv.getPost(idLetto).subscribe(item => {
              this.post = item;
            });
        });
    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.sub.unsubscribe(); // Desottoscrizione della subscription
    }
}
