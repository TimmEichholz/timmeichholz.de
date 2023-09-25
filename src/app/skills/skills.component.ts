import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
skills:any[]=[
  {
    name:"Java Script",
    imgsrc:"js.jpg"
  },
  {
    name:"Angular",
    imgsrc:"angular2.png"
  },{
    name:"HTML",
    imgsrc:"html.png"
  },{
    name:"CSS",
    imgsrc:"css.png"
  },{
    name:"SCRUM",
    imgsrc:"Scrum.png"
  },{
    name:"Git",
    imgsrc:"git.png"
  },
]
  constructor() { }

  ngOnInit(): void {
  }

}
