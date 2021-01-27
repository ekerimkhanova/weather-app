import { useEffect } from "react";
import { PRESSURE_CONST } from "../constans/constans";
import { formateDate, formateNum, formateNumToFixed } from '../functions/functions';

const useFormateData = (data, setData) => {

  useEffect(() => {
    setData(
      [
        ...data.map(el => {
          return {
            ...el,
            temp: formateNum(el.temp),
            datetime: formateDate(el.datetime),
            pres: formateNum(el.pres / PRESSURE_CONST),
            wind_spd: formateNumToFixed(el.wind_spd)
          }
        })
      ])
  }, [])

  return data
}

export default useFormateData;