// import React from "react";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Menu from '@mui/material';
import { MenuItem } from '@mui/material';
import { Select } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import { Button } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import { useEffect, useState } from 'react';
import { getThemeProps } from '@mui/system';

const FormBuilderComponent = (props) => {

    const init ={label: '',
    fieldType: '',
    name: '',
    options: [],

}
    const [forms, setForms] = useState([])
    const [showOptions, setShowOptions] = useState('block')
    const [formFields, setFormFields] = useState(init);
    // useEffect(()=>{

    // },
    // [showOptions])

    const paperStyle = { padding: 20, width: 480, margin: "20px 30px" };
    const btnstyle = { margin: "20px 100px", width: "85px", };

    const handleSubmit = () => {
        setForms([...forms, formFields])
        console.log(formFields)
        props.setFormData(formFields);
        setFormFields(init)
        localStorage.setItem('data',JSON.stringify(formFields))
    }

    const handleTypeSelect = (e) => {
        setFormFields({ ...formFields, fieldType: e.target.value });
       
    }
    const handleOptions = (val) =>{
        const arr =val.split(",");
        setFormFields({...formFields,options:arr})
    }
    
    const handleName = (val) => {
        const namePattern = `^[a-zA-Z0-9]{1,10}$`

        // no space and special char
        if (val.match(namePattern) !== null) {
            setFormFields({ ...formFields, name: val })
        }
        else {
            alert('name shuld not include space and special characters ')
        }
    }

    
    return (
        <div style={{ display: 'flex' }}>
            <Grid>
                <Paper elevation={10}
                    style={paperStyle}
                >
                    <Grid align="center"  >


                        <h2>Build Form</h2>
                    </Grid>
                    <div style={{ display: 'flex', marginTop: '15px' }}>
                    {/* <InputLabel >label name</InputLabel> */}
                    <TextField
                        style={{ width: '350px' ,marginLeft:'15px'}}
                        label="Label"
                        placeholder="Enter label name"
                        variant="outlined"
                        value={formFields.label}
                        onChange={(e) => setFormFields({ ...formFields, label: e.target.value })}

                       
                    />
                  </div>

                    <div style={{ display: 'flex', marginTop: '15px' }}>
                    <FormControl>
                        <InputLabel  style={{ marginLeft:'15px'}} id="demo-simple-select-label">Field Type</InputLabel>
                        <Select
                            style={{ width: '350px' ,marginLeft:'15px'}}
                            label="select field type"
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={formFields.fieldType}
                            onChange={(e) =>
                                handleTypeSelect(e)
                               
                            }
                        >
                            {/* {console.log(showOptions)} */}
                            <MenuItem value='' selected={true} >select field type</MenuItem>
                            <MenuItem value='text'>text</MenuItem>
                            <MenuItem value='textarea'>TextArea</MenuItem>
                            <MenuItem value='checkbox'>CheckBox</MenuItem>
                            <MenuItem value='select'>Select</MenuItem>
                            <MenuItem value='radio'>Radio</MenuItem>
                        </Select>
                        </FormControl>
                    </div>

                    <div style={{ display: 'flex',marginTop: '15px' }}> 
                    {/* <InputLabel >Field Name</InputLabel> */}
                    <TextField
                        label="name"
                        style={{ width: '350px',marginLeft:'15px' }}
                        variant="outlined"
                        placeholder="Enter Name"
                        value={formFields.name}
                        onChange={(e) =>
                            handleName(e.target.value)
                        }

                    />
                    </div>
                   
                    <div >

                    <div style={{ display:`${formFields.fieldType === 'text' || formFields.fieldType === 'textarea'?'none':'block'}` , marginTop: '15px' }}>
                      
                        <TextField
                            label="options"
                            style={{ width: '350px', marginLeft:'-100px' }}
                            variant="outlined"
                            // required
                            helperText='enter  options separated by comma'
                            placeholder="Enter options"
                            value={formFields.options}
                            onChange={(e) => handleOptions(e.target.value)}

                        />
                        </div>
                    </div>


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

                </Paper>

            </Grid>



        </div>
    )


}
export default FormBuilderComponent


