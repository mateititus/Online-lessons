import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Plan } from './plan.models';
import { PlanService } from './plan.service';

@Component({
  selector: 'app-planDetails',
  templateUrl: './planDetails.component.html'
})
export class PlanDetailsComponent implements OnInit {

  public plan: Plan = <Plan>{};
  public id: string;

  constructor(private planService: PlanService, private router: ActivatedRoute, private routers: Router) { }

  ngOnInit() {
    this.router.params.subscribe(param => {
      this.id = param['id'];
      this.loadPlan();
    });
  }

  loadPlan() {
    this.planService.loadPlanById(this.id).subscribe(result => {
      this.plan = result;
    }, error => console.error(error));
  }
}
