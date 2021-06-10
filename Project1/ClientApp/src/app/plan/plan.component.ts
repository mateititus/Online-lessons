import { Component } from '@angular/core';
import { Plan } from './plan.models';
import { PlanService } from './plan.service';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html'
})
export class PlansComponent {
  public plans: Plan[];

  columnsToDisplay: string[] = ['teacherName', 'studentName', 'lessonName', 'done', 'actions'];

  constructor(
    private planService: PlanService) {
    this.loadPlans();
  }

  public deletePlan(plan: Plan) {
    this.planService.deletePlan(plan).subscribe(result => {
      this.loadPlans();
    }, error => console.error(error))
  }

  public loadPlans() {
    this.planService.loadPlans().subscribe(
      (result) => {
        this.plans = result;
      },
      (error) => console.error(error)
    );
  }
}
