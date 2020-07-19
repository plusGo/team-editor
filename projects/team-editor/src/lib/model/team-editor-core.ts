import {DomUtil} from '../util/dom.util';
import {TeamEditor} from './team-editor';

export class TeamEditorCore {
  public editorCoreElement: HTMLElement;

  constructor(private teamEditor: TeamEditor) {
    this.editorCoreElement = DomUtil.createElement('div');
    DomUtil.setAttribute(this.editorCoreElement, 'contenteditable', 'true');
    DomUtil.addClass(this.editorCoreElement, 'team-editor-core');
    this.teamEditor.editorElement.appendChild(this.editorCoreElement);
  }
}
