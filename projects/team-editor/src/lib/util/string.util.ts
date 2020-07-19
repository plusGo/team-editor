export class StringUtil {
    public static trim(str: string): string {
        if (str) {
            return str.trim();
        } else {
            return str;
        }
    }
}
