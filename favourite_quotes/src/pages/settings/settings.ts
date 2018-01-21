import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Toggle } from 'ionic-angular/components/toggle/toggle';
import { SettingsService } from '../../services/settings.service';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  constructor(private settingsService : SettingsService) {
    
  }

  onToggle(event: Toggle): void {
    this.settingsService.toggleBackground();
  }

  checkAltBackground(): boolean {
    return this.settingsService.isAltBackground();
  }
}
