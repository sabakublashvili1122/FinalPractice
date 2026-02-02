import { Routes } from '@angular/router';
import { NoteList } from './note-list/note-list';

export const routes: Routes = [
    {
        path: '',
        redirectTo: "my-notes",
        pathMatch: "full"
    },
    {
        path: "my-notes",
        component: NoteList
    }
];
