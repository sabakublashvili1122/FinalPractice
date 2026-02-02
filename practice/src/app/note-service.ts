import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Note } from './note';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  http = inject(HttpClient);

  apiUrl = 'http://localhost:3000/notes';

  getNotes(){
    return this.http.get<Note[]>(`${this.apiUrl}/notes`);
  }

  getNote(id: string){
    return this.http.get<Note>(`${this.apiUrl}/notes/${id}`);
  }

  editNote(note: Note){
    return this.http.put(`${this.apiUrl}/notes/${note.id}`, note);
  }
}
