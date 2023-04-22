import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent {
  constructor(private router: Router) {}

  navigateToAddEmployee(): void {
    this.router.navigate(['/employee'], { queryParams: { action: 'add' } });
  }
  navigateToAddEvent(): void{
    this.router.navigate(['/event'], { queryParams: { action: 'events' } });
  }

}