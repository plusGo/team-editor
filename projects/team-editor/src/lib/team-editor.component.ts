import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {TeamEditor} from './model/team-editor';

@Component({
  selector: 'team-editor',
  template: `
    <div style="width: 800px;height: 400px;margin: 0 auto;margin-top: 80px">
      <div #editor id="editor"></div>
    </div>
  `,
  styles: []
})
export class TeamEditorComponent implements OnInit, AfterViewInit {
  @ViewChild('editor')
  private editorRef: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const teamEditor = new TeamEditor(this.editorRef.nativeElement);
  }

}
