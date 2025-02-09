import { AsyncPipe } from '@angular/common';
import { AfterViewInit, Component, ElementRef, inject, Renderer2 } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  imports: [ReactiveFormsModule, AsyncPipe],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements AfterViewInit {
  private readonly elementRef = inject(ElementRef);
  private readonly renderer = inject(Renderer2);

  name = new FormControl('karan', {updateOn: 'blur', nonNullable: true});

  ngAfterViewInit() {
    const buttonElement = this.elementRef.nativeElement.querySelector('button');
    if (buttonElement) {
      this.renderer.setStyle(buttonElement, 'color', 'blue');
    }
  }

}
