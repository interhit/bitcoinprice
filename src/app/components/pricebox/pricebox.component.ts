import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ViewEncapsulation} from '@angular/core';
import { Globals } from '../../app.globals';

@Component({
  selector: 'app-pricebox',
  templateUrl: './pricebox.component.html',
  styleUrls: ['./pricebox.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PriceboxComponent implements OnInit {

  private bitcoin: Object;
  result: Object;
  constructor(private http: HttpClient, private globals: Globals) {
    this.bitcoin = Object;
    console.log(1, this.bitcoin);

    // console.log(globals.currency);
    this.http.get('https://min-api.cryptocompare.com/data/pricehistorical?ts='+Date.now()+'&fsym=BTC&tsyms='+globals.currency).subscribe(res => {
        this.result = res;
        this.bitcoin: {
          value: String;
        };
        console.log(Object.keys(this.result)[0]);
        console.log(res.BTC[globals.currency]);
        this.bitcoin.value = parseInt(res.BTC[globals.currency]).toLocaleString(undefined, {minimumFractionDigits: 2});
    }
  }
}

}
