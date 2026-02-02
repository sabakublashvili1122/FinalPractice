import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteService } from '../note-service';
import { Note } from '../note';

@Component({
  selector: 'app-edit-note',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-note.html',
  styleUrl: './edit-note.css',
})
export class EditNote implements OnInit{

  router = inject(Router);
  activeRoute = inject(ActivatedRoute);
  noteService = inject(NoteService);

  originalNote?: Note = undefined;

  form = new FormGroup({
    title: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required),
    isImportant: new FormControl(false)
  })

  onCancel(){
    this.router.navigate(['my-notes']);
  }

  onSave(){
    let value = this.form.value;

    let updatedNote = {
      id: this.originalNote?.id!,
      title: value.title!,
      content: value.content!,
      isImportant: value.isImportant!,
      createDate: this.originalNote?.createDate!
    }

    this.noteService.editNote(updatedNote).subscribe(c => {
      this.router.navigate(['my-notes']);
    });

  }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(p => {
      let id = p.get('id');

      this.noteService.getNote(id!).subscribe(c => {
        this.form.setValue({
          title: c.title,
          content: c.content,
          isImportant: c.isImportant
        });

        this.originalNote = c;
      });
    });
  }
}
