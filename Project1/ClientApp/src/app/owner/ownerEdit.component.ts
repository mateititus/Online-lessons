import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Owner } from './owner.models';
import { OwnerService } from './owner.service';

@Component({
  selector: 'app-ownerEdit',
  templateUrl: './ownerEdit.component.html'
})
export class OwnerEditComponent implements OnInit {

  public owner: Owner = <Owner>{};
  public id: string;

  ngOnInit() {
    this.routers.params.subscribe(param => {
      this.id = param['id'];
      this.loadOwner();
    });
  }

  constructor(private ownerService: OwnerService, private routers: ActivatedRoute, private router: Router) { }

  loadOwner() {
    this.ownerService.loadOwnerById(this.id).subscribe(result => {
      this.owner = result;
    }, error => console.error(error));
  }
  public saveOwner() {
    this.ownerService.updateOwner(this.owner.id, this.owner).subscribe(result => {
      this.router.navigateByUrl("/owners");
    }, error => console.error(error));
  }
}
