import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

//import {Aos} from "aos";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  showProject:any = "All"

  projects:any[] = [
    {
      name: "El Pollo Loco",
    description: "A small Jump and Run. Where you have to jump over or on chickens and collect bottles to beat the El Pollo Loco",
    link: "https://timm-eichholz.de/el-pollo-loco/game.html",
    github: "",
    JSDoc: "",
    imgsrc: "./assets/img/elpolloloco.png",
    tech:"js"
    },
    {
      name: "Join",
    description: "A small Group Project. An app to manage small projects",
    link: "https://timm-eichholz.de/join/index.html",
    github: "",
    JSDoc: "",
    imgsrc: "./assets/img/joinlogo2.png",
    tech:"js"
    },{
      name: "Website",
    description: "this Website",
    link: "",
    github: "",
    JSDoc: "",
    imgsrc: "",
    tech: "angular"
    }
    /*,{
      name: "Slack clone",
    description: "",
    link: "",
    github: "",
    JSDoc: "",
    imgsrc: "",
    tech:"angular"
    },{
      name: "Working Page",
    description: "a Website with different small apps you could use daily. A timestope App, a small notebook, a kanban board  and a shopping List",
    link: "",
    github: "",
    JSDoc: "",
    imgsrc: "",
   tech:"js"
    },
    */
  ]

  constructor() { }

  ngOnInit(): void {
    Aos.init();

  }
ngAfterViewInit(): void {
  console.log('This event fire after the content init have been loaded!');
}
  
  registrationForm:any;
  projectForm:any;
}
