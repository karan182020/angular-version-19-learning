import { AsyncPipe } from '@angular/common';
import { AfterViewInit, Component, ElementRef, inject, Renderer2, viewChild } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  imports: [ReactiveFormsModule, AsyncPipe],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements AfterViewInit {
  private readonly renderer = inject(Renderer2);

  resetButton = viewChild<ElementRef>('resetButton');
  valid = viewChild<ElementRef>('valid');

  name = new FormControl('karan', {updateOn: 'blur', nonNullable: true});

  ngAfterViewInit() {
    const button = this.resetButton();
    if (button) {
      this.renderer.setStyle(button.nativeElement, 'color', 'blue');
    }
    const valid = this.valid();
    if (valid) {
      this.renderer.setStyle(valid.nativeElement, 'color', 'orange');
    }
  }

}
