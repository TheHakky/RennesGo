import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinesComponent } from './lines.component';
import { BrowserModule, By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule, MatIconModule, MatBadgeModule, MatTabsModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { Network } from '../model/Network';
import { User } from '../model/User';
import { DebugElement } from '@angular/core';

describe('LinesComponent', () => {
  let component: LinesComponent;
  let fixture: ComponentFixture<LinesComponent>;
  let starEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinesComponent ],
      imports: [
        BrowserModule,
        HttpClientModule,
        MatGridListModule,
        MatIconModule,
        MatBadgeModule,
        MatTabsModule,
        NoopAnimationsModule,
        AngularFontAwesomeModule
      ],
      providers: [Network, User]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinesComponent);
    component = fixture.componentInstance;

    starEl = fixture.debugElement.query(By.css('div'));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
