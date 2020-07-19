export class RangeUtil {
  public static updateCollapse(range: Range): Range {
    (range as any).collapsed = range.startContainer === range.endContainer && range.startOffset === range.endOffset;
    return range;
  }
}
