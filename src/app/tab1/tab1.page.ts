
import { Component , OnInit} from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  geolocation: any;
  latitude : number;
  longitude : number;
  i = 0;
  constructor() {}

  ngOnInit(){
    this.geolocation = new Geolocation;
    this.GetPostion();
  }

  GetPostion(){
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp);
      }).catch((error) => {
        console.log('Error getting location', error);
      });
      
      let watch = this.geolocation.watchPosition();
      watch.subscribe((data) => {
      this.latitude=data["coords"].latitude;
      this.longitude=data["coords"].longitude;
      console.log(this.i+"|Latitude :"+this.latitude+",Latitude :"+this.longitude);
      this.i++;
      });
  }

}
