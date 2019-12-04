import { Component, OnInit } from '@angular/core';
import { LiffService } from 'src/app/service/liff/liff.service';
import { UserService } from 'src/app/service/user/user.service';
import { MatSnackBar } from '@angular/material';
declare let JOB: any;
declare let VConsole: any;
@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit {
  showCount = 0;
  // tslint:disable-next-line: variable-name
  pattern_StudentId = /^5\d{7}$/;
  // tslint:disable-next-line: variable-name
  pattern_Phone = /^09\d{8}$/;

  constructor(
    public liffService: LiffService,
    public userService: UserService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.JOBinit();
    this.getUserDataAndInit();
  }

  getUserDataAndInit() {
    console.log('getUserDataAndInit');
    this.liffService.LIFFinit().then((result) => {
      console.log('LIFFinit ok');
      this.userService.userDataGet();
    }).catch((err) => {
      console.log('LIFFinit GG', err);
    });
    setTimeout(() => {
      console.log('his.userService.schoolUserProfile', this.userService.schoolUserProfile);
      if (this.userService.schoolUserProfile === undefined) {
        this.getUserDataAndInit();
      }
    }, 500);
  }

  showVConsole() {
    this.showCount++;
    if (this.showCount === 5) {
      const vConsole = new VConsole();
    }
    if (this.showCount > 7) {
      this.getUserDataAndInit();
    }
  }

  JOBinit() {
    JOB.Init();
    JOB.SetImageCallback((result) => {
      console.log('SetImageCallback', result);
      if (result.length !== 1 || !this.pattern_StudentId.test(result[0].Value)) {
        this.snackBar.open('解析失敗請重新拍攝或是選取照片！', '', { duration: 2000 });
      } else {
        this.userService.schoolUserProfile.studentId = result[0].Value;
      }
    });
  }

  imgSelect(eventFile) {
    const files = eventFile.target.files;
    if (files && files.length > 0) {
      const fileReader = new FileReader();
      fileReader.onload = (event) => {
        JOB.DecodeImage(fileReader.result);
      };
      fileReader.readAsDataURL(files[0]);
    }
  }

}
