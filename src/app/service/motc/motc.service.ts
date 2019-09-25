import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MotcService {
  citys = [
    '基隆市',
    '臺北市',
    '新北市',
    '宜蘭縣',
    '桃園市',
    '新竹市',
    '新竹縣',
    '苗栗縣',
    '臺中市',
    '彰化縣',
    '南投縣',
    '雲林縣',
    '嘉義市',
    '嘉義縣',
    '臺南市',
    '高雄市',
    '屏東縣',
    '花蓮縣',
    '臺東縣'];
  constructor(
    private http: HttpClient,
  ) { }

  RailTRAStation(city: string) {
    // tslint:disable-next-line: max-line-length
    return this.http.get(`https://ptx.transportdata.tw/MOTC/v2/Rail/TRA/Station?$filter=substring(StationAddress%2C0%2C3)%20eq%20'${city}'&$format=JSON`);
  }
}
