export class DomUtil {
  public static addClass(element: HTMLElement, className: string): void {
    if (DomUtil.hasClass(element, className)) {
      return;
    }
    const newClass = element.className.split(' ');
    newClass.push(className);
    element.className = newClass.join(' ');
  }

  public static hasClass(element: HTMLElement, className: string): boolean {
    const reg = new RegExp('(^|\\s)' + className + '(\\s|$)');
    return reg.test(element.className);
  }

  public static setAttribute(element: HTMLElement, attributeKey: string, attributeValue: string): void {
    element.setAttribute(attributeKey, attributeValue);
  }

  public static setStyle(element: HTMLElement, cssKey: string, cssValue: string): void {
    element.style[cssKey] = cssValue;
  }

  public static setStyles(element: HTMLElement, styles: { [key: string]: any }): void {
    if (styles) {
      Object.keys(styles).forEach(cssKey => DomUtil.setStyle(element, cssKey, styles[cssKey]));
    }
  }

  public static createElement(tagName: string): HTMLElement {
    return document.createElement(tagName);
  }
}
