export function ForecastModel(data) {
  const [date, hour] = new Date()
    .toLocaleString("sv-SE", {
      timeZone: "America/Sao_Paulo",
    })
    .split(" ");

  const forecast = (data?.forecast?.forecastday ?? []).find(
    (item) => item.date === date,
  );

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
      alertEvent: data?.alerts?.alert[0]?.event ?? null, //AVISO
      alertDesc: data?.alerts?.alert[0]?.event ?? null, //DESCRIÇÃO AVISO
    },

    forecast: (forecast?.hour ?? [])
      .filter((item) => {
        const itemHour = item.time.split(" ")[1].split(":")[0];

        return Number(hour.split(":")[0]) <= Number(itemHour);
      })
      .map((item) => {
        return {
          id: item.time_epoch,
          hour: item.time.split(" ")[1],
          icon: item.condition.icon,
          temperature: `${item.temp_c}°`,
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
      };
    }),
  };
}
