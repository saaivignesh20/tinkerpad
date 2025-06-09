import { Component, input } from '@angular/core';
import { Message } from '../../common/interfaces';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'tp-message',
  imports: [TitleCasePipe],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent {
  readonly message = input.required<Message>();
}
