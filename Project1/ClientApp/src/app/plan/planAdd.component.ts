import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Plan } from './plan.models';
import { PlanService } from './plan.service';

@Component({
  selector: 'app-planAdd',
  templateUrl: './planAdd.component.html'
})
export class PlanAddComponent {

  public plan: Plan = <Plan>{};

  constructor(
    private planService: PlanService,
    private router: Router) {
  }

  public savePlan() {
    this.planService.savePlan(this.plan).subscribe(result => {
      this.router.navigateByUrl("/plans");
    }, error => console.error(error));
  }
}
