import { Component, OnInit } from '@angular/core';
import { DrawchatBrushService } from '../../services/drawchat-brush.service';

@Component({
  selector: 'app-drawchat-tools',
  templateUrl: './drawchat-tools.component.html',
  styleUrls: ['./drawchat-tools.component.css'],
})
export class DrawchatToolsComponent implements OnInit {
  currTool = 'BRUSH'
  constructor(
    private brush: DrawchatBrushService
  ) { }

  ngOnInit() {
  }

  changeTool(tool:string) {
    this.currTool = tool;
    this.brush.changeTool(tool);
  }
}
