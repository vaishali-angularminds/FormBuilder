import React from 'react'
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Menu from '@mui/material';
import { MenuItem } from '@mui/material';
import { Select } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { FormGroup } from '@mui/material';
import { Checkbox } from '@mui/material';
import { TextareaAutosize } from '@mui/material';

const FormComponent = (props) => {

    const paperStyle = { padding: 20, width: 480, margin: "20px 30px" };
    const btnstyle = { margin: "20px 0px", width: "85px", };
    // const [data, setdata] = useState(props.formdata)


    const [data, setdata] = useState([]);
    const [result, setResult] = useState({})
    // const [checkArr,setCheckArr] = useState({});
    let hobbies = {}
    useEffect(() => {

        setdata([...data, props.formdata]);

    }, [props.formdata])

    const HandleChange = (val,nm) => {
        let temp={[nm]:val}   
       setResult({...result,...temp})            
    }
const handleCheck = (lbl,checked) => {
    // console.log('checked',checked)
    // console.log('lbl',lbl)
    if(hobbies.hasOwnProperty(lbl)){
        console.log('present')
    }
    else{
        let temp={[lbl]:checked}   
        hobbies ={...hobbies,...temp} 
    }
    setResult({...result,...hobbies})   
    console.log(hobbies)

}
    const handleSubmit = () =>{
        console.log(result)
    }
    //   console.log(result)
    const inputstyle = { margin: "20px 100px", width: "350px",height: "40px"};
    return (
        <>
            <Grid>
                <Paper elevation={10}
                    style={paperStyle}
                >
                    <Grid align="center"  >


                        <h2> Form Fields</h2>
                    </Grid>
                    {data.map((d, i) =>
                    (
                   
                        (() => {
                           
                            switch (d.fieldType) {
                                case 'text':
                                    return (
                                        <TextField
                                            key={i}
                                            style={inputstyle}
                                            label={d.label}
                                            placeholder="Enter label name"
                                            variant="outlined"
                                            onChange={(e) => HandleChange(e.target.value, d.label)}
                                        />);
                                case 'radio':
                                    return (
                                        <FormControl
                                        style={inputstyle }
                                        key={i}>
                                      <InputLabel style={{ marginLeft:'-5px',marginTop:'-30px'}} id="demo-simple-select-label">
                                      <b>  {d.label}</b></InputLabel>
                                        <RadioGroup
                                                // key={i}
                                                // row
                                                aria-labelledby="demo-radio-buttons-group-label"                                              
                                                name="radio-buttons-group"
                                                onChange={(e)=>  HandleChange(e.target.value,d.label)}>
                                            
                                                {d.options.map((op, index) =>
                                                    <FormControlLabel 
                                                    key={index}
                                                    onChange={(e) => HandleChange(e.target.value, d.label)}
                                                    control={<Radio value={op} />} label={op} />
                                                )}

                                            </RadioGroup>
                                        </FormControl>
                                    );
                                    
                                    
                                   
                                    case 'checkbox':
                                        return (
                                            <FormGroup 
                                            key={i}
                                            style={{orientation:"vertical",margin: "20px 100px", marginTop:'50px'}}
                                            >
                                              <InputLabel  
                                               style={{ marginLeft:'-100px',marginTop:'10px'}}
                                               id="demo-simple-select-label">
                                             <b>  {d.label}</b></InputLabel>
                                                {d.options.map((op, index) =>
    
                                                    <FormControlLabel
                                                    key={index}
                                                    onChange={(e) => {handleCheck(op,e.target.checked)}}
                                                    control={<Checkbox value={op} key={index} />} label={op} />
                                                   
    
                                                )}
    
                                            </FormGroup>
                                        )
                                        case 'textarea':
                                    return (
                                        <div 
                                        key={i}                                   
                                        >
                                      <FormControl  >
                                           <InputLabel   style={{ marginLeft:'20px',marginTop:'10px'}} id="demo-simple-select-label">{d.label}</InputLabel>
                       
                                           
                                            <TextareaAutosize
                                             style={inputstyle}
                                                // style={{ marginLeft: '10px', height: '60px', width: '340px' }}
                                               
                                                onChange={(e) => HandleChange(e.target.value, d.label)}
                                                label={d.name}
                                                aria-label={d.label}
                                                placeholder="Empty"

                                            />
                                            </FormControl>
                                        </div>
                                    );


                                case 'select':
                                    return (
                                        <div style={{ marginTop: '20px', marginLeft: '0px' }} key={i}>
                                      <FormControl  style={inputstyle}>
                                           <InputLabel  style={{ marginLeft:'15px'}} id="demo-simple-select-label">{d.label}</InputLabel>
                       
                                            <Select
                                                onChange={(e) => HandleChange(e.target.value, d.label)}
                                                key={i}
                                               
                                                // style={{ width: '150px' }}
                                                label="select field type"
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"

                                            >
                                                {d.options.map((op, index) =>
                                                    <MenuItem value={op} key={index}>{op}</MenuItem>
                                                )}


                                            </Select>
                                        </FormControl>
                                        </div>
                                    );
                                default:
                                    return <></>;
                            }
                        })()
                      
                    ) )}
                    {data.length >1 && 
                     <Button
                        color="primary"
                        onClick={() => {
                            handleSubmit();
                        }}
                        variant="contained"
                        style={btnstyle}
                    >
                        Submit
                    </Button>
                    }
                </Paper>

            </Grid>
        </>

    )

}
export default FormComponent