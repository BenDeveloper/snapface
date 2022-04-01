import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
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
  
  constructor(private faceSnapService: FaceSnapsService,
              private router : Router) {}

  ngOnInit(): void {
    this.labelButtonSnap = 'Oh snap!';
  }

  onViewFaceSnap() {
    // See Template literals (Template strings) `string $expression string`
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
}
}
