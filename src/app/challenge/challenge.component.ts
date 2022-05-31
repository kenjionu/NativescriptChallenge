import { Component, OnInit } from '@angular/core'
import { TextField, Utils, Button, EventData } from '@nativescript/core'
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { Store} from '@ngxs/store';
import { Observable } from 'rxjs';
import { iTodo } from '../core/interface/todo-list';
import { AddTask } from '../store/todo.actions';

@Component({
  selector: 'ns-challenge',
  templateUrl: './challenge.component.html',
})
export class ChallengeComponent implements OnInit {
  todolist: Observable<iTodo[]> = new Observable<iTodo[]>();
  submitted = false;

  taskForm = this.fb.group({
    name: new FormControl(null, [Validators.required, Validators.minLength(3) ])
  })
  // items: Array<Item>

  constructor(private fb: FormBuilder,private readonly store: Store) {}

  ngOnInit(): void {
  }

  onReturnPress(args) {
    // returnPress event will be triggered when user submits a value
    const textField = args.object as TextField

    // Gets or sets the placeholder text.
    console.log(textField.hint)
    // Gets or sets the input text.
    console.log(textField.text)
    // Gets or sets the secure option (e.g. for passwords).
    console.log(textField.secure)
    // Gets or sets the secure without autofill for iOS 12+ (e.g. for passwords).
    console.log(textField.secureWithoutAutofill)
    // Gets or sets the soft keyboard type. Options: "datetime" | "phone" | "number" | "url" | "email"
    console.log(textField.keyboardType)
    // Gets or sets the soft keyboard return key flavor. Options: "done" | "next" | "go" | "search" | "send"
    console.log(textField.returnKeyType)
    // Gets or sets the autocapitalization type. Options: "none" | "words" | "sentences" | "allcharacters"
    console.log(textField.autocapitalizationType)
    // Gets or sets a value indicating when the text property will be updated.
    console.log(textField.updateTextTrigger)
    // Gets or sets whether the instance is editable.
    console.log(textField.editable)
    // Enables or disables autocorrection.
    console.log(textField.autocorrect)
    // Limits input to a certain number of characters.
    console.log(textField.maxLength)

    Utils.setTimeout(() => {
      textField.dismissSoftInput() // Hides the soft input method, usually a soft keyboard.
    }, 100)
  }

  onFocus(args) {
    // focus event will be triggered when the users enters the TextField
    const textField = args.object as TextField
  }

  onBlur(args) {
    // blur event will be triggered when the user leaves the TextField
    const textField = args.object as TextField
  }

  onTap(args: EventData) {
    const button = args.object as Button

  }
  addTask(): any{
    this.submitted = true;
    // if(name.length > 0 ){
    //   this.store.dispatch(new AddTask({name: name, completed: false, id: Math.random().toString()}))
    // }
    // this.taskForm.reset()


  }
}

