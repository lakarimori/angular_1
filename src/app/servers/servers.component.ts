import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  toggleButton: boolean = false;
  counter: number = 0;
  counters: Array<number> = [];

  constructor() {}

  ngOnInit(): void {}

  public onButtonClick() {
    this.counter++;
    this.toggleButton = !this.toggleButton;
    this.counters.push(this.counter);
  }
}
