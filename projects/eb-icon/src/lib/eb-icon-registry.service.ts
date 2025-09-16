// projects/eb-icon/src/lib/eb-icon-registry.service.ts
import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ICONS } from './icons';

@Injectable({ providedIn: 'root' })
export class EbIconRegistryService {
  private icons = new Map<string, SafeHtml>();

  constructor(private sanitizer: DomSanitizer) {
    this.loadDefaultIcons();
  }

  private loadDefaultIcons() {
    Object.entries(ICONS).forEach(([name, svg]) => {
      this.addIcon(name, svg);
    });
  }

  addIcon(name: string, svg: string) {
    this.icons.set(name, this.sanitizer.bypassSecurityTrustHtml(svg));
  }

  getIcon(name: string): SafeHtml | null {
    return this.icons.get(name) || null;
  }
}
