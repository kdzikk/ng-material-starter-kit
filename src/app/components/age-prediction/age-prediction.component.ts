import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Observable, switchMap} from 'rxjs';
import { AgePredictionModel } from '../../models/age-prediction.model';
import { AgePredictionService } from '../../services/age-prediction.service';

@Component({
  selector: 'app-age-prediction',
  templateUrl: './age-prediction.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgePredictionComponent {
  readonly details$: Observable<AgePredictionModel> = this._activatedRoute.params.pipe(
    switchMap(data => this._agePredictionService.getOne(data['name']))
  );

  constructor(private _activatedRoute: ActivatedRoute, private _agePredictionService: AgePredictionService) {
  }



}
