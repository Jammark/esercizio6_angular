import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.interface';
import { UsersService } from 'src/app/service/users.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {

    users! :User[]

    constructor(private userSrv: UsersService) {}

    ngOnInit(): void {
       this.userSrv.getUsers().subscribe(lista => {
        this.users = lista;
       });
    }
}
