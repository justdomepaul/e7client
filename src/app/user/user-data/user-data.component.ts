import { Component, OnInit, AfterViewInit } from '@angular/core';
import { LiffService } from 'src/app/service/liff/liff.service';
import { UserService } from 'src/app/service/user/user.service';
import { MatSnackBar } from '@angular/material';
declare let JOB: any;
@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit, AfterViewInit {

  // tslint:disable-next-line: variable-name
  pattern_StudentId = /^5\d{7}$/;
  // tslint:disable-next-line: variable-name
  pattern_Phone = /^09\d{8}$/;

  constructor(
    public liffService: LiffService,
    public userService: UserService,
    private snackBar: MatSnackBar,
  ) { }

  ngAfterViewInit() {
    console.log('UserDataComponent ngAfterViewChecked ok');
    this.ngOnInit();
  }

  ngOnInit() {
    console.log('UserDataComponent ngOnInit ok');
    this.liffService.LIFFinit().then((result) => {
      console.log('UserDataComponent LIFFinit ok');
      this.userService.userDataGet();
    }).catch((err) => {
      console.log('UserDataComponent LIFFinit GG', err);
    });
    this.JOBinit();
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
