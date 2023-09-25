import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @ViewChild('mailForm') mailForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
//  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  async sendMail(){
    //action="https://f014ed17@w01d1603.kasserver.com/send_mail/send_mail.php" 
    // method="post"
    console.log('sending mail', this.mailForm);
    let nameField = this.nameField.nativeElement;
    let messageField = this.messageField.nativeElement;
 //   let emailField = this.emailField.nativeElement;
    let sendButton = this.sendButton.nativeElement;
    
    nameField.disabled = true;
  //  emailField.disabled = true;
    messageField.disabled = true;
    sendButton.disabled = true;
//animation anzeigen zum senden

    let fd = new FormData();
    fd.append('name',nameField.value);
   // fd.append('email',emailField.value);
    fd.append('message',messageField.value);

    //this.mailForm.nativeElement.disable();
    //this.messageField.nativeElement.disabled = true;
//senden
await fetch('https://timm-eichholz.de/send_mail/send_mail.php', 
{
  method: 'POST',
  body: fd
})
// text anzeigen Nachricht gesendet
    nameField.disabled = false;
   // emailField.disabled = false;
    messageField.disabled = false;
    sendButton.disabled = false;
  }
}
