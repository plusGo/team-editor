import {Observable, Subject} from 'rxjs';
import {StringUtil} from './string.util';

export type HttpMethod = 'GET' | 'POST';
export type HttpResponseType = 'TEXT' | 'JSON';

export class HttpUtil {

    public static ajax(url: string, method: HttpMethod, param: any, responseType: HttpResponseType): Observable<any> {
        const xhr = new XMLHttpRequest();
        const result$ = new Subject();

        xhr.open(method, url, true);
        xhr.onreadystatechange = () => {
            let responseText = StringUtil.trim(xhr.responseText);
            if (xhr.readyState === 4 && xhr.status === 200) {
                if (responseType === 'JSON') {
                    responseText = JSON.parse(responseText);
                }
                result$.next(responseText);
            } else {
                result$.error(responseText)
            }
        };
        if(method === 'POST'){

        }else {
            xhr.send(null);
        }

        return null;
    }
}
