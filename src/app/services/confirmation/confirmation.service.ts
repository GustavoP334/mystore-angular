import { Injectable, signal } from '@angular/core';
import { Confirmation } from '../../models/confirmation.model';

@Injectable({
  providedIn: 'root',
})
export class ConfirmationService {
    private _confirmation = signal<Confirmation | null>(null);
    confirmation = this._confirmation.asReadonly();

    constructor() {}

    setConfirmation(data: Confirmation): void {
        this._confirmation.set(data);
    }
}
