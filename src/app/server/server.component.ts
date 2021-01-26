import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent {
  serverId: number = 5;
  serverStatus: String = 'offline';
  serverName: string = 'Um server ai';

  showServerName() {
    if (this.serverName) return `O nome do server é ${this.serverName}`;
    else return 'nome do server está vazio!';
  }
}
