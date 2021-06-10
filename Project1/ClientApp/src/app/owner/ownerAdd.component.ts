import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Owner } from './owner.models';
import { OwnerService } from './owner.service';

@Component({
  selector: 'app-ownerAdd',
  templateUrl: './ownerAdd.component.html'
})
export class OwnerAddComponent {

  public owner: Owner = <Owner>{};

  constructor(
    private ownerService: OwnerService,
    private router: Router) {
  }

  public saveOwner() {
    this.ownerService.saveOwner(this.owner).subscribe(result => {
      this.router.navigateByUrl("/owners");
    }, error => console.error(error));
  }
}
