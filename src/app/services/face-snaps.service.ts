import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root'
})

export class FaceSnapsService {

    faceSnaps : FaceSnap[] = [
      { 
        id : 1,
        title: 'Arthur', 
        description: 'king of Kamelott', 
        imageUrl: 'https://www.serieously.com/app/uploads/2021/08/sans-titre-25-20-1024x572.jpg', 
        snaps: 10, 
        createdDate: new Date,
        location: 'Kaamelott'
      },
      { 
        id : 2,
        title: 'Karadoc', 
        description: 'Fat is life', 
        imageUrl: 'https://c.tenor.com/f_cJgAsY-j4AAAAC/kaamelott-karadoc.gif', 
        snaps: 100, 
        createdDate: new Date 
      },
      { 
        id : 3,
        title: 'Perceval', 
        description: 'Knight', 
        imageUrl: 'https://fr.web.img3.acsta.net/newsv7/16/11/25/16/38/164818.jpg', 
        snaps: 90, 
        createdDate: new Date 
      }];
  
      getAllFaceSnaps(): FaceSnap[] {
          return this.faceSnaps;
      }

      getFaceSnapById(id: number) : FaceSnap {
        const facesnap = this.faceSnaps.find(x => x.id === id);
        
        if (facesnap){
            return facesnap;
        } else {
            throw new Error('FaceSnap not found');
        }
      }

      snap(id: number, snapType: 'snap' | 'unsnap') : void {
        const fs =  this.getFaceSnapById(id);
          snapType === 'snap' ? fs.snaps++ : fs.snaps--;
      }
}