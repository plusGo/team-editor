import {TeamEditor} from './team-editor';
import {DomUtil} from '../util/dom.util';

export class TeamEditorToolbar {
  private editorToolbarElement: HTMLElement;

  constructor(private teamEditor: TeamEditor) {
    this.editorToolbarElement = DomUtil.createElement('div');
    DomUtil.addClass(this.editorToolbarElement, 'team-editor-toolbar');
    this.teamEditor.editorElement.insertBefore(this.editorToolbarElement,this.teamEditor.editorCore.editorCoreElement);
  }
}
