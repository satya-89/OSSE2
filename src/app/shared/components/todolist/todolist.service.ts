import { Injectable } from '@angular/core';

@Injectable()
export class TodoListService {

    private _todoList = [
        { text: 'Avoid asking “yes” and “no” questions.' },
        { text: 'Report to work on time.' },
        { text: 'Notice the body language of the people you are tutoring.' },
        { text: 'Listen carefully to what the student says.' },
        { text: 'Be ready to present information in various ways if needed.' },
        { text: 'Use simple language. Remember, there is a difference between understanding a topic and teaching it.' },
        { text: 'Ask a student to explain back to you the steps that were needed to solve a problem.    ' },
        { text: 'Actively teach study skills.' },
    ];

    getTodoList() {
        return this._todoList;
    }
}
