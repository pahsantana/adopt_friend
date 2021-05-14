import { DataFormService } from './../../data-form/data-form.service';
import { Component, OnInit } from '@angular/core';
import { DataForm } from 'src/app/data-form/data-form.model';

@Component({
  selector: 'app-adocao',
  templateUrl: './adocao.component.html',
  styleUrls: ['./adocao.component.less']
})

export class AdocaoComponent implements OnInit {

  pet = new DataForm()
  user: any = { phone: '' , email:''};
  phone=`tel:${this.user.phone}`
  whatsapp = `https://api.whatsapp.com/send?phone=${this.user.phone}&text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20conhecer%20o%20pet%20anunciado`
  email=`mailto:${this.user.email}`


  constructor(private dataFormService: DataFormService) { }

  ngOnInit(): void {
    this.dataFormService.pet.subscribe(pet => {
      if (pet) {
        this.pet = pet;
        this.getUserById(pet.user_id);
      }
    })
  }

  getUserById(id: number): void {
    this.dataFormService.getUserById(id).subscribe(user => {
      this.user = user;
    })
  }

}
