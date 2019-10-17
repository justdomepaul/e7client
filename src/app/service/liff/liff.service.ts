import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
declare let liff: any;
@Injectable({
  providedIn: 'root'
})
export class LiffService {
  liffId = '';
  profile: LIFFUserProfile;
  channelID = '';
  profileDemo: LIFFUserProfile = {
    userId: 'U8284c94aee9cabea9c96cfa37123a6b3',
    displayName: '劉振維(Mark Liu)',
    pictureUrl: 'https://profile.line-scdn.net/0htukRqtJpK1pWKwRa2BxUDWpuJTchBS0SLkszbHcpIjh-SGoJOEptb3p5fG4sEm5fbUllOXsuJmx6',
    statusMessage: '海略商貿科技- 負責人',
  };
  constructor(
    private snackBar: MatSnackBar,
  ) { }

  LIFFinit(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      if (location.hostname === 'localhost') {
        this.profile = this.profileDemo;
        resolve(true);
        return;
      }
      liff.init({ liffId: this.liffId }).then(() => {
        resolve(this.LIFFgetProfile());
      }).catch((err) => {
        this.snackBar.open('載入失敗' + err.code, '', { duration: 2000 });
        reject(false);
      });
    });
  }

  LIFFgetProfile(): Promise<true> {
    return new Promise((resolve, reject) => {
      liff.getProfile().then((profile: LIFFUserProfile) => {
        this.profile = profile;
        resolve(true);
      }).catch((err) => {
        console.log('getProfile error', err);
        reject(false);
      });
    });
  }

  LIFFcloseWindow() {
    if (location.hostname === 'localhost') {
      console.log('關閉LIFF');
      return;
    }
    liff.closeWindow();
  }
}
