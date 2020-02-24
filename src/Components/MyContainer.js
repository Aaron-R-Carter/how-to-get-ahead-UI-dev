import React from 'react';
import Stepper from "./Stepper";
import { Column, Row } from 'simple-flexbox';


export default function MyContainer() {



    return (

        <Column flexGrow={1}>
            <Row vertical='center'>
                <Column flexGrow={0} horizontal='center' flexBasis="5%">
                    
                </Column>
                <Column flexGrow={1} horizontal='center'flexBasis="90%">
                   <Stepper />
                </Column>
                <Column flexGrow={0} horizontal='center' flexBasis="5%">
                    
                </Column>
            </Row>
        </Column>

    );

}


