import {HttpInterceptorFn} from "@angular/common/http";


export const tokenInterceptor : HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem("jwt");
  console.log(token);

  const newReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  })
  return next(newReq);
}