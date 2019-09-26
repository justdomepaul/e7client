export interface RailStationTimetable {
  TrainDate: string; // : 時刻表日期(格式: yyyy-MM-dd) ,
  StationID: string; // : 車站代號 ,
  StationName: NameType; // : 車站名稱 ,
  TrainNo: string; // : 車次代號 ,
  Direction: number; // : 順逆行 : [0:'順行',1:'逆行'] ,
  TripLine: number; // : 山海線類型 : [0:'不經山海線',1:'山線',2:'海線'] ,
  TrainTypeID: string; // : 列車車種代碼 ,
  TrainTypeCode: string; // : 列車車種簡碼 ,
  TrainTypeName: NameType; // : 列車車種名稱 ,
  StartingStationID: string; // : 起點車站代號 ,
  StartingStationName: string; // : 起點車站名稱 ,
  EndingStationID: string; // : 終點車站代號 ,
  EndingStationName: string; // : 終點車站名稱 ,
  ArrivalTime: string; // : 到站時間(格式: HH:mm:ss) ,
  DepartureTime: string; // : 離站時間(格式: HH:mm:ss) ,
  UpdateTime: string; // 本平台資料更新時間(ISO8601格式:yyyy-MM-ddTHH:mm:sszzz) ,
  VersionID: number; // 資料版本編號
}

export interface NameType {
  Zh_tw: string; // 中文繁體名稱 ,
  En: string; // 英文名稱
}

export interface PointType {
  PositionLat: number; // 位置緯度(WGS84) ,
  PositionLon: number; // 位置經度(WGS84)
}

export interface RailStation {
  StationUID: string; // 車站唯一識別代碼 ,
  StationID: string; // 車站代碼 ,
  StationName: NameType; // 車站名稱 ,
  StationPosition: PointType; // 車站位置 ,
  StationAddress: string; // 車站地址 ,
  StationPhone: string; // 車站聯絡電話 ,
  OperatorID: string; // 營運業者代碼 ,
  StationClass: number; // 車站級別 : [0:'特等站',1:'一等站',2:'二等站',3:'三等站',4:'簡易站',5:'招呼站',6:'未知'] ,
  ReservationCode: string; // 票價用站牌代碼 ,
  UpdateTime: string; // 本平台資料更新時間(ISO8601格式:yyyy-MM-ddTHH:mm:sszzz) ,
  VersionID: number; // 資料版本編號
}

export interface RailGeneralTimetable {
  UpdateTime: string; // 資料更新日期(格式: yyyy-MM - dd) ,
  VersionID: number; // 資料版本編號,
  GeneralTimetable: GeneralTimetable; // 定期時刻表資料
}

export interface GeneralTimetable {
  GeneralTrainInfo: RailGeneralTrainInfo; // 定期車次資料 ,
  StopTimes: RailStopTime[]; // 停靠時間資料 ,
  ServiceDay: ServiceDay; // 營運日型態 ,
  SrcUpdateTime: string; // 來源端平台資料更新時間(ISO8601格式:yyyy-MM-ddTHH:mm:sszzz)
}

export interface RailGeneralTrainInfo {
  TrainNo: string; // 車次代碼 ,
  Direction: number; // 順逆行 : [0:'順行',1:'逆行'] ,
  StartingStationID: string; // 列車起點車站代號 ,
  StartingStationName: NameType; // 列車起點車站名稱 ,
  EndingStationID: string; // 列車終點車站代號 ,
  EndingStationName: NameType; // 列車終點車站名稱 ,
  TrainTypeID: string; // 列車車種代碼 ,
  TrainTypeCode: string; // 列車車種簡碼 ,
  TrainTypeName: NameType; // 列車車種名稱 ,
  TripLine: number; // 山海線類型 : [0:'不經山海線',1:'山線',2:'海線'] ,
  OverNightStationID: string; // 跨夜車站代碼 ,
  WheelchairFlag: number; // 是否設身障旅客專用座位車 : [0:'否',1:'是'] ,
  PackageServiceFlag: number; // 是否提供行李服務 : [0:'否',1:'是'] ,
  DiningFlag: number; // 是否提供餐車服務 : [0:'否',1:'是'] ,
  BikeFlag: number; // 是否人車同行班次(置於攜車袋之自行車各級列車均可乘車) : [0:'否',1:'是'] ,
  BreastFeedingFlag: number; // 是否設有哺(集)乳室車廂 : [0:'否',1:'是'] ,
  DailyFlag: number; // 是否為每日行駛 : [0:'否',1:'是'] ,
  Note: NameType; // 附註說明
}

export interface RailStopTime {
  StopSequence: number; // 跑法站序(由1開始) ,
  StationID: string; // 車站代碼 ,
  StationName: NameType; // 車站名稱 ,
  ArrivalTime: string; // 到站時間(格式: HH:mm:ss) ,
  DepartureTime: string; // 離站時間(格式: HH:mm:ss)
}
export interface ServiceDay {
  Monday: number; // 星期一是否營運 : [0:'否',1:'是'] ,
  Tuesday: number; // 星期二是否營運 : [0:'否',1:'是'] ,
  Wednesday: number; // 星期三是否營運 : [0:'否',1:'是'] ,
  Thursday: number; // 星期四是否營運 : [0:'否',1:'是'] ,
  Friday: number; // 星期五是否營運 : [0:'否',1:'是'] ,
  Saturday: number; // 星期六是否營運 : [0:'否',1:'是'] ,
  Sunday: number; // 星期日是否營運 : [0:'否',1:'是']
}
