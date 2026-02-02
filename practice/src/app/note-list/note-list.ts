import { Component, inject, OnInit, signal } from '@angular/core';
import { NoteService } from '../note-service';
import { Note } from '../note';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-note-list',
  imports: [DatePipe, RouterLink],
  templateUrl: './note-list.html',
  styleUrl: './note-list.css',
})
export class NoteList implements OnInit{
  
  noteService = inject(NoteService);

  notes = signal<Note[]>([]);

  getTitle(title: string){
    let result = title;

    if(title.length > 10){
      result = title.substring(0, 7) + "...";
    }

    return result;
  }

  ngOnInit(): void {
    this.noteService.getNotes().subscribe(c => {
      this.notes.set(c);
    })
  }

}
