import '@material/web/all.js';
import '@material/web/dialog/dialog.js';
import { styles as typescaleStyles } from '@material/web/typography/md-typescale-styles.js';

document.adoptedStyleSheets.push(typescaleStyles.styleSheet);

window.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('md-filled-button');
  const dialog = document.querySelector('md-dialog');

  button.addEventListener('click', () => {
    dialog.show();
    setTimeout(() => {
      dialog.close();
    }, 15000); // Tutup dialog setelah 15 detik
  });
});
