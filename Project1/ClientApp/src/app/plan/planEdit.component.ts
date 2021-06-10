import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Plan } from './plan.models';
import { PlanService } from './plan.service';

@Component({
  selector: 'app-planEdit',
  templateUrl: './planEdit.component.html'
})
export class PlanEditComponent implements OnInit {

  public plan: Plan = <Plan>{};
  public id: string;

  ngOnInit() {
    this.routers.params.subscribe(param => {
      this.id = param['id'];
      this.loadPlan();
    });
  }

  constructor(private planService: PlanService, private routers: ActivatedRoute, private router: Router) { }

  loadPlan() {
    this.planService.loadPlanById(this.id).subscribe(result => {
      this.plan = result;
    }, error => console.error(error));
  }
  public savePlan() {
    this.planService.updatePlan(this.plan.id, this.plan).subscribe(result => {
      this.router.navigateByUrl("/plans");
    }, error => console.error(error));
  }
}
