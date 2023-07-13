import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent {

  task!: string;
  taskgroup: string[] = [];

  addtask() {
    if (this.task == '') {
      alert('Todo cannot be empty')
    }
    else {
      this.taskgroup.push(this.task);
      this.task = '';
    }
    console.log(this.task)
  }

  deleteTask(task:string){
    let index = this.taskgroup.indexOf(task);
    if(index !== -1) {
      this.taskgroup.splice(index, 1);
    }
  }

}
