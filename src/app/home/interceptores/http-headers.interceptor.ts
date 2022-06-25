// import { Injectable } from '@angular/core';
// import {
//   HttpInterceptor,
//   HttpEvent,
//   HttpHandler,
//   HttpRequest,
// } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { environment as env } from 'src/environments/environment';

// @Injectable()
// export class HttpHeadersInterceptor implements HttpInterceptor {
//   intercept(
//     req: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     req = req.clone({
//       setHeaders: {
//         'x-rapidapi-key': env.RAW_KEY,
//       },
//       setParams: {
//         key: env.RAW_KEY,
//       },
//     });
//     return next.handle(req);
//   }
// }
