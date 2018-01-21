import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {
  private altBackground = false;

  setBackground(isAlt: boolean): void {
    this.altBackground = isAlt;
  }

  isAltBackground(): boolean {
    return this.altBackground;
  }

  toggleBackground(): void {
    this.altBackground = !this.altBackground;
  }
}