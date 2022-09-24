import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent implements OnInit {

  @Output() public emmitTask = new EventEmitter();

  public addItemTask: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  public async submitItemTask() {

    this.addItemTask = this.addItemTask.trim()

    if (!this.addItemTask) {
      await Swal.fire('Ooops!', 'Parece que você ainda não informou a nova atividade... 😁', 'info');
      this.addItemTask = "";
    }
    else {
      this.emmitTask.emit(this.addItemTask);
      this.addItemTask = "";
    }
  }
}
