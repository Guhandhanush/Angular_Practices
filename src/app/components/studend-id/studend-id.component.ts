import { Component } from '@angular/core';

@Component({
  selector: 'app-studend-id',
  templateUrl: './studend-id.component.html',
  styleUrls: ['./studend-id.component.css']
})
export class StudendIdComponent {

  id!: string;
  student:any;

  studentDetails(){
    let students = [
      {
        id:'1',
        name:'Eren Yeager',
        age:22,
        country:'Japan'
      },
      {
        id:'2',
        name:'John Wick',
        age:60,
        country:'Russia'
      },
      {
        id:'3',
        name:'Tom Cruise',
        age:61,
        country:'America'
      }
    ];

    this.student = students.find(student=>student.id === this.id)
  }
}
