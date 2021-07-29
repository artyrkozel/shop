import React, { useState } from "react";
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { FormGroup } from "@material-ui/core";
import { useEffect } from "react";
import { useCallback } from "react";


const Accordiont = ({title, typeHandler}) => {
    const [expanded, setExpanded] = useState('panel1');
    const [state, setState] = React.useState({
        Modular: false,
        HalfFace: false,
        FullFace: false,
        Dirt: false,
    });
    
    const handleChange2 = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        
    };
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const localTypeHandler = useCallback(() => typeHandler(state), [state, typeHandler])

    useEffect(() => {
        localTypeHandler()
    }, [state, localTypeHandler])

    return (
        <div className="filters-panael">
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography >{title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox checked={state.Modular} onChange={handleChange2} name="Modular" />}
                            label="Modular"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={state.HalfFace} onChange={handleChange2} name="HalfFace" />}
                            label="HalfFace"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={state.FullFace} onChange={handleChange2} name="FullFace" />}
                            label="FullFace"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={state.Dirt} onChange={handleChange2} name="Dirt" />}
                            label="Dirt"
                        />
                    </FormGroup>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default Accordiont