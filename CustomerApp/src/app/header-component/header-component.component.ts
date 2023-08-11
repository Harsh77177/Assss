import { Component } from '@angular/core';
@Component({
  selector: 'app-header',
  template: `
<nav>
<div class="navbar">
<div class="app-title">
          CustomerApp
</div>
</div>
</nav>
  `,
  styles: [`
    .navbar {
      background-color: #333;
      color: white;
      padding: 10px;
    }
    .app-title {
      font-size: 24px;
      font-weight: bold;
    }
  `]
})
export class HeaderComponent {}