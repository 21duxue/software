import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommunityPage } from '../community/community';
import { ChoosePage } from '../choose/choose';
import { ContactPage } from '../contact/contact';

/**
 * Generated class for the CameraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  edit(){
    this.navCtrl.push(ContactPage);
  }
  goChoose(){
    this.navCtrl.push(ChoosePage);
  }
  chengGong(){
    this.navCtrl.push(CommunityPage);
  }
}
