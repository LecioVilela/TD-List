import { Component, EventEmitter, OnInit, Output } from '@angular/core';

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

  public submitItemTask() {
    this.emmitTask.emit(this.addItemTask);
    this.addItemTask = "";
  }

}
