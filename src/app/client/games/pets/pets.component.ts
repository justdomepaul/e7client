import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ScratchCard, SCRATCH_TYPE } from 'scratchcard-js';
import { HttpClient } from '@angular/common/http';

interface UserPet {
  name: string;
  petId: number;
  ok: number;
}

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit, AfterViewInit {

  petsList = [
    {
      image: 'https://image.flaticon.com/icons/png/512/616/616554.png',
      name: '狗狗'
    },
    {
      image: 'https://image.flaticon.com/icons/png/512/1530/1530857.png',
      name: '貓貓',
    },
    {
      image: '',
      name: '',
    }
  ];

  userPet: UserPet = {
    name: '憨狗',
    petId: 0,
    ok: 1,
  };

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    this.createNewScratchCard();

  }

  createNewScratchCard() {


    setTimeout(() => {
      this.http.get('https://yesno.wtf/api').subscribe(
        (v: any) => {
          console.log('yesno', v);

        },
      );

      const scContainer = document.getElementById('js--sc--container');
      const scInfos = document.querySelector('.sc__infos');
      const sc = new ScratchCard('#js--sc--container', {
        scratchType: SCRATCH_TYPE.CIRCLE,
        containerWidth: scContainer.offsetWidth,
        containerHeight: 200,
        // imageForwardSrc: 'assets/images/scratchcard.jpg',
        imageForwardSrc: 'assets/images/scratchcard/scratchcardFANSbeeA.png',
        imageBackgroundSrc: 'assets/images/scratchcard/scratchcardFANSbeeB.png',
        // imageBackgroundSrc: v.image,
        // htmlBackground: '<p>666 hihi</p>',
        clearZoneRadius: 20,
        nPoints: 0,
        pointSize: 0,
        callback: () => {
          alert('刮到了 口頭獎勵-你好棒 一次');
          // window.location.reload();
        }
      });
      // Init
      sc.init().then(() => {
        sc.canvas.addEventListener('scratch.move', () => {
          const percent = sc.getPercent().toFixed(0);
          scInfos.innerHTML = percent + '%';
          console.log(percent);
        });
      }).catch((error) => {
        // image not loaded
        alert(error.message);
      });

    }, 0);

  }


}
