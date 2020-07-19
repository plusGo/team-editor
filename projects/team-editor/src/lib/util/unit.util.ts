export class UnitUtil {
  public static addUnit(value: string, unit = 'px'): string {
    return value && /^-?\d+(?:\.\d+)?$/.test(value) ? value + unit : value;
  }

  public static removeUnit(val: any): number {
    const match = /(\d+)/.exec(val);
    return val && (match) ? parseInt(match[1], 10) : 0;
  }
}
