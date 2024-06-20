import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
    selector: 'app-root',
    standalone: false,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
    // imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent]
})
export class AppComponent {
  users = DUMMY_USERS;
  // name = signal('Arpan');
  selectedUserId?: string;

  get selectedUser(){
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  onSelectUser(id: string){
    // this.name.set(this.users.filter(ele => ele.id == id)[0].name);
   this.selectedUserId = id;
    

  }
}
