import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { KnowledgeSource, Message } from '../../common/interfaces';
import { MessageComponent } from '../../components/message/message.component';
import { KnowledgeSourceItemComponent } from '../../components/knowledge-source-item/knowledge-source-item.component';

/** Home Page Component */
@Component({
  selector: 'tp-conversation',
  imports: [
    CommonModule,
    MatButtonModule,
    CdkTextareaAutosize,
    MatIcon,
    FormsModule,
    MessageComponent,
    KnowledgeSourceItemComponent
  ],
  templateUrl: './conversation.component.html',
  styleUrl: './conversation.component.scss'
})
export class ConversationComponent {
  /** Array of Messages for Testing */
  protected readonly messages: Message[] = [
    {
      id: '1',
      author: 'user',
      content: 'Hello, how are you?',
      timestamp: new Date('2023-10-01T10:00:00Z')
    },
    {
      id: '2',
      author: 'assistant',
      content: 'I am fine, thank you! How can I assist you today?',
      timestamp: new Date('2023-10-01T10:01:00Z')
    },
    {
      id: '3',
      author: 'user',
      content: 'Can you tell me about Angular?',
      timestamp: new Date('2023-10-01T10:02:00Z')
    },
    {
      id: '4',
      author: 'assistant',
      content: 'Angular is a platform for building mobile and desktop web applications.',
      timestamp: new Date('2023-10-01T10:03:00Z')
    }
  ];

  /** Array of Knowledge Sources for Testing */
  protected readonly knowledgeSources: KnowledgeSource[] = [
    {
      id: '1',
      name: 'Angular Documentation',
      type: 'web',
      url: 'https://angular.io/docs'
    },
    {
      id: '2',
      name: 'Stack Overflow',
      type: 'web',
      url: 'https://stackoverflow.com/questions/tagged/angular'
    }
  ];

  protected userMessage = '';

  /**
   * Event Handler to handle enter key press for message field.
   * @param event Keyboard event
   */
  protected handleMessageKeyPress(event: KeyboardEvent): boolean {
    if (event.key === 'Enter' && !event.shiftKey) {
      this.sendUserMessage();
      return false;
    }
    return true;
  }

  /** Sends user message to server for a response from the LLM */
  protected sendUserMessage(): void {
    if (this.userMessage.trim().length > 0)
      this.messages.push({
        id: `${this.messages.length + 1}`,
        author: 'user',
        content: this.userMessage.replace(/\n/, '<br>'),
        timestamp: new Date()
      });
    this.userMessage = '';
  }
}
