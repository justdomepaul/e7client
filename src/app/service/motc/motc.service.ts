import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RailStationTimetable, RailStation, RailGeneralTimetable } from 'src/app/interface/rail';

@Injectable({
  providedIn: 'root'
})
export class MotcService {
  citys = [
    '基隆市',
    '臺北市',
    '新北市',
    '宜蘭縣',
    '桃園縣',
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
  defaultCity = '高雄市';
  defaultStationID = '1231';
  stationID = '';
  RailStations: RailStation[] = [];
  RailStationTimetablesRight: RailStationTimetable[] = [];
  RailStationTimetablesLeft: RailStationTimetable[] = [];
  RailGeneralTimetable: RailGeneralTimetable;
  constructor(
    private http: HttpClient,
  ) { }

  RailTRAStation(city: string) {
    // tslint:disable-next-line: max-line-length
    this.http.get<RailStation[]>(`https://ptx.transportdata.tw/MOTC/v2/Rail/TRA/Station?$filter=substring(StationAddress%2C0%2C3)%20eq%20'${city}'&$format=JSON`).subscribe(
      (v: RailStation[]) => {
        this.RailStations = v;
        this.stationID = v[0].StationID;
        this.RailTRADailyTimetableStation(v[0].StationID);
      }
    );
  }

  RailTRADailyTimetableStation(stationID: string) {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    const data = yyyy + '-' + mm + '-' + dd;
    // tslint:disable-next-line: max-line-length
    this.http.get(`https://ptx.transportdata.tw/MOTC/v2/Rail/TRA/DailyTimetable/Station/${stationID}/${data}?$filter=Direction eq 0&$orderby=ArrivalTime&$format=JSON`).subscribe(
      (v: RailStationTimetable[]) => {
        this.RailStationTimetablesRight = v;
      }
    );
    // tslint:disable-next-line: max-line-length
    this.http.get(`https://ptx.transportdata.tw/MOTC/v2/Rail/TRA/DailyTimetable/Station/${stationID}/${data}?$filter=Direction eq 1&$orderby=ArrivalTime&$format=JSON`).subscribe(
      (v: RailStationTimetable[]) => {
        this.RailStationTimetablesLeft = v;
      }
    );
  }

  RailTRAGeneralTimetableTrainNo(trainNo: string) {
    // tslint:disable-next-line: max-line-length
    this.http.get<RailGeneralTimetable[]>(`https://ptx.transportdata.tw/MOTC/v2/Rail/TRA/GeneralTimetable/TrainNo/${trainNo}?$top=30&$format=JSON`).subscribe(
      (v: RailGeneralTimetable[]) => {
        console.log('RailGeneralTimetable', v);
        this.RailGeneralTimetable = v[0];
      }
    );
  }
}
