import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imgUrl!: string;
  snapped!: boolean;
  labelButtonSnap!: string;

  ngOnInit(): void {
    this.title = 'Arthur';
    this.description = 'My friend';
    this.createdDate = new Date();
    this.snaps = 6;
    this.imgUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
    this.labelButtonSnap = 'Oh snap!';
  }

  onClickSnap() {
    if (this.labelButtonSnap === 'Oh snap!'){
      this.labelButtonSnap = 'Oops, unSnap!';
      this.snaps++;
    }
    else {
      this.labelButtonSnap = 'Oh snap!';
      this.snaps--;
    }
  }
}
