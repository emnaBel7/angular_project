import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'i18n-app';

  // Placeholder for the language switching logic
  switchLanguage(language: string) {
    console.log(`Switching to language: ${language}`);
  }
}
