import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ng-new-19';

  copyTextClipboard(): void {
    const text = 'Hello, world!';

    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log('Text copied to clipboard');
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
      });
  }

  copyImageClipboard(): void {
    const imageUrl = 'https://picsum.photos/500/200';

    fetch(imageUrl)
      .then((response) => response.blob())
      .then((blob) => {
        navigator.clipboard.write([
          new ClipboardItem({
            'image/jpeg': blob,
          }),
        ]);
      })
      .catch((err) => {
        console.error('Failed to copy image: ', err);
      });
  }
}
