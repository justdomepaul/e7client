import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { LiffService } from '../liff/liff.service';
import { MatSnackBar } from '@angular/material';

export interface SchoolUserProfile extends LIFFUserProfile {
  phone: string;
  studentId: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  schoolUserProfile: SchoolUserProfile;
  constructor(
    private db: AngularFirestore,
    private liffService: LiffService,
    private snackBar: MatSnackBar,
  ) { }

  userDataGet() {
    const profile: LIFFUserProfile = this.liffService.profile;
    const channelID = this.liffService.channelID;
    this.db.collection(`/linebot/${channelID}/users`).doc(profile.userId).get().subscribe(
      (v) => {
        console.log('v', v);
        if (v.exists === false) {
          const schoolUserProfile: SchoolUserProfile = {
            ...profile,
            phone: '',
            studentId: '',
            name: profile.displayName,
          };
          this.db.collection('admin').doc(profile.userId).set(schoolUserProfile);
        } else {
          const schoolUserProfile: SchoolUserProfile = v.data() as SchoolUserProfile;
          this.schoolUserProfile = schoolUserProfile;
        }
      }
    );
  }

  userDataSave() {
    const profile: LIFFUserProfile = this.liffService.profile;
    const channelID = this.liffService.channelID;
    const min = 50801001;
    const max = 50812057;
    if (Number(this.schoolUserProfile.studentId) < min || Number(this.schoolUserProfile.studentId) > max) {
      this.snackBar.open('學號超出範圍(' + min + '~' + max + ')', '', { duration: 2000 });
      return;
    }
    this.db.collection(`/linebot/${channelID}/users`).doc(profile.userId).set(this.schoolUserProfile).then((result) => {
      this.snackBar.open('更新成功', '', { duration: 2000 }).afterDismissed().subscribe(
        (v) => { this.liffService.LIFFcloseWindow(); }
      );
    }).catch((err) => {

    });
  }
}
