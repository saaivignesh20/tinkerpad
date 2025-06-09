import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeSourceItemComponent } from './knowledge-source-item.component';

describe('KnowledgeSourceItemComponent', () => {
  let component: KnowledgeSourceItemComponent;
  let fixture: ComponentFixture<KnowledgeSourceItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KnowledgeSourceItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KnowledgeSourceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
