import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  faceSnap!: FaceSnap;
  labelButtonSnap!: string;
  
  constructor(private faceSnapService: FaceSnapsService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.labelButtonSnap = 'Oh snap!';
    const snapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getFaceSnapById(snapId);
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
