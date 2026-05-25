import moment from "moment";

import { ForecastModel, FutureForecastModel } from "../models/ForecastModel";
import { apiInstance } from "./ApiInstance";

export async function getForecast(city) {
  const res = await apiInstance.get("forecast", { q: city });

  if (res.success) {
    return ForecastModel(res.body);
  }

  throw new Error("erro na chamada da API");
}

export async function getFutureForecast(city, days) {
  const data = [];

  let date = moment().utc("-03:00").format("YYYY-MM-DD");

  let res = await apiInstance.get("forecast", { q: city, dt: date });

  if (!res.success) throw new Error("erro na chamada da API");

  data.push(res.body);

  for (let i = 0; i < days; i++) {
    date = moment(date).add(1, "day").format("YYYY-MM-DD");

    res = await apiInstance.get("forecast", { q: city, dt: date });

    if (!res.success) throw new Error("erro na chamada da API");

    data.push(res.body);
  }

  return FutureForecastModel(data);
}
