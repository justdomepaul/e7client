import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
declare let liff: any;
@Injectable({
  providedIn: 'root'
})
export class LiffService {
  profile: LIFFUserProfile;
  profileDemo: LIFFUserProfile = {
    userId: 'U8284c94aee9cabea9c96cfa37123a6b3',
    displayName: '劉振維(Mark Liu)',
    pictureUrl: 'https://profile.line-scdn.net/0htukRqtJpK1pWKwRa2BxUDWpuJTchBS0SLkszbHcpIjh-SGoJOEptb3p5fG4sEm5fbUllOXsuJmx6',
    statusMessage: '海略商貿科技- 負責人',
  };
  constructor(
    private snackBar: MatSnackBar,
  ) { }

  liffInit(): Promise<any> {
    return new Promise<LIFFUserProfile>(resolve => {
      if (location.hostname === 'localhost') {
        this.profile = this.profileDemo;
        resolve(this.profileDemo);
        return;
      }
      liff.init(data => {
        resolve(liff.getProfile());
      }, err => {
        this.snackBar.open('載入失敗' + err.code, '', { duration: 2000 });
      });
    })
      .then((profile) => {
        this.profile = profile;
      });
  }
}
