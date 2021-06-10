import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Owner } from './owner.models';
import { OwnerService } from './owner.service';

@Component({
  selector: 'app-ownerDetails',
  templateUrl: './ownerDetails.component.html'
})
export class OwnerDetailsComponent implements OnInit {

  public owner: Owner = <Owner>{};
  public id: string;

  constructor(private ownerService: OwnerService, private router: ActivatedRoute, private routers: Router) { }

  ngOnInit() {
    this.router.params.subscribe(param => {
      this.id = param['id'];
      this.loadOwner();
    });
  }

  loadOwner() {
    this.ownerService.loadOwnerById(this.id).subscribe(result => {
      this.owner = result;
    }, error => console.error(error));
  }
}
