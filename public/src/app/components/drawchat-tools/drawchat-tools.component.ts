import { Component, OnInit } from '@angular/core';
import { DrawchatBrushService } from '../../services/drawchat-brush.service';

@Component({
  selector: 'app-drawchat-tools',
  templateUrl: './drawchat-tools.component.html',
  styleUrls: ['./drawchat-tools.component.css'],
})
export class DrawchatToolsComponent implements OnInit {

  constructor(
    private brush: DrawchatBrushService
  ) { }

  ngOnInit() {
  }

  changeTool(tool:string) {
    this.brush.changeTool(tool);
  }
}
