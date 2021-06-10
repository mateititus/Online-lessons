import { Component } from '@angular/core';
import { Owner } from './owner.models';
import { OwnerService } from './owner.service';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html'
})
export class OwnersComponent {
  public owners: Owner[];

  columnsToDisplay: string[] = ['name', 'age', 'phone', 'email', 'adress', 'actions'];

  constructor(
    private ownerService: OwnerService) {
    this.loadOwners();
  }

  public deleteOwner(owner: Owner) {
    this.ownerService.deleteOwner(owner).subscribe(result => {
      this.loadOwners();
    }, error => console.error(error))
  }

  public loadOwners() {
    this.ownerService.loadOwners().subscribe(
      (result) => {
        this.owners = result;
      },
      (error) => console.error(error)
    );
  }
}
