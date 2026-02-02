import { Routes } from '@angular/router';
import { NoteList } from './note-list/note-list';
import { EditNote } from './edit-note/edit-note';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'my-notes',
        pathMatch: 'full'
    },
    {
        path: 'my-notes',
        component: NoteList
    },
    {
        path: 'my-notes/:id/edit',
        component: EditNote
    }
];
