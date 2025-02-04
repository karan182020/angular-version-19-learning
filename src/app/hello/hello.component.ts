import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { outputToObservable } from '@angular/core/rxjs-interop';
import { RectComponent } from '../rect/rect.component';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.scss',
  imports: [AsyncPipe, RectComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelloComponent {

  name = input<string>('world');

  greetingClicked = output<string>();

  greetingClicked$ = outputToObservable(this.greetingClicked);

  greeting = computed(() => 'Hello ' + this.name() + ' using signals');



}
