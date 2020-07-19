import {DocumentUtil} from './document.util';

export class WindowUtil {
  public static getWindow(element: Document | Element): Window {
    if (!element) {
      return window;
    }
    const document = DocumentUtil.getDocument(element as any);
    return (document as any).parentWindow || document.defaultView;
  }

}
