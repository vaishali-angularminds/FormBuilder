import React from "react";
import FormBuilderComponent from "./FormBuilderComponent";
import FormComponent from "./FormComponent";
import { useEffect, useState } from 'react';
const MainComponent = () => {

    const [formdata, setFormData] = useState({});

    // useEffect(()=>{

    // },[formdata])
    console.log(formdata)
    return (
        <>
            <h2>  Main Component</h2>
            <div style={{ display: 'flex' }}>
                <FormBuilderComponent setFormData={setFormData} formdata={formdata} />

                <FormComponent formdata={formdata} />

            </div>

        </>
    )
}
export default MainComponent; 