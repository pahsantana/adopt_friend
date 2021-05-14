import { DataFormService } from './../../../data-form/data-form.service';
import { Component, OnInit } from '@angular/core';
import { DataForm } from 'src/app/data-form/data-form.model';

@Component({
  selector: 'app-search-pet',
  templateUrl: './search-pet.component.html',
  styleUrls: ['./search-pet.component.less']
})
export class SearchPetComponent implements OnInit {

  size = '';
  dataForms?: DataForm[];

  constructor(private dataForm: DataForm, private dataFormService: DataFormService) { }


  ngOnInit(): void {
  }

  searchSize(): void {
    this.dataFormService.findBySize(this.size)
      .subscribe(
        (data) => {
          this.dataForms = data;
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
  }

}
