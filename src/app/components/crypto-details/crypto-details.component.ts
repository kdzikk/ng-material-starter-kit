import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CryptoModel } from '../../models/crypto.model';
import { CryptosService } from '../../services/cryptos.service';

@Component({
  selector: 'app-crypto-details',
  templateUrl: './crypto-details.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CryptoDetailsComponent {
  readonly list$: Observable<CryptoModel[]> = this._cryptosService.getAll();


  private _detailsSubject: Subject<CryptoModel> = new Subject<CryptoModel>();
  public details$: Observable<CryptoModel> = this._detailsSubject.asObservable();

  constructor(private _cryptosService: CryptosService) {
  }

  selectCrypto(crypto: CryptoModel): void {
    this._detailsSubject.next(crypto);
  }
}
