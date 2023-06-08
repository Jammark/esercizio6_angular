import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.interface';
import { UsersService } from 'src/app/service/users.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {

    sub!: Subscription;
    user: User | undefined

    constructor(private userSrv: UsersService, private router: ActivatedRoute) {}

    ngOnInit(): void {
        this.sub = this.router.params.subscribe((parametri) => {
            const idLetto = +parametri['id'];
            this.userSrv.getUser(idLetto).subscribe(item => {
              this.user = item;
            });
        });
    }

    ngOnDestroy(): void {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.sub.unsubscribe();
    }
}
