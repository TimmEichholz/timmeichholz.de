import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

journeysteps:any[] =[
  {
    icon:"mouse.png",
    headline:"My journey began",
    text:"My journey into the world of programming started back in school, experimenting with PowerPascal and later with Delphi. Even then, I knew that coding was something I enjoyed."
  },
  {
    icon:"mouse.png",
    headline:"The push into tech",
    text:"In my previous job, I was tasked with learning new technologies and teaching them to my colleagues. This led me to automate my workflows and find creative solutions. After a while, I became the intermediary between my colleagues and IT."
  },{
    icon:"mouse.png",
    headline:"The Shift to Programming",
    text:"Realizing that my tasks were increasingly leaning towards IT, I decided to fully immerse myself in the world of programming. My goal is to transition from a hobby programmer to a professional developer."
  },{
    icon:"mouse.png",
    headline:"Aspiring to create solutions myself",
    text:"In 2020, I made the decision to pursue my professional dream and chose to undergo training as a web developer. My aim is to develop solutions that truly add value."
  },
]

  constructor() { }

  ngOnInit(): void {
  }

}
