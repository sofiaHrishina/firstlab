import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-file',
  templateUrl: './file.page.html',
  styleUrls: ['./file.page.scss'],
})
export class FilePage implements OnInit {
  data: any = [];
  data_cafedra: any = [];
  showDetails: boolean[] = new Array(1000).fill(false);
  dataUrl = 'https://api.jsonbin.io/v3/b/6431b5eeebd26539d0a70f0b';
  loading: any;
  b: number = 0;

  constructor(public loadingController: LoadingController) { }

  ngOnInit() { }

  async load() {
    this.loading = await this.loadingController.create({
      spinner: 'bubbles',
      message: 'Loading...'
    });
    await this.loading.present();

    fetch(this.dataUrl).then(res => res.json())
      .then(json => {
        this.data = json;
        this.data = this.data.record;
        let i = 0;

        while (this.data[i] != undefined) {
          this.data_cafedra.push(this.data[i][0]);
          i++;
        }

        this.getBigger(this.b);
        this.loading.dismiss();
      });
  }

  getBigger(b: any) {
    this.b = parseFloat(b);
    for (let i = 0; i < this.data_cafedra.length; i++) {
      if (this.b < this.data_cafedra[i]['number_lecturer']) {
        this.b = this.data_cafedra[i]['number_lecturer'];
      }
    }
  }

  getRedcolor(a: any, b: any) {
    this.b= parseFloat(b);
    return a < b ? 'red' : '';
  }

  toggleDetails(i: number) {
    this.showDetails[i] = !this.showDetails[i];
  }
}