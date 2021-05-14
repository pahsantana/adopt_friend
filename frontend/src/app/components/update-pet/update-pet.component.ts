import { Router, ActivatedRoute } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { TokenStorageService } from './../../_services/token-storage.service';
import { DataFormService } from './../../data-form/data-form.service';
import { Component, OnInit } from '@angular/core';
import { DataForm } from 'src/app/data-form/data-form.model';

@Component({
  selector: 'app-update-pet',
  templateUrl: './update-pet.component.html',
  styleUrls: ['./update-pet.component.less']
})
export class UpdatePetComponent implements OnInit {

  dataForm: DataForm;

  isLoggedIn = false;
  currentUser: any;
  decoded: any;
  pet = new DataForm()
  user: any;

  constructor(private dataFormService: DataFormService, private router: Router, private route: ActivatedRoute, private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    if (this.tokenStorageService.getToken()) {
      this.isLoggedIn = true;
      this.currentUser = this.tokenStorageService.getUser();
      var tokenDec = this.currentUser.token
      this.decoded = jwt_decode(tokenDec);
      const id = this.route.snapshot.paramMap.get('id')
      this.dataFormService.readById(id).subscribe(dataForm => {
        this.dataForm = dataForm
      });
    }
    this.dataFormService.pet.subscribe(pet => {
      if (pet) {
        this.pet = pet;
        this.getUserById(pet.user_id);
        console.log(pet);
      }
    })
  }

  updatePet(): void {
    this.dataFormService.update(this.dataForm).subscribe(() => {
      this.router.navigate(["/pets"])
    })
  }

  deletePet(): void {
    this.dataFormService.delete(`${this.dataForm.id}`).subscribe(() => {
      this.dataFormService.showMessage('Pet excluído com sucesso');
      this.router.navigate(["/pets"]);
    })
  }


  getUserById(id: number): void {
    this.dataFormService.getUserById(id).subscribe(user => {
      this.user = user;
    })
  }
}
