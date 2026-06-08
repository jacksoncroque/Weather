import moment from "moment";

import { ForecastModel, FutureForecastModel } from "../models/ForecastModel";
import { apiInstance } from "./ApiInstance";

export async function getForecast(city) {
  let today = moment().utc("-03:00").format("YYYY-MM-DD");

  const res = await apiInstance.get("forecast.json", { q: city, dt: today });

  let tomorrow = moment(today).add(1, "day").format("YYYY-MM-DD");

  const res2 = await apiInstance.get("forecast.json", {
    q: city,
    dt: tomorrow,
  });

  if (res.success && res2.success) {
    return ForecastModel(res.body, res2.body);
  }

  throw new Error("erro na chamada da API");
}

export async function getFutureForecast(city, days) {
  const data = [];

  let date = moment().utc("-03:00").format("YYYY-MM-DD");

  let res = await apiInstance.get("forecast.json", { q: city, dt: date });

  if (!res.success) throw new Error("erro na chamada da API");

  data.push(res.body);

  for (let i = 0; i < days; i++) {
    date = moment(date).add(1, "day").format("YYYY-MM-DD");

    res = await apiInstance.get("forecast.json", { q: city, dt: date });

    if (!res.success) throw new Error("erro na chamada da API");

    data.push(res.body);
  }

  return FutureForecastModel(data);
}
