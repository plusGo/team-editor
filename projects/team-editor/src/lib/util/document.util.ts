import {QUIRKS} from '../config/team-editor.config';

export class DocumentUtil {
  public static getDocument(element: Element): Document {
    if (!element) {
      return document;
    }
    return element.ownerDocument || (element as any).document || element;
  }

  public static getDocumentElement(doc: Document = document): HTMLElement {
    return QUIRKS ? doc.body : doc.documentElement;
  }

}
