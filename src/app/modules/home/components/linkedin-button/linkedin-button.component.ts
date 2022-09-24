import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-linkedin-button',
  templateUrl: './linkedin-button.component.html',
  styleUrls: ['./linkedin-button.component.scss']
})
export class LinkedinButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public async goLinkedin() {
    const go = await Swal.fire('Algumas modificações foram feitas neste projeto!', 'Quer saber quem foi?', 'question');
    if (go.isConfirmed) {
      await Swal.fire('Muito obrigado!!!', '🚀', 'info');
      window.open('https://www.linkedin.com/in/leciovilela/', '_blank');
    }
    else {
      Swal.fire('Ooops!', 'Qualquer dúvida entre em contato. ;)', 'warning');
    }
  }
}
