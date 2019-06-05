import { isPlatformBrowser } from '@angular/common';
import { Directive, HostBinding, Inject, Input, OnChanges, PLATFORM_ID } from '@angular/core';

@Directive({
// tslint:disable-next-line: directive-selector
  selector: 'a[href]'
})
export class ExternalLinkDirective implements OnChanges {

  @HostBinding('attr.rel') relAttr = '';
  @HostBinding('attr.target') targetAttr = '';
  @HostBinding('attr.href') hrefAttr = '';
  @Input() href: string;

  constructor(@Inject(PLATFORM_ID) private platformId: string) {}

  ngOnChanges() {

    this.hrefAttr = this.href;

    if (this.isLinkExternal()) {
      this.relAttr = 'noopener';
      this.targetAttr = '_blank';
    }
  }

  private isLinkExternal() {
    return isPlatformBrowser(this.platformId) && !this.href && !this.href.includes(location.hostname);
  }
}
