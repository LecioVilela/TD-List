import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-github-button',
  templateUrl: './github-button.component.html',
  styleUrls: ['./github-button.component.scss']
})
export class GithubButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public async goGithub() {
    const go = await Swal.fire('Aqui é minha coleção de repositórios.', 'Bora dar uma olhada?', 'question');
    if (go.isConfirmed) {
      await Swal.fire('Muito obrigado!!!', '🚀', 'info');
      window.open('https://github.com/LecioVilela', '_blank');
    }
    else {
      Swal.fire('Ooops!', 'Qualquer dúvida entre em contato. ;)', 'warning');
    }
  }
}
