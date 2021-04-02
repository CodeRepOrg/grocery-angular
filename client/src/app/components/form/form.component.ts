import { Component, OnInit } from '@angular/core';
import { FormControl,  FormGroup, } from '@angular/forms';
import { RequestService } from 'src/app/service/request.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  profileForm = new FormGroup({
    item: new FormControl(''),
    quantidade: new FormControl(''),
    obs: new FormControl(''),
    unidade: new FormControl (''),
    status: new FormControl (''),
    who: new FormControl ('')
  });

  unidade: any = ['kilo', 'packeges', 'un', 'gram']
  status: any = ['buy', 'in stock']
  who: any = ['Jeff', 'John', 'Anna', 'Peter', 'Mary']

  constructor(private service:RequestService) { }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    this.service.send(this.profileForm.value)
    .then(data => {
      console.log ("deu certo")
      this.service.card.emit(this.profileForm.value)
    })
    .catch (err => {
      console.log(err)
    })
  }

  
  ngOnInit() {
  }

}
