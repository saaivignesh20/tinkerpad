import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  imports: [MatButtonModule, CdkTextareaAutosize, MatIcon],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
