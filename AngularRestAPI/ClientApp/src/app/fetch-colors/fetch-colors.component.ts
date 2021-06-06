import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-colors',
  styles: [],
  templateUrl: './fetch-colors.component.html',
  
})

export class FetchColorsComponent {
  public colors: ColorDetails[];
  public found_colorName: string;
  public found_colorHex: string;
  public origin_colorHex: string;
  public hex: "010101";
  public value: '';
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
    this.http.get<ColorDetails[]>(this.baseUrl + 'Color/ClosestColorNameByHex/'+this.value).subscribe(result => {
      this.found_colorName = "Found color name:" + result[1].name + "  Distance:" + result[1].distance;
      this.found_colorHex = result[1].style;
      this.origin_colorHex = result[0].style;
    }, error => console.error(error));
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
