import { Request, Response } from "express";

import axios from "axios";
import prisma from "../../utils/database";

const API_KEY = process.env.API_KEY;

export const createIncidientReport = async (req: Request, res: Response) => {
  try {
    //Validations
    const { client_id, incident_desc, city, country } = req.body;

    if (!client_id || !incident_desc || !city || !country) {
      res.send("Cannot be empty");
    }

    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${API_KEY}`;

    let weatherReport: any;
    await axios
      .get(url)
      .then((response) => {
        weatherReport = response.data!;
      })
      .catch((err) => {
        console.log(err.message);
      });

    const newIncident = await prisma.incidentReport.create({
      data: {
        client_id: client_id,
        country,
        incident_desc,
        city,
        weather_report: weatherReport!,
      },
    });

    res.json(newIncident);
  } catch (error) {
    console.log(error);
  }
};

export const getAllIncidentReports = async (req: Request, res: Response) => {
  try {
    const reports = await prisma.incidentReport.findMany();
    if (reports.length > 0) {
      res.json(reports);
    } else {
      res.send("Reports are Empty");
    }
  } catch (error) {
    console.log(error);
  }
};
