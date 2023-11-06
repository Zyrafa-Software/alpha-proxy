import { supabase } from "./client";
import type { Database } from "./types/database";
import { VehicleStatusEnum } from "./types/api/api";

type Tables = Database["public"]["Tables"];

export async function updateTelemetry(input: VehicleTelemetryApi, date: Date) {
  const { data: vehicle, error: errorVehicle } = await supabase
    .from("vehicles")
    .select("id")
    .eq("external_ids_attributes", input.oid)
    .single();

  if (errorVehicle) {
    throw errorVehicle;
  }

  if (!vehicle) {
    return telemetry;
  }

  const data = await parseTelemetry(input, vehicle.id, date);

  const { data: result, error } = await supabase
    .from("vehicle_telemetry")
    .insert(data)
    .select("id")
    .single();

  if (error) {
    throw error;
  }

  return result?.id ?? null;
}

export async function parseTelemetry(
  input: VehicleTelemetryApi,
  vehicleId: number,
  date: Date
) {
  let telemetry: Tables["vehicle_telemetry"]["Insert"] = {
    address: null,
    engine_hours: null,
    fuel: null,
    fuel_consumption: null,
    lat: null,
    lon: null,
    speed: null,
    status: null,
    status_time: null,
    status_start: null,
    status_end: null,
    total_fuel_consumption: null,
    total_mileage: null,
    vehicle_id: vehicleId,
  };

  if (input.result !== "Ok" || input.oid === undefined) {
    return telemetry;
  }

  const sensors = input.sensors;

  if (input.lat) {
    telemetry.lat = input.lat;
  }
  if (input.lon) {
    telemetry.lon = input.lon;
  }
  if (Array.isArray(sensors)) {
    sensors.forEach(({ name, val }) => {
      switch (name) {
        case "Parking": {
          telemetry.status = VehicleStatusEnum.PARKING.toString();
          const statusTime = parseStatusTime(val);
          telemetry.status_time = validStatusTime(statusTime);
          telemetry.status_start = calculateStatusStartTime(
            statusTime,
            date
          ).toUTCString();
          telemetry.status_end = calculateStatusEndTime(date).toUTCString();
          break;
        }
        case "Driving":
        case "Drive": {
          telemetry.status = VehicleStatusEnum.DRIVING.toString();
          const statusTime = parseStatusTime(val);
          telemetry.status_time = validStatusTime(statusTime);
          telemetry.status_start = calculateStatusStartTime(
            statusTime,
            date
          ).toUTCString();
          telemetry.status_end = calculateStatusEndTime(date).toUTCString();
          break;
        }
        case "Accumulated mileage sensor": {
          telemetry.total_mileage = parseFloat(val);
          break;
        }
        case "Address": {
          telemetry.address = val;
          break;
        }
        case "Топливо": {
          telemetry.fuel = parseFloat(val);
          break;
        }
        case "Speed": {
          telemetry.speed = parseFloat(val);
          break;
        }
      }
    });
  }

  return telemetry;
}

export function calculateStatusStartTime(statusTime: Date, date: Date): Date {
  return new Date(date.getTime() - statusTime.getTime());
}

export function calculateStatusEndTime(date: Date): Date {
  return new Date(date);
}

function validStatusTime(statusTime: Date): number {
  return Math.ceil(statusTime.getTime() / 1000);
}

function parseStatusTime(string: string): Date {
  const daysRegex = /(\d+)d/;
  const daysMatch = string.match(daysRegex);

  const timeRegex = /(\d+):(\d+):(\d+)$/;
  const timeMatch = string.match(timeRegex);

  const zeroDate = new Date(0);

  if (daysMatch && daysMatch[1]) {
    zeroDate.setUTCDate(Number(daysMatch[1]) + 1);
  }

  if (timeMatch && timeMatch[1] && timeMatch[2] && timeMatch[3]) {
    zeroDate.setUTCHours(
      Number(timeMatch[1]),
      ...timeMatch.slice(2, 4).map(Number)
    );
  }

  return zeroDate;
}

export type VehicleTelemetryApi = {
  oid: number; // vehicles.external_id_attributes
  Name: string; // vehicles.name
  IMEI: string;
  cid: number;
  dt: string;
  properties: VehicleTelemetryPropertyApi[];
  sensors: VehicleTelemetrySensorApi[];
  result: string;
  parent_id: number;
  name: string;
  address: string;
  obj_icon: string;
  obj_icon_height: number;
  obj_icon_width: number;
  obj_icon_rotate: boolean;
  status: number;
  lat: number;
  lon: number;
  direction: number;
  move: number;
  block_reason: number;
};

type VehicleTelemetryPropertyApi = { name: string; val: string };

type VehicleTelemetrySensorApi = {
  sid: number;
  dt: string;
  val: string;
  ico: string;
  name: string;
  st: number;
  haveChart: boolean;
};

export const telemetry: VehicleTelemetryApi = {
  oid: 8748,
  Name: "MAN WGM 5123F",
  IMEI: "350317175102890",
  cid: 0,
  dt: "0001-01-01 00:00:00",
  properties: [
    { name: "License plate", val: "WGM 5123F" },
    { name: "Roaming", val: "Активен " },
    { name: "Vehicle brand", val: "MAN белый" },
    { name: "Vehicle Model", val: "TGX 2018 г." },
    { name: "VIN-code", val: "WMA06XZZ1KP114594" },
  ],
  sensors: [
    {
      sid: 0,
      dt: "0001-01-01 00:00:00",
      ico: "parking_m.png",
      name: "Parking",
      val: "0:00:00",
      st: 5,
      haveChart: false,
    },
    {
      sid: 129393,
      dt: "0001-01-01 00:00:00",
      ico: "therm.png",
      name: "°t Топлива в Баке 1",
      val: "20 °С",
      st: 5,
      haveChart: true,
    },
    {
      sid: 129394,
      dt: "0001-01-01 00:00:00",
      ico: "therm.png",
      name: "°t Топлива в Баке 2",
      val: "20 °С",
      st: 5,
      haveChart: true,
    },
    {
      sid: 129404,
      dt: "0001-01-01 00:00:00",
      ico: "engine.png",
      name: "Accumulated mileage sensor",
      val: "490845.39 km",
      st: 5,
      haveChart: false,
    },
    {
      sid: 129374,
      dt: "2023-10-05 14:25:13",
      ico: "addr.png",
      name: "Address",
      val: "Мазовецьке воєводство, gmina Lesznowola, Jabłonowo, Aleja Krakowska, 63",
      st: 5,
      haveChart: true,
    },
    {
      sid: 129379,
      dt: "0001-01-01 00:00:00",
      ico: "chart.png",
      name: "Altitude above the sea",
      val: "123 m",
      st: 5,
      haveChart: true,
    },
    {
      sid: 129381,
      dt: "0001-01-01 00:00:00",
      ico: "engine.png",
      name: "CAN Total mileage",
      val: "491087.12 km",
      st: 5,
      haveChart: true,
    },
    {
      sid: 129391,
      dt: "0001-01-01 00:00:00",
      ico: "speed.png",
      name: "CAN Обороты Двигателя",
      val: "0 об/мин",
      st: 5,
      haveChart: true,
    },
    {
      sid: 129383,
      dt: "0001-01-01 00:00:00",
      ico: "chart.png",
      name: "CAN Положение педали Газа",
      val: "0 %",
      st: 5,
      haveChart: true,
    },
    {
      sid: 129382,
      dt: "0001-01-01 00:00:00",
      ico: "fuel_benz.png",
      name: "CAN Расход топлива",
      val: "0 l",
      st: 5,
      haveChart: true,
    },
    {
      sid: 129392,
      dt: "0001-01-01 00:00:00",
      ico: "speed.png",
      name: "CAN Скорость",
      val: "0 км/ч",
      st: 5,
      haveChart: true,
    },
    {
      sid: 129395,
      dt: "0001-01-01 00:00:00",
      ico: "therm.png",
      name: "CAN Температура двигателя",
      val: "39 °С",
      st: 5,
      haveChart: true,
    },
    {
      sid: 129385,
      dt: "0001-01-01 00:00:00",
      ico: "fuel.png",
      name: "CAN Уровень Топлива",
      val: "17 %",
      st: 5,
      haveChart: true,
    },
    {
      sid: 129376,
      dt: "0001-01-01 00:00:00",
      ico: "epwr.png",
      name: "External power supply",
      val: "0 V",
      st: 5,
      haveChart: true,
    },
    {
      sid: 129373,
      dt: "0001-01-01 00:00:00",
      ico: "sat.png",
      name: "GPS/GLONASS Sensor",
      val: "20 супутників",
      st: 5,
      haveChart: true,
    },
    {
      sid: 129384,
      dt: "0001-01-01 00:00:00",
      ico: "gsm.png",
      name: "GSM signal level",
      val: "80 %",
      st: 5,
      haveChart: true,
    },
    {
      sid: 129377,
      dt: "0001-01-01 00:00:00",
      ico: "ipwr.png",
      name: "Internal power supply",
      val: "3.3 V",
      st: 5,
      haveChart: true,
    },
    {
      sid: 129402,
      dt: "0001-01-01 00:00:00",
      ico: "clock.png",
      name: "Sensor for accumulated Driving Hours",
      val: "913.1 h",
      st: 5,
      haveChart: false,
    },
    {
      sid: 129375,
      dt: "0001-01-01 00:00:00",
      ico: "speed.png",
      name: "Speed",
      val: "0 kmph",
      st: 5,
      haveChart: true,
    },
    {
      sid: 129396,
      dt: "0001-01-01 00:00:00",
      ico: "engine.png",
      name: "Автономка",
      val: "Inactive",
      st: 5,
      haveChart: true,
    },
    {
      sid: 129389,
      dt: "0001-01-01 00:00:00",
      ico: "fuel.png",
      name: "Бак 1 (580 л.)",
      val: "114.07 l",
      st: 5,
      haveChart: true,
    },
    {
      sid: 129390,
      dt: "0001-01-01 00:00:00",
      ico: "fuel.png",
      name: "Бак 2 (582 л.)",
      val: "50.57 l",
      st: 5,
      haveChart: true,
    },
    {
      sid: 129378,
      dt: "0001-01-01 00:00:00",
      ico: "engine.png",
      name: "Зажигание",
      val: "Inactive",
      st: 5,
      haveChart: true,
    },
    {
      sid: 129403,
      dt: "0001-01-01 00:00:00",
      ico: "fuel.png",
      name: "Топливо",
      val: "164.65 l",
      st: 5,
      haveChart: true,
    },
  ],
  result: "Ok",
  parent_id: 2326,
  name: "MAN WGM 5123F",
  address:
    "Мазовецьке воєводство, gmina Lesznowola, Jabłonowo, Aleja Krakowska, 63",
  obj_icon: "benz.png",
  obj_icon_height: 45,
  obj_icon_width: 20,
  obj_icon_rotate: true,
  status: 5,
  lat: 52.05009,
  lon: 20.86492,
  direction: 250.0,
  move: 100.0,
  block_reason: 0,
};
