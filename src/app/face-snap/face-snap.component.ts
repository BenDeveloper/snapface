import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  labelButtonSnap!: string;
  
  constructor(private faceSnapService: FaceSnapsService) {}

  ngOnInit(): void {
    this.labelButtonSnap = 'Oh snap!';
  }

  onClickSnap() {
    if (this.labelButtonSnap === 'Oh snap!'){
      this.labelButtonSnap = 'Oops, unSnap!';
      this.faceSnapService.snap(this.faceSnap.id, 'snap');
    }
    else {
      this.labelButtonSnap = 'Oh snap!';
      this.faceSnapService.snap(this.faceSnap.id, 'unsnap');
    }
  }
}
