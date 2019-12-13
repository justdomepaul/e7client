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

export interface RailDailyTrainInfo {
  'NeedTime'?: string;
  'TrainDate': '2019-12-04';
  'DailyTrainInfo': {
    'TrainNo': '3211',
    'Direction': 1,
    'StartingStationID': '4080',
    'StartingStationName': {
      'Zh_tw': '嘉義',
      'En': 'Chiayi'
    },
    'EndingStationID': '5050',
    'EndingStationName': {
      'Zh_tw': '潮州',
      'En': 'Chaozhou'
    },
    'TripHeadsign': '往潮州',
    'TrainTypeID': '1131',
    'TrainTypeCode': '6',
    'TrainTypeName': {
      'Zh_tw': '區間',
      'En': 'Local Train'
    },
    'TripLine': 0,
    'WheelchairFlag': 0,
    'PackageServiceFlag': 0,
    'DiningFlag': 0,
    'BikeFlag': 1,
    'BreastFeedingFlag': 0,
    'DailyFlag': 1,
    'ServiceAddedFlag': false,
    'Note': {
      'Zh_tw': '每日行駛。'
    }
  };
  'OriginStopTime': {
    'StopSequence': 19,
    'StationID': '4290',
    'StationName': {
      'Zh_tw': '大湖',
      'En': 'Dahu'
    },
    'ArrivalTime': '15:49',
    'DepartureTime': '15:49'
  };
  'DestinationStopTime': {
    'StopSequence': 43,
    'StationID': '5050',
    'StationName': {
      'Zh_tw': '潮州',
      'En': 'Chaozhou'
    },
    'ArrivalTime': '17:20',
    'DepartureTime': '17:22'
  };
  'UpdateTime': '2019-11-27T12:22:01+08:00';
  'VersionID': 8;
}

export interface TRAGeneralTrainTimetableList {
  UpdateTime: string; // 本平台資料更新時間(ISO8601格式: yyyy-MM - ddTHH: mm: sszzz)
  UpdateInterval: number; // 本平台資料更新週期(秒)
  SrcUpdateTime: string; // 來源端平台資料更新時間(ISO8601格式: yyyy - MM - ddTHH: mm: sszzz)
  SrcUpdateInterval: number; // 來源端平台資料更新週期(秒)
  AuthorityCode: string; // 業管機關簡碼
  EffectiveDate: string; // 有效起始日期
  ExpireDate: string; // 有效終止日期
  SrcVersion: string; // 來源版號
  TimetableName: string; // 定期性站別時刻表名稱
  ValidityDesciption: string; // 時刻表適用情形說明
  TrainTimetables: GeneralTrainTimetable[]; // 資料(陣列)
  Count: number; // 資料總筆數
}

export interface GeneralTrainTimetable {
  TrainInfo: TrainInfo; // 定期車次資料
  StopTimes: StopTime[]; // 停靠時間資料
}

export interface TrainInfo {
  TrainNo: string; // 車次代碼
  RouteID: string; // 營運路線代碼
  Direction: number; // 行駛方向 : [0:'順行',1:'逆行']
  TrainTypeID: string; // 車種代嗎
  TrainTypeCode: string; // 車種簡碼 = ['1: 太魯閣', '2: 普悠瑪', '3: 自強', '4: 莒光', '5: 復興', '6: 區間', '7: 普快', '10: 區間快']
  TrainTypeName: NameType; // 車種名稱
  TripHeadSign: string; // 車次之目的地方向描述
  StartingStationID: string; // 列車起點車站代號
  StartingStationName: NameType; // 列車起點車站名稱
  EndingStationID: string; // 列車終點車站代號
  EndingStationName: NameType; // 列車終點車站名稱
  OverNightStationID: string; // 跨夜車站代碼
  TripLine: number; // 山海線類型 : [0:'不經山海線',1:'山線',2:'海線']
  WheelChairFlag: number; // 是否設身障旅客專用座位車 : [0:'否',1:'是']
  PackageServiceFlag: number; // 是否提供行李服務 : [0:'否',1:'是']
  DiningFlag: number; // 是否提供餐車服務 : [0:'否',1:'是']
  BreastFeedFlag: number; // 是否設有哺(集)乳室車廂 : [0:'否',1:'是']
  BikeFlag: number; // 是否人車同行班次(置於攜車袋之自行車各級列車均可乘車) : [0:'否',1:'是']
  CarFlag: number; // 是否提供小客車 : [0:'否',1:'是']
  DailyFlag: number; // 是否為每日行駛 : [0:'否',1:'是']
  ExtraTrainFlag: number; // 是否為加班車 : [0:'否',1:'是']
  Note: string; // 附註說明
}

export interface StopTime {
  StopSequence: number; // 停靠站序(由1開始)
  StationID: string; // 車站代碼
  StationName: NameType; // 車站名稱
  ArrivalTime: string; // 到站時間(格式: HH:mm)
  DepartureTime: string; // 離站時間(格式: HH:mm)
}
