import React, { useMemo } from 'react';
import CardUI from '../ui/CardUI';
import CardsUI from "../ui/CardsUI";
import './Cards.css';
import useFormateData from '../../../hooks/useFormateData';
import { useCardsStyles } from '../../../styles/useCardsStyles';
import { GET_WEATHER_ICONS_LINK } from '../../../constans/constans';

const CardsContainer = ({ data, city , setData, isLoading}) => {

    const classes = useCardsStyles();

    const newData = useFormateData(data, setData);

    const cards = useMemo(()=>{
        return newData.map( el => <CardUI
            key={el.datetime}
            temp={el.temp}
            date={el.datetime}
            description={el.weather.description}
            icon={GET_WEATHER_ICONS_LINK + `${el.weather.icon}.png`}
            pres={el.pres}
            humidity={el.rh}
            clouds={el.clouds}
            wind={el.wind_spd}
            classes={classes} />)
    }, [newData, classes]) 

    return <CardsUI city={city} cards={cards} isLoading={isLoading} />
}

export default CardsContainer;
