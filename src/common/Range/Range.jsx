import React, {useEffect} from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Card from '@material-ui/core/Card';

function valuetext(value) {
    return `${value}°C`;
}

const RangeSlider =({priceHandler}) => {
   
    const [value, setValue] = React.useState([200, 450]);

    const handleChange = (event, newValue) => {
        localStorage.setItem('price', JSON.stringify(newValue))
        setValue(newValue);
    };

    useEffect(() => {
       let obg = JSON.parse(localStorage.getItem('price'))
       if(obg){
           setValue(obg)
       } 
    }, [])

    useEffect(() => {
        priceHandler(value)
    },[value])
    
    return (
        <Card className="range">
            <Typography id="range-slider" gutterBottom className="range__title">
                Range Price
            </Typography>
            <Typography id="range-slider" gutterBottom className="range__values">
                {`from ${value[0]} to ${value[1]}`}
            </Typography>
            <Slider
                value={value}
                min={200}
                max={450}
                step={10}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
            />
        </Card>
        
    );
}

export default RangeSlider