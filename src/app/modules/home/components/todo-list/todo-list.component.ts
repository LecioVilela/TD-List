// Interface
import { TaskList } from './../../model/task-list';

import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public taskList: Array<TaskList> = [];

  constructor() { }

  ngOnInit(): void {
  }

  public async setEmitTask(event: string) {
    await Swal.fire('Atividade adicionada:', event, 'success');
    this.taskList.push({ task: event, checked: false });
  }

  public deleteItemTaskList(event: number) {
    this.taskList.splice(event, 1)
  }

  // public async deleteAll() {
  //   Swal.fire('Ooops?', 'Deseja apagar toda a lista?', 'question').then((result) => {
  //     if (result.isConfirmed) {
  //       this.taskList = [];
  //     }
  //   }).then(() => {
  //     Swal.fire('Ótimo!', 'Agora, você pode inserir novas atividades.', 'success');
  //   });
  // }

  public async deleteAll() {
    const result = await Swal.fire('Ooops?', 'Deseja apagar toda a lista? 🤔', 'question')
    if (result.isConfirmed) {
      this.taskList = [];
      await Swal.fire('Ótimo!', 'Agora, você pode inserir novas atividades. 😎', 'success');
    }
    else {
      await Swal.fire('Não finalizou tudo?', 'Quando finalizar é só voltar aqui! 😊', 'info');
    }
  }
}
