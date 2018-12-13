import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  projects = [];
  projectArray = ['YesYogis', 'The VeloChair', 'YesYogis NewsLetter', 'The Teachable Machine', 'Tic Tac Toe', 'To Do List App'];
  projDesc = ['Put your Yoga Career in your own hands and find your dream job',
    'Meet VeoChair: Built for simplicity with possibilities in mind',
    'Get latest updates on whats happening in Yoga industry at the ease of your inbox'
    , 'Want to teach a machine to ' +
  'recognize images? Sounds bizarre, doesn\'t it!' +
  ' Check out this project that uses Image Classification with highly accurate predictions.',
  'Two player Tic Tac Toe game with leader board', 'Manage your tasks better'];

  sub_url = ['https://yesyogis.herokuapp.com/', 'https://www.myvelochair.com/',
    'https://github.com/puneetpalkaur/The_Teachable_Machine', 'https://yesyogis.com/',
    'http://webpage.pace.edu/pk60313n/cs641/Final/www/',
    'https://todolistapp-demo.herokuapp.com/' ];

  sub_title = 'Graduate Student \'18 and full stack developer with expertise in\n' +
    '    Angular 6, Java, HTML, CSS, Javascript, Python & 4 years of experience in customization of\n' +
    '    Oracle Agile Product Lifecycle Management using Core Java, Groovy Script and Agile\n' +
    '    Software Development Kit(SDK).';
  tag1 = ['Angular 6', 'NodeJs', ''];
  tags = [];
  constructor () {
    let index = 0 ;
    while (index < 5 ) {
      const proj = {projName: this.projectArray[index], projDesc: this.projDesc[index], url: this.sub_url[index]};
      this.projects.push(proj);
      index = index + 1;
    }
  }
  findColor(i: number) {
    if (i === 0 || i === 3 || i === 4 ) {
      return 'orange';
    } else {
      return 'green';
    }
  }
  setHover(i: number) {
    document.getElementById(i.toString()).classList.add('cont_over');
  }
  resetHover(i: number) {
    document.getElementById(i.toString()).classList.remove('cont_over');
  }
}
