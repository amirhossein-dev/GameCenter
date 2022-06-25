import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { Game } from '../models';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit, OnDestroy {
  gameRating = 0;
  gameId!: string;
  game!: Game;
  gameSub$!: Subscription;
  routeSub$!: Subscription;
  constructor(
    private activatedRoute: ActivatedRoute,
    private httpServie: HttpService
  ) {}

  ngOnInit(): void {
    this.routeSub$ = this.activatedRoute.params.subscribe((params: Params) => {
      this.gameId = params['id'];
      this.getGameDetails(this.gameId);
    });
  }

  getGameDetails(id: string): void {
    this.gameSub$ = this.httpServie
      .getGameDetails(id)
      .subscribe((gameRes: Game) => {
        this.game = gameRes;

        setTimeout(() => {
          this.gameRating = +this.game!.metacritic;
        }, 1000);
      });
  }

  getColor(value: number): string {
    if (value > 75) {
      return '#5ee432';
    } else if (value > 50) {
      return '#fffa50';
    } else if (value > 30) {
      return 'f7aa38';
    } else {
      return '#ef4655';
    }
  }

  ngOnDestroy(): void {
    this.gameSub$.unsubscribe();
    this.routeSub$.unsubscribe();
  }
}
