import { Container } from '@material-ui/core'
import React from 'react'
import styleSheet from '../../styles/styleSheet'
import FormBox from './formBox'

const Form = () => {
    return (
        <Container>
            <div style={styleSheet.formBox}>
                <FormBox />
            </div>
        </Container>
    )
}

export default Form