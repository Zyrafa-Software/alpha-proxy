import express from "express";
import { updateTelemetry } from "./mobiteam/updateTelemetry";
const cookieParser = require("cookie-parser");
require("dotenv").config();
const port = process.env.PORT || 4000;
import cors from "cors";
import { Database } from "./mobiteam/types/database";
import nodemailer from "nodemailer";
const path = require("path");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "static")));
app.use(cookieParser());
const request = require("request");
const urlSesion =
  "https://gps.mobiteam.com.ua/api/integration/v1/connect?login=Erp&password=100930&lang=en-us&timezone=3";
const urlTruck =
  "https://gps.mobiteam.com.ua/api/integration/v1/fullobjinfo?oid=8748";
const trucksChange =
  "https://gps.mobiteam.com.ua//api/integration/v1/objectsupdateinfo";
interface TypeTruck {
  oid: number;
  dt: string;
  lat: number;
  lon: number;
  dir: number;
  move: number;
  st: number;
}

let truckFullInfo: any[] = [];

const coockieVar = "set-cookie";

const startRequests = async () => {
  await request(
    {
      method: "GET",
      url: urlSesion,
      qs: {
        param: "edit",
        value: 100,
      },
    },
    function (error: any, response: any, body: any) {
      if (!error && response.statusCode == 200) {
        startRequestTrucksChange(response.headers[coockieVar]);
        setInterval(
          () => startRequestTrucksChange(response.headers[coockieVar]),
          180000
        );
      } else {
        startRequests();
      }
    }
  );
};
const startRequestTrucksChange = async (cookie: any) => {
  await request(
    {
      method: "GET",
      headers: {
        Cookie: `${cookie[0]}; ${cookie[1]}`,
      },
      url: trucksChange,
      qs: {
        param: "edit",
        value: 100,
      },
    },
    async function (error: any, response: any, body: any) {
      if (!error && response.statusCode == 200) {
        const arrChange = JSON.parse(body).objs;
        truckFullInfo.length = 0;
        await Promise.all(
          arrChange.map((element: TypeTruck) => {
            return startRequestTrucksInfo(cookie, element.oid);
          })
        );
        //await Promise.all(truckFullInfo).then(()=>console.log(truckFullInfo))
        //console.log(truckFullInfo)
      }
    }
  );
};
const startRequestTrucksInfo = async (cookie: any, oid: any) => {
  const res = await request(
    {
      method: "GET",
      headers: {
        Cookie: `${cookie[0]}; ${cookie[1]}`,
      },
      url: `https://gps.mobiteam.com.ua/api/integration/v1/fullobjinfo?oid=${oid}`,
      qs: {
        param: "edit",
        value: 100,
      },
    },
    function (error: any, response: any, body: any) {
      if (!error && response.statusCode == 200) {
        //truckFullInfo.push(JSON.parse(body))
        updateTelemetry(JSON.parse(body), new Date());
      }
    }
  );

  return res;
};

app.get("/", async (req, res, next) => {
  res.status(200).json(truckFullInfo);
});

app.post("/send-email", (req, res) => {
  console.log("/send-email", req.body);
  const { email, name, phone, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "gleb.godovanyuk@gmail.com",
      pass: process.env.VITE_MAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: "gleb.godovanyuk@gmail.com, foteev@gmail.com",
    subject: `Spróbuj Żyrafa.top teraz!`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}\n`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error, info);
      res.status(500).json({ success: false, message: "Error" });
    } else {
      console.log("Email sent: " + info.response);
      res.json({
        success: true,
        message: "Dziękujemy, konsultant się skontaktuje z tobą!",
      });
    }
  });
});

const start = async () => {
  try {
    app.listen(port, function () {
      console.log(`Started on localhost:${port}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
startRequests();
