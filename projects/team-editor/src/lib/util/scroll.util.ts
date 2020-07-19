import {WindowUtil} from './window.util';

export class ScrollUtil {
  public static getScrollPosition(doc?: Document): { [key: string]: any } {
    doc = doc || document;
    const x = WindowUtil.getWindow(doc).scrollX;
    const y = WindowUtil.getWindow(doc).scrollY;
    return {x, y};
  }
}
