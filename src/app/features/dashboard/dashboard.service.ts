import { Injectable } from '@angular/core';
import { ApiMethod, AuthEndPoints } from 'src/app/core/constant/api-constant';
import { HttpService } from 'src/app/core/service/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpService: HttpService) { }
  
  getDashboardData() {
    return this.httpService.requestCall(
      ApiMethod.GET,
      AuthEndPoints.DASHBOARD_DETAILS
    );
  }
}
