import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Plan } from './plan.models';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  constructor(private http: HttpClient,
    @Inject("BASE_URL") private baseUrl: string
  ) { }

  loadPlans() {
    return this.http.get<Plan[]>(this.baseUrl + 'api/plans');
  }

  loadPlanById(id) {
    return this.http.get<Plan>(this.baseUrl + 'api/plans/' + id);
  }

   savePlan(plan: Plan) {
   return this.http.post(this.baseUrl + 'api/plans', plan);
  }

  updatePlan(id, plan: Plan) {
    return this.http.put(this.baseUrl + 'api/plans/' + id, plan);
  }

  deletePlan(plan: Plan) {
    return this.http.delete(this.baseUrl + 'api/plans/' + plan.id);
  }
}
