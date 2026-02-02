import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-note',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-note.html',
  styleUrl: './edit-note.css',
})
export class EditNote {

  form = new FormGroup({
    title: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required),
    isImportant: new FormControl(false)
  })
}
