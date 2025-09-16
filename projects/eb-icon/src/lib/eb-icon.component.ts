// eb-icon.component.ts
import { Component, Input, OnChanges } from '@angular/core';
import { EbIconRegistryService } from './eb-icon-registry.service';
import { IconName } from './icons';

@Component({
  selector: 'eb-icon',
  template: `<span class="eb-icon" [innerHTML]="svg" [style.width.px]="size" [style.height.px]="size"></span>`,
  styles: [`
    .eb-icon {
      display: inline-block;
      line-height: 0;
    }
    .eb-icon svg {
      width: 1em;
      height: 1em;
      fill: currentColor;
    }
  `]
})
export class EbIconComponent implements OnChanges {
  @Input() name!: IconName;
  @Input() size: number = 24;
  svg: any;

  constructor(private iconRegistry: EbIconRegistryService) {}

  ngOnChanges() {
    this.svg = this.iconRegistry.getIcon(this.name);
  }
}
