import { Component, OnInit} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm = this.formbuilder.group({
    name: ['', Validators.required],
    email: [''],
    message: ['']
  });

  constructor(private formbuilder: FormBuilder) {

   }

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.contactForm.value);
  }
  get name() { return this.contactForm.get('name'); }

}
