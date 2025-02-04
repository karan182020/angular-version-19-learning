import { booleanAttribute, Component, Input } from '@angular/core';


@Component({
  selector: 'app-rect',
  imports: [],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.scss'
})
export class RectComponent {

  @Input({transform: toNumber}) width!: number;

  @Input({transform: booleanAttribute}) disabled: boolean = false;

}

function toNumber(value: string | number) {
  return typeof value === 'number' ? value : parseInt(value);
}
