import moment from "moment/min/moment-with-locales";
moment.locale("pt-br");

export function ForecastModel(data, data2) {
  const forecast = data?.forecast?.forecastday[0];
  const forecast2 = data2?.forecast?.forecastday[0];

  return {
    current: {
      uvIndex: data.current.uv, //INDICE UV
      wind: data.current.wind_kph, //VENTO
      windGust: data.current.gust_kph, //RAJADAS DE VENTO
      humidity: data.current.humidity, //UMIDADE
      dewPoint: data.current.dewpoint_c, //PONTO DE ORVALHO
      visibility: data.current.vis_km, //VISIBILIDADE
      pressure: data.current.pressure_mb, //PRESSÃO ATMOSFÉRICA
      feelsLike: data.current.feelslike_c, //SENSAÇÃO TÉRMICA
      windChill: data.current.windchill_c, //TEMPERATURA DO AR
    },

    mainInfo: {
      city: data.location.name, //CIDADE
      temperature: data.current.temp_c, //TEMPERATURA
      condition: data.current.condition.text, //CONDIÇÃO CLIMÁTICA
      highTemp: forecast.day.maxtemp_c, //TEMPERATURA MÁXIMA
      minTemp: forecast.day.mintemp_c, //TEMPERATURA MÍNIMA
      preciptation: data.current.precip_mm, //CHANCE DE CHUVA
      alertEvent: data?.alerts?.alert[0]?.event ?? null, //AVISO
      alertDesc: data?.alerts?.alert[0]?.event ?? null, //DESCRIÇÃO AVISO
    },

    forecast: [
      ...(forecast?.hour ?? []).filter((item) => {
        return (
          Number(moment().utc("-03:00").format("HH")) <=
          Number(moment(item.time).format("HH"))
        );
      }),
      ...(forecast2?.hour ?? []),
    ].map((item) => {
      return {
        id: item.time_epoch,
        hour: item.time.split(" ")[1],
        icon: item.condition.icon,
        temperature: `${Math.ceil(item.temp_c)}°`,
      };
    }),
  };
}

export function FutureForecastModel(data) {
  const forecast = [
    ...data.map((item) => {
      return item.forecast.forecastday[0];
    }),
  ].filter((item) => Boolean(item));

  return {
    forecast: forecast.map((day) => {
      return {
        id: day.date_epoch,
        minTemp: day.day.mintemp_c,
        icon: day.day.condition.icon,
        maxTemp: day.day.maxtemp_c,
        date: day.date,
        dayOfWeek: moment(day.date).format("dddd"),
      };
    }),
  };
}
