import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-colors',
  styles: [],
  templateUrl: './fetch-colors.component.html'
})

export class FetchColorsComponent {
  public colors: ColorDetails[];
  public hex: "010101";
  
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string)
  {
    this.Fechdata();
  }
  

  public async Fechdata()
  {
    this.http.get<ColorDetails[]>(this.baseUrl+'Color/allcolordata').subscribe(result => {
      this.colors = result;
    }, error => console.error(error));
  }
  UpdateInput() {

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
