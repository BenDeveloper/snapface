import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  labelButtonSnap!: string;

  ngOnInit(): void {
    this.labelButtonSnap = 'Oh snap!';
  }

  onClickSnap() {
    if (this.labelButtonSnap === 'Oh snap!'){
      this.labelButtonSnap = 'Oops, unSnap!';
      this.faceSnap.snaps++;
    }
    else {
      this.labelButtonSnap = 'Oh snap!';
      this.faceSnap.snaps--;
    }
  }
}
