import { Component, ElementRef, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrimDirective } from '@shared/utils';

@Component({
  template: ` <input #input type="text" appTrim /> `,
})
export class HostComponent {
  @ViewChild('input') public input!: ElementRef<HTMLInputElement>;
}

describe(TrimDirective.name, () => {
  let fixture: ComponentFixture<HostComponent>;
  let input: ElementRef<HTMLInputElement>;
  let directive: TrimDirective;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HostComponent],
      imports: [TrimDirective],
      providers: [],
    }).compileComponents();

    fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();

    input = fixture.componentInstance.input;
    directive = new TrimDirective(input);
  });
  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should trim input value', () => {
    const inputEl: HTMLInputElement = input.nativeElement;
    const testText = ' test ';
    const expectedTestResult: number = testText.trim().length;

    inputEl.focus();

    inputEl.value = testText;

    inputEl.blur();

    expect(inputEl.value.length).toEqual(expectedTestResult);
  });
});
