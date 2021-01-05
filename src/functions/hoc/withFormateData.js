import React, { useCallback } from "react";
import { formateDate, formateNum, formateNumToFixed } from './functions.js';

const withFormateData = (Component) => {
  return (props) => {
    const formateData = useCallback((data) => {
      const newData = [...data];

      newData.map(el => {
        el.temp = formateNum(el.temp);
        el.datetime = formateDate(el.datetime);
        el.pres = formateNum(el.pres / 1.333);
        el.wind_spd = formateNumToFixed(el.wind_spd);

        return newData
      })

      return newData;
    }, []);

    return <Component {...props} formateData={formateData} />
  }
}

export default withFormateData;