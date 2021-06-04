import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-colors',
styles: [],

  templateUrl: './fetch-colors.component.html'
})

export class FetchColorsComponent {
  public colors: ColorDetails[];
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string)
  {
    http.get<ColorDetails[]>(baseUrl + 'color/allcolordata').subscribe(result => {
      this.colors = result;
    }, error => console.error(error));
  }
  async Fechdata()
  {

  }

}

interface ColorDetails {
  name: string;
  red: number;
  green: number;
  blue: number;
  distance: number;
  style: string;
  hex: string;
}
