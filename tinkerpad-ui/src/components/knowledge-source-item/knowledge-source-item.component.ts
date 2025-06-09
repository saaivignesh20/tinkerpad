import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { KnowledgeSource } from '../../common/interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tp-knowledge-source-item',
  imports: [CommonModule, MatIconModule, MatRippleModule],
  templateUrl: './knowledge-source-item.component.html',
  styleUrl: './knowledge-source-item.component.scss'
})
export class KnowledgeSourceItemComponent {
  /** Input for the Knowledge Source data */
  readonly item = input.required<KnowledgeSource>();
}
