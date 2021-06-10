import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Owner } from './owner.models';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  constructor(private http: HttpClient,
    @Inject("BASE_URL") private baseUrl: string
  ) { }

  loadOwners() {
    return this.http.get<Owner[]>(this.baseUrl + 'api/owners');
  }

  loadOwnerById(id) {
    return this.http.get<Owner>(this.baseUrl + 'api/owners/' + id);
  }

   saveOwner(owner: Owner) {
   return this.http.post(this.baseUrl + 'api/owners', owner);
  }

  updateOwner(id, owner: Owner) {
    return this.http.put(this.baseUrl + 'api/owners/' + id, owner);
  }

  deleteOwner(owner: Owner) {
    return this.http.delete(this.baseUrl + 'api/owners/' + owner.id);
  }
}
