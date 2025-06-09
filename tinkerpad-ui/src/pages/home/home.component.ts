import { Component } from '@angular/core';
import { Message, KnowledgeSource } from '../../common/interfaces';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';

@Component({
  selector: 'tp-home',
  imports: [CommonModule, MatButtonModule, FormsModule, MatRippleModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  /** Conversations List for Testing */
  protected readonly conversationItems: ConversationItem[] = [
    {
      id: 'a3f2e40d-2c53-4d39-813b-18808d4e13cb',
      emoji: '📚',
      title: 'Career',
      timestamp: new Date(),
      sourceCount: 2
    },
    {
      id: '94b9773d-d2cc-443e-9ab3-d03420ee7292',
      emoji: '🎓',
      title: 'Study',
      timestamp: new Date(),
      sourceCount: 2
    },
    {
      id: '0d0cf94f-fcf5-49b3-8ed5-381a1d20884a',
      emoji: '🖥️',
      title: 'Tech Help',
      timestamp: new Date(),
      sourceCount: 2
    },
    {
      id: 'd5e44ed9-7f0f-4ae2-bbe3-50573870db30',
      emoji: '🎵',
      title: 'Music Notes',
      timestamp: new Date(),
      sourceCount: 2
    },
    {
      id: '45709f5f-bd75-4609-9a44-4edb90ec3b7d',
      emoji: '⚽',
      title: 'Football Rules',
      timestamp: new Date(),
      sourceCount: 2
    },
    {
      id: '07a7a670-bb9b-4b40-9943-2cdb8f774d93',
      emoji: '🚀',
      title: 'Project Ideas',
      timestamp: new Date(),
      sourceCount: 2
    },
    {
      id: '55fc43b3-77ae-42e6-b0b6-9e0cd006861c',
      emoji: '🤫',
      title: 'Secret Chat',
      timestamp: new Date(),
      sourceCount: 2
    },
    {
      id: '40f76b40-75a2-4c88-b922-58aaad101354',
      emoji: '💰',
      title: 'Personal Finances',
      timestamp: new Date(),
      sourceCount: 2
    }
  ];
}

export interface ConversationItem {
  id: string;
  emoji: string;
  title: string;
  timestamp: Date;
  sourceCount: number;
}
