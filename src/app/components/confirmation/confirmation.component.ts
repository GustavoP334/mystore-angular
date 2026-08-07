import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Signal } from '@angular/core';
import { ConfirmationService } from '../../services/confirmation/confirmation.service';
import { Confirmation } from '../../models/confirmation.model';

@Component({
  selector: 'app-confirmation',
  imports: [RouterLink],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css',
})
export class ConfirmationComponent {
  confirmation: Signal<Confirmation | null>;

  constructor(public confirmationService: ConfirmationService) {
    this.confirmation = this.confirmationService.confirmation;
  }
}
