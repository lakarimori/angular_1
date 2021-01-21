import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent {
  serverId: number = 5;
  serverStatus: String = 'offline';
  serverName = 'Um server ai';

  showServerName() {
    return `O nome do server é ${this.serverName}`;
  }
}
