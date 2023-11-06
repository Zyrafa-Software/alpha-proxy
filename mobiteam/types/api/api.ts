/**
 *
 * @export
 * @interface Address
 */
export interface Address {
  /**
   *
   * @type {number}
   * @memberof Address
   */
  id?: number;
  /**
   *
   * @type {string}
   * @memberof Address
   */
  street?: string;
  /**
   *
   * @type {string}
   * @memberof Address
   */
  city?: string;
  /**
   *
   * @type {string}
   * @memberof Address
   */
  zipCode?: string;
  /**
   *
   * @type {string}
   * @memberof Address
   */
  state?: string;
  /**
   *
   * @type {Country}
   * @memberof Address
   */
  country?: Country;
  /**
   *
   * @type {Coordinates}
   * @memberof Address
   */
  coordinates?: Coordinates;
  /**
   *
   * @type {number}
   * @memberof Address
   */
  workingHourMin?: number;
  /**
   *
   * @type {number}
   * @memberof Address
   */
  workingHourMax?: number;
  /**
   *
   * @type {Array<WorkingDays>}
   * @memberof Address
   */
  workingDays?: Array<WorkingDays>;
  /**
   *
   * @type {string}
   * @memberof Address
   */
  contactPerson?: string;
  /**
   *
   * @type {string}
   * @memberof Address
   */
  email?: string;
  /**
   *
   * @type {string}
   * @memberof Address
   */
  phone?: string;
  /**
   *
   * @type {number}
   * @memberof Address
   */
  averageReactionTime?: number;
  /**
   *
   * @type {number}
   * @memberof Address
   */
  averageSpentTime?: number;
  /**
   *
   * @type {string}
   * @memberof Address
   */
  notes?: string;
}
/**
 *
 * @export
 * @interface Asset
 */
export interface Asset {
  /**
   *
   * @type {number}
   * @memberof Asset
   */
  id?: number;
  /**
   *
   * @type {CargoType}
   * @memberof Asset
   */
  type?: CargoType;
  /**
   *
   * @type {Company}
   * @memberof Asset
   */
  company?: Company;
  /**
   * Unique asset number
   * @type {string}
   * @memberof Asset
   */
  number?: string;
  /**
   * Asset model name, if it exists
   * @type {string}
   * @memberof Asset
   */
  model?: string;
  /**
   *
   * @type {string}
   * @memberof Asset
   */
  vin?: string;
  /**
   *
   * @type {Group}
   * @memberof Asset
   */
  group?: Group;
  /**
   *
   * @type {string}
   * @memberof Asset
   */
  eldDeviceId?: string;
  /**
   *
   * @type {string}
   * @memberof Asset
   */
  externalIdsAttributes?: string;
  /**
   *
   * @type {CargoData}
   * @memberof Asset
   */
  cargoData?: CargoData;
  /**
   *
   * @type {Array<Document>}
   * @memberof Asset
   */
  documents?: Array<Document>;
  /**
   *
   * @type {string}
   * @memberof Asset
   */
  notes?: string;
}
/**
 *
 * @export
 * @interface CargoData
 */
export interface CargoData {
  /**
   *
   * @type {number}
   * @memberof CargoData
   */
  id?: number;
  /**
   *
   * @type {string}
   * @memberof CargoData
   */
  name?: string;
  /**
   *
   * @type {number}
   * @memberof CargoData
   */
  height?: number;
  /**
   *
   * @type {number}
   * @memberof CargoData
   */
  width?: number;
  /**
   *
   * @type {number}
   * @memberof CargoData
   */
  length?: number;
  /**
   *
   * @type {number}
   * @memberof CargoData
   */
  weight?: number;
  /**
   *
   * @type {number}
   * @memberof CargoData
   */
  weightMax?: number;
  /**
   *
   * @type {number}
   * @memberof CargoData
   */
  axleAmount?: number;
  /**
   *
   * @type {number}
   * @memberof CargoData
   */
  axleLoad?: number;
  /**
   *
   * @type {number}
   * @memberof CargoData
   */
  axleLoadMax?: number;
  /**
   *
   * @type {number}
   * @memberof CargoData
   */
  maxEuroPalletsLoad?: number;
  /**
   *
   * @type {number}
   * @memberof CargoData
   */
  cargoSpaceHeight?: number;
  /**
   *
   * @type {number}
   * @memberof CargoData
   */
  cargoSpaceLength?: number;
  /**
   *
   * @type {number}
   * @memberof CargoData
   */
  cargoSpaceWidth?: number;
  /**
   *
   * @type {number}
   * @memberof CargoData
   */
  cargoSpaceVolume?: number;
  /**
   *
   * @type {number}
   * @memberof CargoData
   */
  maxCargoWeight?: number;
  /**
   *
   * @type {number}
   * @memberof CargoData
   */
  maxAssetWeight?: number;
}
/**
 *
 * @export
 * @interface CargoType
 */
export interface CargoType {
  /**
   *
   * @type {number}
   * @memberof CargoType
   */
  id?: number;
  /**
   *
   * @type {CargoTypeEnum}
   * @memberof CargoType
   */
  type?: CargoTypeEnum;
}
/**
 *
 * @export
 * @enum {string}
 */
export enum CargoTypeEnum {
  Curtainsider = <any>"curtainsider",
  Cooler = <any>"cooler",
  StandardTent = <any>"standard-tent",
  Box = <any>"box",
  OpenBox = <any>"open-box",
  Isotherm = <any>"isotherm",
  Meathanging = <any>"meathanging",
  FoodTanker = <any>"food-tanker",
  Tanker = <any>"tanker",
  Other = <any>"other",
  CarTransporter = <any>"car-transporter",
  DumpTruck = <any>"dump-truck",
  PetroleumTanker = <any>"petroleum-tanker",
  ChemicalTanker = <any>"chemical-tanker",
  GasTanker = <any>"gas-tanker",
  Silos = <any>"silos",
  Mega = <any>"mega",
  Coilmulde = <any>"coilmulde",
  LogTrailer = <any>"log-trailer",
  PlatformTrailer = <any>"platform-trailer",
  HookTruck = <any>"hook-truck",
  LowLoader = <any>"low-loader",
  Truck = <any>"truck",
  SwapBodySystem = <any>"swap-body-system",
  _20Standard = <any>"20-standard",
  _40Standard = <any>"40-standard",
  _45Standard = <any>"45-standard",
  Joloda = <any>"joloda",
  BDE = <any>"BDE",
  Walkingfloor = <any>"walkingfloor",
  TankBody20 = <any>"tank-body-20",
  TankBody40 = <any>"tank-body-40",
  Jumbo = <any>"jumbo",
  NoCargo = <any>"no_cargo",
}
/**
 *
 * @export
 * @interface Company
 */
export interface Company {
  /**
   *
   * @type {number}
   * @memberof Company
   */
  id?: number;
  /**
   *
   * @type {string}
   * @memberof Company
   */
  name?: string;
  /**
   *
   * @type {Array<CompanyType>}
   * @memberof Company
   */
  companyType?: Array<CompanyType>;
  /**
   *
   * @type {string}
   * @memberof Company
   */
  taxNumberNIP?: string;
  /**
   *
   * @type {Country}
   * @memberof Company
   */
  country?: Country;
  /**
   *
   * @type {Address}
   * @memberof Company
   */
  addressOffice?: Address;
  /**
   *
   * @type {Address}
   * @memberof Company
   */
  addressPost?: Address;
  /**
   *
   * @type {Array<Address>}
   * @memberof Company
   */
  addressTerminals?: Array<Address>;
  /**
   *
   * @type {string}
   * @memberof Company
   */
  IBAN?: string;
  /**
   *
   * @type {string}
   * @memberof Company
   */
  SWIFT?: string;
  /**
   *
   * @type {PaymentData}
   * @memberof Company
   */
  paymentData?: PaymentData;
  /**
   *
   * @type {string}
   * @memberof Company
   */
  contactPerson?: string;
  /**
   *
   * @type {string}
   * @memberof Company
   */
  email?: string;
  /**
   *
   * @type {string}
   * @memberof Company
   */
  phone?: string;
  /**
   *
   * @type {string}
   * @memberof Company
   */
  otherContact?: string;
  /**
   *
   * @type {number}
   * @memberof Company
   */
  ratePerKm?: number;
  /**
   *
   * @type {number}
   * @memberof Company
   */
  rating?: number;
  /**
   *
   * @type {string}
   * @memberof Company
   */
  additionalInfo?: string;
  /**
   *
   * @type {CompanyStatus}
   * @memberof Company
   */
  status?: CompanyStatus;
  /**
   *
   * @type {Array<Group>}
   * @memberof Company
   */
  groups?: Array<Group>;
  /**
   *
   * @type {Array<Order>}
   * @memberof Company
   */
  orders?: Array<Order>;
  /**
   *
   * @type {string}
   * @memberof Company
   */
  notes?: string;
}
/**
 *
 * @export
 * @interface CompanyStatus
 */
export interface CompanyStatus {
  /**
   *
   * @type {number}
   * @memberof CompanyStatus
   */
  id?: number;
  /**
   *
   * @type {CompanyStatusEnum}
   * @memberof CompanyStatus
   */
  status?: CompanyStatusEnum;
}
/**
 *
 * @export
 * @enum {string}
 */
export enum CompanyStatusEnum {
  ACTIVE = <any>"ACTIVE",
  SUSPEND = <any>"SUSPEND",
  PENDING = <any>"PENDING",
  ARCHIVED = <any>"ARCHIVED",
  OTHER = <any>"OTHER",
}
/**
 *
 * @export
 * @interface CompanyType
 */
export interface CompanyType {
  /**
   *
   * @type {number}
   * @memberof CompanyType
   */
  id?: number;
  /**
   *
   * @type {CompanyTypeEnum}
   * @memberof CompanyType
   */
  type?: CompanyTypeEnum;
}
/**
 *
 * @export
 * @enum {string}
 */
export enum CompanyTypeEnum {
  OWNCOMPANY = <any>"OWN_COMPANY",
  FORWARDER = <any>"FORWARDER",
  CARRIER = <any>"CARRIER",
  PROVIDER = <any>"PROVIDER",
}
/**
 *
 * @export
 * @interface Coordinates
 */
export interface Coordinates {
  /**
   *
   * @type {Lat}
   * @memberof Coordinates
   */
  lat: Lat;
  /**
   *
   * @type {Lon}
   * @memberof Coordinates
   */
  lon: Lon;
}
/**
 *
 * @export
 * @interface Country
 */
export interface Country {
  /**
   *
   * @type {number}
   * @memberof Country
   */
  id?: number;
  /**
   *
   * @type {CountryCode}
   * @memberof Country
   */
  iso?: CountryCode;
  /**
   *
   * @type {string}
   * @memberof Country
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof Country
   */
  nicename?: string;
  /**
   *
   * @type {string}
   * @memberof Country
   */
  iso3?: string;
  /**
   *
   * @type {number}
   * @memberof Country
   */
  numcode?: number;
  /**
   *
   * @type {number}
   * @memberof Country
   */
  phonecode?: number;
}
/**
 *
 * @export
 * @enum {string}
 */
export enum CountryCode {
  Ad = <any>"ad",
  Af = <any>"af",
  Al = <any>"al",
  Am = <any>"am",
  At = <any>"at",
  Az = <any>"az",
  Ba = <any>"ba",
  Be = <any>"be",
  Bg = <any>"bg",
  By = <any>"by",
  Ch = <any>"ch",
  Cy = <any>"cy",
  Cz = <any>"cz",
  De = <any>"de",
  Dk = <any>"dk",
  Dz = <any>"dz",
  Ee = <any>"ee",
  Eg = <any>"eg",
  Es = <any>"es",
  Fi = <any>"fi",
  Fr = <any>"fr",
  Gb = <any>"gb",
  Ge = <any>"ge",
  Gr = <any>"gr",
  Hr = <any>"hr",
  Hu = <any>"hu",
  Ie = <any>"ie",
  Il = <any>"il",
  Iq = <any>"iq",
  Ir = <any>"ir",
  Is = <any>"is",
  It = <any>"it",
  Kg = <any>"kg",
  Kz = <any>"kz",
  Li = <any>"li",
  Lt = <any>"lt",
  Lu = <any>"lu",
  Lv = <any>"lv",
  Ma = <any>"ma",
  Mc = <any>"mc",
  Md = <any>"md",
  Me = <any>"me",
  Mk = <any>"mk",
  Mt = <any>"mt",
  Nl = <any>"nl",
  No = <any>"no",
  Pk = <any>"pk",
  Pl = <any>"pl",
  Pt = <any>"pt",
  Ro = <any>"ro",
  Rs = <any>"rs",
  Ru = <any>"ru",
  Se = <any>"se",
  Si = <any>"si",
  Sk = <any>"sk",
  Sm = <any>"sm",
  Tj = <any>"tj",
  Tm = <any>"tm",
  Tn = <any>"tn",
  Tr = <any>"tr",
  Ua = <any>"ua",
  Uz = <any>"uz",
  Xk = <any>"xk",
}
/**
 *
 * @export
 * @interface Currency
 */
export interface Currency {
  /**
   *
   * @type {number}
   * @memberof Currency
   */
  id?: number;
  /**
   *
   * @type {string}
   * @memberof Currency
   */
  name?: string;
  /**
   *
   * @type {CurrencyCode}
   * @memberof Currency
   */
  code?: CurrencyCode;
  /**
   *
   * @type {string}
   * @memberof Currency
   */
  symbol?: string;
}
/**
 *
 * @export
 * @enum {string}
 */
export enum CurrencyCode {
  AMD = <any>"AMD",
  AZN = <any>"AZN",
  BAM = <any>"BAM",
  BGN = <any>"BGN",
  BYN = <any>"BYN",
  CHF = <any>"CHF",
  CZK = <any>"CZK",
  DKK = <any>"DKK",
  EUR = <any>"EUR",
  GBP = <any>"GBP",
  GEL = <any>"GEL",
  HUF = <any>"HUF",
  ISK = <any>"ISK",
  MDL = <any>"MDL",
  MKD = <any>"MKD",
  NOK = <any>"NOK",
  PLN = <any>"PLN",
  RON = <any>"RON",
  RSD = <any>"RSD",
  SEK = <any>"SEK",
  TRY = <any>"TRY",
  UAH = <any>"UAH",
}
/**
 *
 * @export
 * @interface DocForm
 */
export interface DocForm {
  /**
   *
   * @type {number}
   * @memberof DocForm
   */
  id?: number;
  /**
   *
   * @type {DocFormEnum}
   * @memberof DocForm
   */
  form?: DocFormEnum;
}
/**
 *
 * @export
 * @enum {string}
 */
export enum DocFormEnum {
  PNG = <any>"PNG",
  JPG = <any>"JPG",
  PDF = <any>"PDF",
  DOCX = <any>"DOCX",
  XLSX = <any>"XLSX",
  CSV = <any>"CSV",
  YML = <any>"YML",
  XML = <any>"XML",
  TXT = <any>"TXT",
  JSON = <any>"JSON",
  OTHER = <any>"OTHER",
}
/**
 *
 * @export
 * @interface DocStatus
 */
export interface DocStatus {
  /**
   *
   * @type {number}
   * @memberof DocStatus
   */
  id?: number;
  /**
   *
   * @type {DocStatusEnum}
   * @memberof DocStatus
   */
  status?: DocStatusEnum;
}
/**
 *
 * @export
 * @enum {string}
 */
export enum DocStatusEnum {
  ARCHIVED = <any>"ARCHIVED",
  DRAFT = <any>"DRAFT",
  PENDINGAPPROVAL = <any>"PENDING_APPROVAL",
  APPROVED = <any>"APPROVED",
  CANCELLED = <any>"CANCELLED",
  FINAL = <any>"FINAL",
  DECLINED = <any>"DECLINED",
  EXPIRED = <any>"EXPIRED",
  NOTVALID = <any>"NOT_VALID",
  SUSPENDED = <any>"SUSPENDED",
  SENT = <any>"SENT",
  OTHER = <any>"OTHER",
}
/**
 *
 * @export
 * @interface DocType
 */
export interface DocType {
  /**
   *
   * @type {number}
   * @memberof DocType
   */
  id?: number;
  /**
   *
   * @type {DocTypeEnum}
   * @memberof DocType
   */
  type?: DocTypeEnum;
}
/**
 *
 * @export
 * @enum {string}
 */
export enum DocTypeEnum {
  ID = <any>"ID",
  PASSPORT = <any>"PASSPORT",
  DRIVERLICENSE = <any>"DRIVER_LICENSE",
  A1PERMIT = <any>"A1_PERMIT",
  PUPSTATEMENT = <any>"PUP_STATEMENT",
  RESIDENCECARD = <any>"RESIDENCE_CARD",
  CERTQUAL = <any>"CERT_QUAL",
  VISA = <any>"VISA",
  ADR = <any>"ADR",
  EKUZ = <any>"EKUZ",
  KKKCARD = <any>"KKK_CARD",
  PROFORMA = <any>"PROFORMA",
  INVOICE = <any>"INVOICE",
  CMR = <any>"CMR",
  ORDER = <any>"ORDER",
  BILL = <any>"BILL",
  BILLOFLANDING = <any>"BILL_OF_LANDING",
  PACKINGLIST = <any>"PACKING_LIST",
  EXPORTLIST = <any>"EXPORT_LIST",
  LETTER = <any>"LETTER",
  RECEIPT = <any>"RECEIPT",
  CERTORIGIN = <any>"CERT_ORIGIN",
  INSURANCE = <any>"INSURANCE",
  LICENSE = <any>"LICENSE",
  NOTICE = <any>"NOTICE",
  REGISTRATION = <any>"REGISTRATION",
  LOGDAILY = <any>"LOG_DAILY",
  CERTINSPECTION = <any>"CERT_INSPECTION",
  OTHER = <any>"OTHER",
}
/**
 *
 * @export
 * @interface Document
 */
export interface Document {
  /**
   *
   * @type {number}
   * @memberof Document
   */
  id?: number;
  /**
   *
   * @type {DocType}
   * @memberof Document
   */
  docType?: DocType;
  /**
   *
   * @type {User}
   * @memberof Document
   */
  uploader?: User;
  /**
   *
   * @type {Company}
   * @memberof Document
   */
  company?: Company;
  /**
   *
   * @type {User}
   * @memberof Document
   */
  user?: User;
  /**
   *
   * @type {Group}
   * @memberof Document
   */
  group?: Group;
  /**
   *
   * @type {Vehicle}
   * @memberof Document
   */
  vehicle?: Vehicle;
  /**
   *
   * @type {Asset}
   * @memberof Document
   */
  asset?: Asset;
  /**
   *
   * @type {DocForm}
   * @memberof Document
   */
  docForm?: DocForm;
  /**
   *
   * @type {any}
   * @memberof Document
   */
  docJsonFields?: any;
  /**
   *
   * @type {string}
   * @memberof Document
   */
  notes?: string;
  /**
   *
   * @type {Array<any>}
   * @memberof Document
   */
  attachments?: Array<any>;
  /**
   * Timestamp with timezone
   * @type {string}
   * @memberof Document
   */
  docUploadTime?: string;
  /**
   * Timestamp with timezone
   * @type {string}
   * @memberof Document
   */
  docDate?: string;
  /**
   * Timestamp with timezone
   * @type {string}
   * @memberof Document
   */
  expiringDate?: string;
  /**
   *
   * @type {DocStatus}
   * @memberof Document
   */
  status?: DocStatus;
}
/**
 *
 * @export
 * @interface DriveType
 */
export interface DriveType {
  /**
   *
   * @type {number}
   * @memberof DriveType
   */
  id?: number;
  /**
   *
   * @type {DriveTypeEnum}
   * @memberof DriveType
   */
  type?: DriveTypeEnum;
}
/**
 *
 * @export
 * @enum {string}
 */
export enum DriveTypeEnum {
  _4H30M = <any>"4H30M",
  _6H = <any>"6H",
  _9H = <any>"9H",
  _10H = <any>"10H",
  _13H = <any>"13H",
  _15H = <any>"15H",
  _56H = <any>"56H",
  _90H = <any>"90H",
  OTHER = <any>"OTHER",
}
/**
 *
 * @export
 * @interface DriverCycle
 */
export interface DriverCycle {
  /**
   *
   * @type {number}
   * @memberof DriverCycle
   */
  id?: number;
  /**
   *
   * @type {User}
   * @memberof DriverCycle
   */
  user?: User;
  /**
   *
   * @type {string}
   * @memberof DriverCycle
   */
  userId?: string;
  /**
   * Timestamp with timezone
   * @type {string}
   * @memberof DriverCycle
   */
  restStart?: string;
  /**
   * Timestamp with timezone
   * @type {string}
   * @memberof DriverCycle
   */
  restFinish?: string;
  /**
   *
   * @type {RestType}
   * @memberof DriverCycle
   */
  restType?: RestType;
  /**
   * Timestamp with timezone
   * @type {string}
   * @memberof DriverCycle
   */
  driveStart?: string;
  /**
   * Timestamp with timezone
   * @type {string}
   * @memberof DriverCycle
   */
  driveFinish?: string;
  /**
   *
   * @type {DriveType}
   * @memberof DriverCycle
   */
  driveType?: DriveType;
  /**
   * Timestamp with timezone
   * @type {string}
   * @memberof DriverCycle
   */
  shiftStart?: string;
  /**
   * Timestamp with timezone
   * @type {string}
   * @memberof DriverCycle
   */
  shiftEnd?: string;
  /**
   * Timestamp with timezone
   * @type {string}
   * @memberof DriverCycle
   */
  workStart?: string;
  /**
   * Timestamp with timezone
   * @type {string}
   * @memberof DriverCycle
   */
  workEnd?: string;
}
/**
 *
 * @export
 * @interface DriverPerformance
 */
export interface DriverPerformance {
  /**
   *
   * @type {number}
   * @memberof DriverPerformance
   */
  id?: number;
  /**
   *
   * @type {User}
   * @memberof DriverPerformance
   */
  user?: User;
  /**
   *
   * @type {number}
   * @memberof DriverPerformance
   */
  rank?: number;
  /**
   *
   * @type {number}
   * @memberof DriverPerformance
   */
  reactionTime?: number;
  /**
   *
   * @type {number}
   * @memberof DriverPerformance
   */
  accuracy?: number;
  /**
   *
   * @type {number}
   * @memberof DriverPerformance
   */
  fuelConsumption?: number;
}
/**
 *
 * @export
 */
export type DriverSchedule = Array<DriverCycle>;
/**
 *
 * @export
 * @interface DutyStatus
 */
export interface DutyStatus {
  /**
   *
   * @type {number}
   * @memberof DutyStatus
   */
  id?: number;
  /**
   *
   * @type {DutyStatusEnum}
   * @memberof DutyStatus
   */
  status?: DutyStatusEnum;
}
/**
 *
 * @export
 * @enum {string}
 */
export enum DutyStatusEnum {
  OFFDUTY = <any>"OFF_DUTY",
  ONDUTY = <any>"ON_DUTY",
  SLEEPER = <any>"SLEEPER",
  DRIVING = <any>"DRIVING",
  WAITING = <any>"WAITING",
  ARRIVED = <any>"ARRIVED",
  LOADINGSTARTED = <any>"LOADING_STARTED",
  UNLOADINGSTARTED = <any>"UNLOADING_STARTED",
  LOADINGFINISHED = <any>"LOADING_FINISHED",
  UNLOADINGFINISHED = <any>"UNLOADING_FINISHED",
  NOTLOADED = <any>"NOT_LOADED",
  NOTUNLOADED = <any>"NOT_UNLOADED",
  LOADINGREFUSED = <any>"LOADING_REFUSED",
  UNLOADINGREFUSED = <any>"UNLOADING_REFUSED",
}
/**
 *
 * @export
 * @interface FleetUserPerformance
 */
export interface FleetUserPerformance {
  /**
   *
   * @type {number}
   * @memberof FleetUserPerformance
   */
  id?: number;
  /**
   *
   * @type {User}
   * @memberof FleetUserPerformance
   */
  user?: User;
  /**
   *
   * @type {number}
   * @memberof FleetUserPerformance
   */
  rank?: number;
  /**
   *
   * @type {number}
   * @memberof FleetUserPerformance
   */
  reactionTime?: number;
  /**
   *
   * @type {number}
   * @memberof FleetUserPerformance
   */
  hosAccuracy?: number;
  /**
   *
   * @type {number}
   * @memberof FleetUserPerformance
   */
  emptyRuns?: number;
  /**
   *
   * @type {number}
   * @memberof FleetUserPerformance
   */
  deliveriesStats?: number;
}
/**
 *
 * @export
 * @interface Freight
 */
export interface Freight {
  /**
   *
   * @type {number}
   * @memberof Freight
   */
  id?: number;
  /**
   *
   * @type {string}
   * @memberof Freight
   */
  externalId?: string;
  /**
   *
   * @type {boolean}
   * @memberof Freight
   */
  multistop?: boolean;
  /**
   * Timestamp with timezone
   * @type {string}
   * @memberof Freight
   */
  publishDate?: string;
  /**
   * Timestamp with timezone
   * @type {string}
   * @memberof Freight
   */
  decisionDate?: string;
  /**
   *
   * @type {Company}
   * @memberof Freight
   */
  company?: Company;
  /**
   *
   * @type {number}
   * @memberof Freight
   */
  paymentValue?: number;
  /**
   *
   * @type {PaymentData}
   * @memberof Freight
   */
  paymentData?: PaymentData;
  /**
   *
   * @type {boolean}
   * @memberof Freight
   */
  quickPayTransEu?: boolean;
  /**
   *
   * @type {FreightRequirements}
   * @memberof Freight
   */
  requirements?: FreightRequirements;
  /**
   *
   * @type {Array<Spot>}
   * @memberof Freight
   */
  spots?: Array<Spot>;
  /**
   *
   * @type {number}
   * @memberof Freight
   */
  freightRank?: number;
}
/**
 *
 * @export
 * @interface FreightRequirements
 */
export interface FreightRequirements {
  /**
   * Is a full truck load
   * @type {boolean}
   * @memberof FreightRequirements
   */
  isFtl?: boolean;
  /**
   *
   * @type {Array<CargoType>}
   * @memberof FreightRequirements
   */
  cargoType?: Array<CargoType>;
  /**
   *
   * @type {Array<VehicleClass>}
   * @memberof FreightRequirements
   */
  vehicleType?: Array<VehicleClass>;
}
/**
 *
 * @export
 * @interface FuelType
 */
export interface FuelType {
  /**
   *
   * @type {number}
   * @memberof FuelType
   */
  id?: number;
  /**
   *
   * @type {FuelTypeEnum}
   * @memberof FuelType
   */
  type?: FuelTypeEnum;
}
/**
 *
 * @export
 * @enum {string}
 */
export enum FuelTypeEnum {
  DIESEL = <any>"DIESEL",
  GASOLINE = <any>"GASOLINE",
  PROPANE = <any>"PROPANE",
  LNG = <any>"LNG",
  CNG = <any>"CNG",
  ETHANOL = <any>"ETHANOL",
  METHANOL = <any>"METHANOL",
  ELECTRO = <any>"ELECTRO",
  OTHER = <any>"OTHER",
}
/**
 *
 * @export
 * @interface Group
 */
export interface Group {
  /**
   *
   * @type {number}
   * @memberof Group
   */
  id?: number;
  /**
   *
   * @type {string}
   * @memberof Group
   */
  name?: string;
  /**
   *
   * @type {Array<User>}
   * @memberof Group
   */
  users?: Array<User>;
  /**
   *
   * @type {Array<Vehicle>}
   * @memberof Group
   */
  vehicles?: Array<Vehicle>;
  /**
   *
   * @type {Array<Asset>}
   * @memberof Group
   */
  assets?: Array<Asset>;
  /**
   *
   * @type {Array<Document>}
   * @memberof Group
   */
  documents?: Array<Document>;
}
/**
 *
 * @export
 * @interface HosRegion
 */
export interface HosRegion {
  /**
   *
   * @type {number}
   * @memberof HosRegion
   */
  id?: number;
  /**
   *
   * @type {HosRegionEnum}
   * @memberof HosRegion
   */
  region?: HosRegionEnum;
}
/**
 * Time periods regulations for rest and drive
 * @export
 * @enum {string}
 */
export enum HosRegionEnum {
  EU = <any>"EU",
  US = <any>"US",
  UA = <any>"UA",
  OTHER = <any>"OTHER",
}
/**
 *
 * @export
 */
export type Lat = number;
/**
 *
 * @export
 * @interface Load
 */
export interface Load {
  /**
   *
   * @type {number}
   * @memberof Load
   */
  id?: number;
  /**
   *
   * @type {string}
   * @memberof Load
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof Load
   */
  description?: string;
  /**
   *
   * @type {number}
   * @memberof Load
   */
  amount?: number;
  /**
   *
   * @type {LoadType}
   * @memberof Load
   */
  type?: LoadType;
  /**
   *
   * @type {boolean}
   * @memberof Load
   */
  dangerousLoad?: boolean;
  /**
   *
   * @type {string}
   * @memberof Load
   */
  unCode?: string;
  /**
   *
   * @type {string}
   * @memberof Load
   */
  adrClass?: string;
  /**
   *
   * @type {boolean}
   * @memberof Load
   */
  isStackable?: boolean;
  /**
   *
   * @type {number}
   * @memberof Load
   */
  height?: number;
  /**
   *
   * @type {number}
   * @memberof Load
   */
  width?: number;
  /**
   *
   * @type {number}
   * @memberof Load
   */
  length?: number;
  /**
   *
   * @type {number}
   * @memberof Load
   */
  weight?: number;
  /**
   *
   * @type {number}
   * @memberof Load
   */
  volume?: number;
}
/**
 *
 * @export
 * @interface LoadType
 */
export interface LoadType {
  /**
   *
   * @type {number}
   * @memberof LoadType
   */
  id?: number;
  /**
   *
   * @type {LoadTypeEnum}
   * @memberof LoadType
   */
  type?: LoadTypeEnum;
}
/**
 *
 * @export
 * @enum {string}
 */
export enum LoadTypeEnum {
  Europalette = <any>"europalette",
  BigBag = <any>"big-bag",
  Log = <any>"log",
  Bag = <any>"bag",
  Barrel = <any>"barrel",
  Carton = <any>"carton",
  Piece = <any>"piece",
  Cubic = <any>"cubic",
  Box = <any>"box",
  Other = <any>"other",
  Roll = <any>"roll",
  Cp1ChemicalPalette = <any>"cp1_chemical_palette",
  Cp2ChemicalPalette = <any>"cp2_chemical_palette",
  Cp3ChemicalPalette = <any>"cp3_chemical_palette",
  Cp4ChemicalPalette = <any>"cp4_chemical_palette",
  Cp5ChemicalPalette = <any>"cp5_chemical_palette",
  Cp6ChemicalPalette = <any>"cp6_chemical_palette",
  Cp7ChemicalPalette = <any>"cp7_chemical_palette",
  Cp8ChemicalPalette = <any>"cp8_chemical_palette",
  Cp9ChemicalPalette = <any>"cp9_chemical_palette",
  _20gpDryVan = <any>"20gp_dry_van",
  _40gpDryVan = <any>"40gp_dry_van",
  _40hcHighCube = <any>"40hc_high_cube",
  _45hcHighCube = <any>"45hc_high_cube",
  _20reTemperatureControlled = <any>"20re_temperature_controlled",
  _40reTemperatureControlled = <any>"40re_temperature_controlled",
  _40rhTemperatureControlledHighCube = <any>(
    "40rh_temperature_controlled_high_cube"
  ),
  _20otOpenTop = <any>"20ot_open_top",
  _40otOpenTop = <any>"40ot_open_top",
  _40hwPaletteHighCube = <any>"40hw_palette_high_cube",
  _45hwPaletteHighCube = <any>"45hw_palette_high_cube",
  _20vhVentilatedContainer = <any>"20vh_ventilated_container",
  Eur6 = <any>"eur_6",
  Eur2 = <any>"eur_2",
  Eur3 = <any>"eur_3",
  ContainerPalette = <any>"container_palette",
  Oversized = <any>"oversized",
}
/**
 *
 * @export
 */
export type Lon = number;
/**
 *
 * @export
 * @interface Message
 */
export interface Message {
  /**
   *
   * @type {number}
   * @memberof Message
   */
  id?: number;
  /**
   *
   * @type {User}
   * @memberof Message
   */
  sender?: User;
  /**
   *
   * @type {User}
   * @memberof Message
   */
  receiver?: User;
  /**
   *
   * @type {string}
   * @memberof Message
   */
  message?: string;
  /**
   *
   * @type {string}
   * @memberof Message
   */
  dateTime?: string;
  /**
   *
   * @type {string}
   * @memberof Message
   */
  readDateTime?: string;
  /**
   * Photos, other docs
   * @type {any}
   * @memberof Message
   */
  attachment?: any;
}
/**
 *
 * @export
 * @interface MessageList
 */
export interface MessageList {
  /**
   *
   * @type {number}
   * @memberof MessageList
   */
  id?: number;
  /**
   *
   * @type {number}
   * @memberof MessageList
   */
  prevOffset?: number;
  /**
   *
   * @type {number}
   * @memberof MessageList
   */
  nextOffset?: number;
  /**
   *
   * @type {Array<Message>}
   * @memberof MessageList
   */
  message?: Array<Message>;
}
/**
 *
 * @export
 * @interface OperationType
 */
export interface OperationType {
  /**
   *
   * @type {number}
   * @memberof OperationType
   */
  id?: number;
  /**
   *
   * @type {OperationTypeEnum}
   * @memberof OperationType
   */
  type?: OperationTypeEnum;
}
/**
 *
 * @export
 * @enum {string}
 */
export enum OperationTypeEnum {
  REST = <any>"REST",
  TANKING = <any>"TANKING",
  UNLOAD = <any>"UNLOAD",
  LOAD = <any>"LOAD",
  WAITING = <any>"WAITING",
  MAINTENANCE = <any>"MAINTENANCE",
  EMPTYRUN = <any>"EMPTY_RUN",
  FERRY = <any>"FERRY",
  CUSTOMS = <any>"CUSTOMS",
}
/**
 *
 * @export
 * @interface Order
 */
export interface Order {
  /**
   *
   * @type {number}
   * @memberof Order
   */
  id?: number;
  /**
   *
   * @type {Freight}
   * @memberof Order
   */
  freight?: Freight;
  /**
   *
   * @type {Vehicle}
   * @memberof Order
   */
  vehicle?: Vehicle;
  /**
   *
   * @type {OrderStatus}
   * @memberof Order
   */
  status?: OrderStatus;
  /**
   *
   * @type {Route}
   * @memberof Order
   */
  route?: Route;
  /**
   *
   * @type {User}
   * @memberof Order
   */
  createdBy?: User;
  /**
   *
   * @type {User}
   * @memberof Order
   */
  approvedBy?: User;
}
/**
 *
 * @export
 * @interface OrderStatus
 */
export interface OrderStatus {
  /**
   *
   * @type {number}
   * @memberof OrderStatus
   */
  id?: number;
  /**
   *
   * @type {OrderStatusEnum}
   * @memberof OrderStatus
   */
  status?: OrderStatusEnum;
}
/**
 *
 * @export
 * @enum {string}
 */
export enum OrderStatusEnum {
  INITIAL = <any>"INITIAL",
  DRAFT = <any>"DRAFT",
  CREATED = <any>"CREATED",
  AWAITINGAPPROVAL = <any>"AWAITING_APPROVAL",
  PENDING = <any>"PENDING",
  ACCEPTED = <any>"ACCEPTED",
  SENDED = <any>"SENDED",
  CONFIRMED = <any>"CONFIRMED",
  VEHICLEARRIVED = <any>"VEHICLE_ARRIVED",
  LOADINGSTARTED = <any>"LOADING_STARTED",
  UNLOADINGSTARTED = <any>"UNLOADING_STARTED",
  LOADINGFINISHED = <any>"LOADING_FINISHED",
  UNLOADINGFINISHED = <any>"UNLOADING_FINISHED",
  VEHICLELEFT = <any>"VEHICLE_LEFT",
  NOTLOADED = <any>"NOT_LOADED",
  NOTUNLOADED = <any>"NOT_UNLOADED",
  LOADINGREFUSED = <any>"LOADING_REFUSED",
  UNLOADINGREFUSED = <any>"UNLOADING_REFUSED",
  NOVEHICLE = <any>"NO_VEHICLE",
  DELIVERING = <any>"DELIVERING",
  DELAYING = <any>"DELAYING",
  ARRIVAL = <any>"ARRIVAL",
  EARLYARRIVAL = <any>"EARLY_ARRIVAL",
  ACCIDENT = <any>"ACCIDENT",
  DELIVERED = <any>"DELIVERED",
  RETURNED = <any>"RETURNED",
  CLOSED = <any>"CLOSED",
}
/**
 *
 * @export
 * @interface PaymentData
 */
export interface PaymentData {
  /**
   *
   * @type {number}
   * @memberof PaymentData
   */
  id?: number;
  /**
   *
   * @type {Currency}
   * @memberof PaymentData
   */
  currency?: Currency;
  /**
   *
   * @type {PaymentTermin}
   * @memberof PaymentData
   */
  paymentTerms?: PaymentTermin;
  /**
   *
   * @type {number}
   * @memberof PaymentData
   */
  paymentPeriod?: number;
  /**
   *
   * @type {PaymentType}
   * @memberof PaymentData
   */
  paymentType?: PaymentType;
  /**
   *
   * @type {number}
   * @memberof PaymentData
   */
  VAT?: number;
}
/**
 *
 * @export
 * @interface PaymentTermin
 */
export interface PaymentTermin {
  /**
   *
   * @type {number}
   * @memberof PaymentTermin
   */
  id?: number;
  /**
   *
   * @type {PaymentTerminEnum}
   * @memberof PaymentTermin
   */
  termin?: PaymentTerminEnum;
}
/**
 *
 * @export
 * @enum {string}
 */
export enum PaymentTerminEnum {
  Deferred = <any>"deferred",
  PaymentOnUnloading = <any>"payment_on_unloading",
  PaymentInAdvance = <any>"payment_in_advance",
}
/**
 *
 * @export
 * @interface PaymentType
 */
export interface PaymentType {
  /**
   *
   * @type {number}
   * @memberof PaymentType
   */
  id?: number;
  /**
   *
   * @type {PaymentTypeEnum}
   * @memberof PaymentType
   */
  type?: PaymentTypeEnum;
}
/**
 *
 * @export
 * @enum {string}
 */
export enum PaymentTypeEnum {
  CASH = <any>"CASH",
  BANKTRANSFER = <any>"BANK_TRANSFER",
  CHECK = <any>"CHECK",
  ENCASHMENT = <any>"ENCASHMENT",
  CREDITLETTER = <any>"CREDIT_LETTER",
  CARD = <any>"CARD",
  OTHER = <any>"OTHER",
}
/**
 *
 * @export
 * @interface RestType
 */
export interface RestType {
  /**
   *
   * @type {number}
   * @memberof RestType
   */
  id?: number;
  /**
   *
   * @type {RestTypeEnum}
   * @memberof RestType
   */
  type?: RestTypeEnum;
}
/**
 *
 * @export
 * @enum {string}
 */
export enum RestTypeEnum {
  _15M = <any>"15M",
  _30M = <any>"30M",
  _45M = <any>"45M",
  _3H = <any>"3H",
  _7H = <any>"7H",
  _9H = <any>"9H",
  _11H = <any>"11H",
  _24H = <any>"24H",
  _45H = <any>"45H",
  OTHER = <any>"OTHER",
}
/**
 *
 * @export
 * @interface Route
 */
export interface Route {
  /**
   *
   * @type {number}
   * @memberof Route
   */
  id?: number;
  /**
   *
   * @type {string}
   * @memberof Route
   */
  mapLink?: string;
  /**
   * Let there be array
   * @type {Array<Spot>}
   * @memberof Route
   */
  spots?: Array<Spot>;
  /**
   *
   * @type {number}
   * @memberof Route
   */
  tollFee?: number;
  /**
   *
   * @type {number}
   * @memberof Route
   */
  ferryFee?: number;
  /**
   *
   * @type {number}
   * @memberof Route
   */
  estimateFuelConsumption?: number;
  /**
   *
   * @type {RouteStatus}
   * @memberof Route
   */
  status?: RouteStatus;
  /**
   *
   * @type {string}
   * @memberof Route
   */
  notes?: string;
}
/**
 *
 * @export
 * @interface RouteStatus
 */
export interface RouteStatus {
  /**
   *
   * @type {number}
   * @memberof RouteStatus
   */
  id?: number;
  /**
   *
   * @type {RouteStatusEnum}
   * @memberof RouteStatus
   */
  status?: RouteStatusEnum;
}
/**
 *
 * @export
 * @enum {string}
 */
export enum RouteStatusEnum {
  WaitingForAcceptance = <any>"waiting_for_acceptance",
  Accepted = <any>"accepted",
  Declined = <any>"declined",
  Modified = <any>"modified",
}
/**
 *
 * @export
 * @interface Spot
 */
export interface Spot {
  /**
   *
   * @type {number}
   * @memberof Spot
   */
  id?: number;
  /**
   *
   * @type {string}
   * @memberof Spot
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof Spot
   */
  description?: string;
  /**
   *
   * @type {boolean}
   * @memberof Spot
   */
  isFerry?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof Spot
   */
  isCustoms?: boolean;
  /**
   *
   * @type {OperationType}
   * @memberof Spot
   */
  operationType?: OperationType;
  /**
   *
   * @type {boolean}
   * @memberof Spot
   */
  isEarlierAcceptable?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof Spot
   */
  isLateAcceptable?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof Spot
   */
  isActual?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof Spot
   */
  isNext?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof Spot
   */
  isPrevious?: boolean;
  /**
   * Estimated arriving time. Timestamp with timezone
   * @type {string}
   * @memberof Spot
   */
  ETA?: string;
  /**
   * Actual arriving time. Timestamp with timezone
   * @type {string}
   * @memberof Spot
   */
  ATA?: string;
  /**
   * Estimated pickup/loading
   * @type {number}
   * @memberof Spot
   */
  EPL?: number;
  /**
   * Actual pickup/loading
   * @type {number}
   * @memberof Spot
   */
  APL?: number;
  /**
   * Timestamp with timezone
   * @type {string}
   * @memberof Spot
   */
  estimateFinishTime?: string;
  /**
   * Timestamp with timezone
   * @type {string}
   * @memberof Spot
   */
  actualFinishTime?: string;
  /**
   *
   * @type {Address}
   * @memberof Spot
   */
  address?: Address;
  /**
   *
   * @type {Load}
   * @memberof Spot
   */
  load?: Load;
}
/**
 *
 * @export
 * @interface User
 */
export interface User {
  /**
   *
   * @type {string}
   * @memberof User
   */
  id?: string;
  /**
   *
   * @type {string}
   * @memberof User
   */
  firstName?: string;
  /**
   *
   * @type {string}
   * @memberof User
   */
  secondName?: string;
  /**
   * unique
   * @type {string}
   * @memberof User
   */
  email: string;
  /**
   * unique
   * @type {string}
   * @memberof User
   */
  username?: string;
  /**
   *
   * @type {string}
   * @memberof User
   */
  password?: string;
  /**
   *
   * @type {Array<UserRole>}
   * @memberof User
   */
  roles?: Array<UserRole>;
  /**
   *
   * @type {string}
   * @memberof User
   */
  phone?: string;
  /**
   * Array of Company users group ID user belongs to
   * @type {Array<Group>}
   * @memberof User
   */
  groups?: Array<Group>;
  /**
   *
   * @type {Array<any>}
   * @memberof User
   */
  externalIdsAttributes?: Array<any>;
  /**
   *
   * @type {string}
   * @memberof User
   */
  avatar?: string;
  /**
   *
   * @type {Array<Company>}
   * @memberof User
   */
  companies?: Array<Company>;
  /**
   *
   * @type {Array<Document>}
   * @memberof User
   */
  documents?: Array<Document>;
  /**
   *
   * @type {FleetUserPerformance}
   * @memberof User
   */
  fleetUserPerformance?: FleetUserPerformance;
  /**
   *
   * @type {DriverPerformance}
   * @memberof User
   */
  driverPerformance?: DriverPerformance;
  /**
   *
   * @type {MessageList}
   * @memberof User
   */
  messageList?: MessageList;
  /**
   *
   * @type {string}
   * @memberof User
   */
  driverId?: string;
  /**
   *
   * @type {number}
   * @memberof User
   */
  driverAppPin?: number;
  /**
   *
   * @type {Coordinates}
   * @memberof User
   */
  coordinates?: Coordinates;
  /**
   *
   * @type {string}
   * @memberof User
   */
  driverPrimaryCycle?: string;
  /**
   *
   * @type {HosRegion}
   * @memberof User
   */
  hosRegion?: HosRegion;
  /**
   * Plus HoS is acceptable if returning to base
   * @type {boolean}
   * @memberof User
   */
  isReturningDepot?: boolean;
  /**
   *
   * @type {Address}
   * @memberof User
   */
  depot?: Address;
  /**
   *
   * @type {DutyStatus}
   * @memberof User
   */
  dutyStatus?: DutyStatus;
  /**
   *
   * @type {DriverSchedule}
   * @memberof User
   */
  driverSchedule?: DriverSchedule;
}
/**
 *
 * @export
 * @interface UserRole
 */
export interface UserRole {
  /**
   *
   * @type {number}
   * @memberof UserRole
   */
  id?: number;
  /**
   *
   * @type {UserRoleEnum}
   * @memberof UserRole
   */
  role?: UserRoleEnum;
}
/**
 *
 * @export
 * @enum {string}
 */
export enum UserRoleEnum {
  ADMIN = <any>"ADMIN",
  SYSTEM = <any>"SYSTEM",
  ANALYTICS = <any>"ANALYTICS",
  DRIVER = <any>"DRIVER",
  FLEETUSER = <any>"FLEET_USER",
  OWNER = <any>"OWNER",
}
/**
 * Info about a vehicle
 * @export
 * @interface Vehicle
 */
export interface Vehicle {
  /**
   *
   * @type {number}
   * @memberof Vehicle
   */
  id?: number;
  /**
   *
   * @type {Company}
   * @memberof Vehicle
   */
  company?: Company;
  /**
   * Unique vehicle number
   * @type {string}
   * @memberof Vehicle
   */
  number?: string;
  /**
   *
   * @type {VehicleClass}
   * @memberof Vehicle
   */
  _class?: VehicleClass;
  /**
   * Vehicle model name, if it exists
   * @type {string}
   * @memberof Vehicle
   */
  model?: string;
  /**
   *
   * @type {string}
   * @memberof Vehicle
   */
  vin?: string;
  /**
   *
   * @type {string}
   * @memberof Vehicle
   */
  eldDeviceId?: string;
  /**
   *
   * @type {string}
   * @memberof Vehicle
   */
  externalIdsAttributes?: string;
  /**
   *
   * @type {CargoType}
   * @memberof Vehicle
   */
  cargoType?: CargoType;
  /**
   *
   * @type {CargoData}
   * @memberof Vehicle
   */
  cargoData?: CargoData;
  /**
   *
   * @type {Asset}
   * @memberof Vehicle
   */
  asset?: Asset;
  /**
   * If the vehicle can collect telemetry data
   * @type {boolean}
   * @memberof Vehicle
   */
  hasTelemetry?: boolean;
  /**
   *
   * @type {Group}
   * @memberof Vehicle
   */
  group?: Group;
  /**
   *
   * @type {FuelType}
   * @memberof Vehicle
   */
  fuelType?: FuelType;
  /**
   *
   * @type {Array<CargoType>}
   * @memberof Vehicle
   */
  availableAssetTypes?: Array<CargoType>;
  /**
   *
   * @type {Array<Document>}
   * @memberof Vehicle
   */
  documents?: Array<Document>;
  /**
   *
   * @type {VehicleTelemetry}
   * @memberof Vehicle
   */
  vehicleTelemetry?: VehicleTelemetry;
  /**
   *
   * @type {boolean}
   * @memberof Vehicle
   */
  isAvailable?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof Vehicle
   */
  isAvailableForPartialLoad?: boolean;
  /**
   *
   * @type {VehicleSchedule}
   * @memberof Vehicle
   */
  vehicleSchedule?: VehicleSchedule;
}
/**
 *
 * @export
 * @interface VehicleClass
 */
export interface VehicleClass {
  /**
   *
   * @type {number}
   * @memberof VehicleClass
   */
  id?: number;
  /**
   *
   * @type {VehicleClassEnum}
   * @memberof VehicleClass
   */
  _class?: VehicleClassEnum;
}
/**
 *
 * @export
 * @enum {string}
 */
export enum VehicleClassEnum {
  Bus = <any>"bus",
  Lorry = <any>"lorry",
  DoubleTrailer = <any>"double_trailer",
  Solo = <any>"solo",
  AnySize = <any>"any_size",
  Other = <any>"other",
}
/**
 *
 * @export
 * @interface VehicleCycle
 */
export interface VehicleCycle {
  /**
   *
   * @type {number}
   * @memberof VehicleCycle
   */
  id?: number;
  /**
   *
   * @type {Array<User>}
   * @memberof VehicleCycle
   */
  drivers?: Array<User>;
  /**
   * Timestamp for driver1 shiftEnd/driver2 shiftStart
   * @type {number}
   * @memberof VehicleCycle
   */
  nextDriverChangeoverTime?: number;
  /**
   * All orders in actual vechicle cycle
   * @type {Array<Order>}
   * @memberof VehicleCycle
   */
  orders?: Array<Order>;
  /**
   * Timestamp with timezone
   * @type {string}
   * @memberof VehicleCycle
   */
  start?: string;
  /**
   * Timestamp with timezone
   * @type {string}
   * @memberof VehicleCycle
   */
  end?: string;
}
/**
 *
 * @export
 */
export type VehicleSchedule = Array<VehicleCycle>;
/**
 *
 * @export
 * @interface VehicleStatus
 */
export interface VehicleStatus {
  /**
   *
   * @type {number}
   * @memberof VehicleStatus
   */
  id?: number;
  /**
   *
   * @type {VehicleStatusEnum}
   * @memberof VehicleStatus
   */
  status?: VehicleStatusEnum;
}
/**
 *
 * @export
 * @enum {string}
 */
export enum VehicleStatusEnum {
  DRIVING = <any>"DRIVING",
  STOP = <any>"STOP",
  PARKING = <any>"PARKING",
  TANKING = <any>"TANKING",
  MAINTENANCE = <any>"MAINTENANCE",
}
/**
 *
 * @export
 * @interface VehicleTelemetry
 */
export interface VehicleTelemetry {
  /**
   *
   * @type {number}
   * @memberof VehicleTelemetry
   */
  id?: number;
  /**
   *
   * @type {number}
   * @memberof VehicleTelemetry
   */
  totalMileage?: number;
  /**
   *
   * @type {number}
   * @memberof VehicleTelemetry
   */
  totalFuelConsumption?: number;
  /**
   * Total number of worked hours by the vehicle
   * @type {number}
   * @memberof VehicleTelemetry
   */
  engineHours?: number;
  /**
   *
   * @type {VehicleStatus}
   * @memberof VehicleTelemetry
   */
  status?: VehicleStatus;
  /**
   * Last changes. Timestamp with timezone
   * @type {string}
   * @memberof VehicleTelemetry
   */
  statusTime?: string;
  /**
   * Last changes. Timestamp with timezone
   * @type {string}
   * @memberof VehicleTelemetry
   */
  statusChangeTime?: string;
  /**
   *
   * @type {number}
   * @memberof VehicleTelemetry
   */
  speed?: number;
  /**
   *
   * @type {Coordinates}
   * @memberof VehicleTelemetry
   */
  coordinates?: Coordinates;
  /**
   *
   * @type {number}
   * @memberof VehicleTelemetry
   */
  fuel?: number;
  /**
   *
   * @type {number}
   * @memberof VehicleTelemetry
   */
  fuelConsumption?: number;
}
/**
 *
 * @export
 * @enum {string}
 */
export enum WorkingDays {
  MONDAY = <any>"MONDAY",
  TUESDAY = <any>"TUESDAY",
  WEDNESDAY = <any>"WEDNESDAY",
  THURSDAY = <any>"THURSDAY",
  FRIDAY = <any>"FRIDAY",
  SATURDAY = <any>"SATURDAY",
  SUNDAY = <any>"SUNDAY",
}
