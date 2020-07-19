import {DomUtil} from '../util/dom.util';
import {TeamEditorCore} from './team-editor-core';
import {TeamEditorToolbar} from './team-editor-toolbar';

export class TeamEditor {
  public editorElement: HTMLElement;
  public editorToolbar: TeamEditorToolbar;
  public editorCore: TeamEditorCore;

  constructor(private selector: string | HTMLElement) {
    this.initEditorElement(selector);
    this.initEditorCoreElement(this.editorElement);
    // this.initEditorToolbar(this.editorElement);
  }

  private initEditorElement(selectorOrElement: string | HTMLElement) {
    this.editorElement = typeof selectorOrElement === 'string' ? document.querySelector(selectorOrElement) : selectorOrElement;
    if (!(this.editorElement instanceof Element)) {
      throw new Error('selector invalid');
    }
    if (this.editorElement) {
      DomUtil.addClass(this.editorElement, 'team-editor');
    } else {
      throw new Error(`${selectorOrElement} not founded!`);
    }
  }

  private initEditorCoreElement(editorElement: Element) {
    if (!editorElement) {
      throw new Error('editor element can not be null');
    }
    this.editorCore = new TeamEditorCore(this);
  }

  private initEditorToolbar(editorElement: Element) {
    if (!editorElement) {
      throw new Error('editor element can not be null');
    }
    this.editorToolbar = new TeamEditorToolbar(this);
  }
}
