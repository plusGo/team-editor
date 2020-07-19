import {WindowUtil} from '../util/window.util';
import {UnitUtil} from '../util/unit.util';
import {DomUtil} from '../util/dom.util';
import {ScrollUtil} from '../util/scroll.util';
import {DocumentUtil} from '../util/document.util';

export interface TeamEditorWidgetOption {
  name?: string;
  document?: Document;
  x?: number | string;
  y?: number | string;
  z?: number;
  alignEl?: HTMLElement;
  width?: number | string;
  height?: number | string;
}

export class TeamEditorWidget {
  name: string;
  document: Document;
  window: Window;
  x: string;
  y: string;
  width: string;
  height: string;
  z: number;
  div: HTMLElement;
  private alignEl: HTMLElement;

  constructor(options: TeamEditorWidgetOption) {
    this.name = options.name || '';
    this.document = options.document || document;
    this.window = WindowUtil.getWindow(this.document);
    this.x = UnitUtil.addUnit(options.x as string) as string;
    this.y = UnitUtil.addUnit(options.y as string) as string;
    this.z = options.z;
    this.width = UnitUtil.addUnit(options.width as string) as string;
    this.height = UnitUtil.addUnit(options.height as string) as string;
    this.div = DomUtil.createElement('div');
    DomUtil.setStyle(this.div, 'display', 'block');
    this.alignEl = options.alignEl;

    if (this.width) {
      DomUtil.setStyle(this.div, 'width', this.width);
    }
    if (this.height) {
      DomUtil.setStyle(this.div, 'height', this.height);
    }
    if (this.z) {
      DomUtil.setStyles(this.div, {
        position: 'absolute',
        left: this.x,
        top: this.y,
        'z-index': this.z
      });
    }
  }

  autoPosition(): void {
    let x, y;




    const width = UnitUtil.removeUnit(this.width) || 0;
    const height = UnitUtil.removeUnit(this.height) || 0;
    const scrollPosition = ScrollUtil.getScrollPosition();

    if (this.alignEl) {
    } else {
      const docEl = DocumentUtil.getDocumentElement(this.document);
      x = Math.round(scrollPosition.x + (docEl.clientWidth - width) / 2);
      y = Math.round(scrollPosition.y + (docEl.clientHeight - height) / 2);
    }
  }

}
