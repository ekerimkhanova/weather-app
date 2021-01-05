import React from 'react';
import withFormateData from '../../../functions/hoc/withFormateData';
import CardUI from '../Card/CardUI';
import CardsUI from "../ui/CardsUI";
import { makeStyles } from "@material-ui/core/styles";
import './Cards.css';

const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: 14
    },

    contentCard: {
        "&:last-child": {
            padding: 16
        },
        textAlign: "center",
    },
    card: {
        borderRadius: 0,
    }
}));

const CardsContainer = ({ data, city, formateData }) => {

    const classes = useStyles();

    const newData = formateData(data);

    const cards = newData.map((el, i) => <CardUI
        key={i}
        temp={el.temp}
        date={el.datetime}
        description={el.weather.description}
        icon={`https://www.weatherbit.io/static/img/icons/${el.weather.icon}.png`}
        pres={el.pres}
        humidity={el.rh}
        clouds={el.clouds}
        wind={el.wind_spd}
        classes={classes} />)

    return <CardsUI city={city} cards={cards} />
}

export default withFormateData(CardsContainer);
