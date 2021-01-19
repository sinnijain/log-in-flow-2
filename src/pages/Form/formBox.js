import React, { useState , useEffect } from 'react'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import {  TextField, Button, MenuItem, InputLabel ,Select, FormControl } from '@material-ui/core'
import { isEmail , isCapsName, isPhoneNum } from '../../common/regex';
import StyleSheet from '../../styles/styleSheet'
import UserActions from '../../Redux/user/userAction'
import { userAdded } from '../../Redux/user/userSelector'
import { Redirect } from 'react-router-dom';
import { cities } from './consts';

const FormBox = (props) => {

    const [ data , setData ] = useState( 
        {
            email: '',
            password: '',
            phone: '',
            city: '',
            fName: '',
            lName: ''
        }
    )

    const [ errors , setErrors ] = useState(
        {
            email: null,
            password: null,
            phone: null,
            city: null,
            fName: null,
            lName: null
        }
    )


    const isError = () => {
        return Object.keys(errors).some( (error) => errors[error] !== null)
    }

    const [ whatChanged , setWhatChanged ] = useState('')
    const [ isThereError , setIsThereError] = useState(true)


    useEffect(() => {
        validate(whatChanged)
    }, [data])

    useEffect(() => {
        setIsThereError(isError())
    }, [errors])


    const applyError = (target , value) => {
        setErrors( (prevErrors) => ({
            ...prevErrors,
            [target]: value
        }))
    }

    const resetError = (target) => {
        setErrors( (prevErrors) => ({
            ...prevErrors,
            [target]: null
        }))
    }

    const validate = (target) => {

        if(  target === 'email' || target === 'ALL')
        {
            if(data.email === '')
            {
                applyError('email', 'email is required')
            }
            
            else if(!isEmail(data.email))
            {
                applyError('email', 'email is invalid')
            }
            
            else {
                resetError('email')
            }
        }

        if(target === 'fName' || target === 'ALL' )
        {
            if(data.fName === '')
                applyError('fName', 'name is required')

            else if(!isCapsName(data.fName))
                applyError('fName', 'name is invalid')

            else
                resetError('fName')
        }

        if(target === 'phone' || target === 'ALL' )
        {
            if(data.phone === '')
                applyError('phone', 'phone is required')

            else if(!isPhoneNum(data.phone))
                applyError('phone', 'phone number should have digits only')

            else
                resetError('phone')
        }

        if(target === 'password' || target === 'ALL')
        {
            if(data.password === '')
                applyError('password', 'password is required')

            else if(data.password.length < 8 )
                applyError('password', 'minimum password length is 8')

            else
                resetError('password') 
        }
    }


    const handleSubmit = (e) => {
        const { registerUser } = props
        e.preventDefault()
        validate('ALL')
        if(!isThereError)
        {
            registerUser(data)
        }
    }

    const changeHandler = (e) => {
        setData( (prevdata) => ({
            ...prevdata,
            [e.target.name]: e.target.value
        }))

        setWhatChanged(e.target.name)
    }

    

    if(props.userAdded) 
    {
        return <Redirect to='/home' />
    }

    return(  
        <form onSubmit={handleSubmit}  autoComplete="off">    
            <Grid container className='h-100'>
                <Grid item xs={12} md={12} style={StyleSheet.gridItem}>
                    <TextField
                        name='email'
                        onChange={changeHandler}
                        id="email"
                        label="Email"
                        fullWidth
                    />
                    {errors.email && <p style={StyleSheet.error}>{errors.email}</p>}
                </Grid>

                <Grid item xs={12} md={12} style={StyleSheet.gridItem}>
                    <TextField
                        name='password'
                        onChange={changeHandler}
                        id="password"
                        label="Password"
                        type="password"
                        fullWidth
                    />
                    {errors.password && <p style={StyleSheet.error}>{errors.password}</p>}
                </Grid>

                <Grid item xs={12} md={6} style={StyleSheet.gridItem}>
                    <TextField
                        name="fName"
                        onChange={changeHandler}
                        id="fName"
                        label="First name"
                        type="text"
                        fullWidth
                    />
                    {errors.fName && <p style={StyleSheet.error}>{errors.fName}</p>}
                </Grid>

                <Grid item xs={12} md={6} style={StyleSheet.gridItem}>
                    <TextField
                        name="lName"
                        onChange={changeHandler}
                        id="lName"
                        label="Last name"
                        type="text"
                        fullWidth
                    />
                </Grid>

                <Grid item xs={12} md={6} style={StyleSheet.gridItem}>
                    <TextField
                        name="phone"
                        onChange={changeHandler}
                        id="phone"
                        label="Phone"
                        type="text"
                        fullWidth
                    />
                    {errors.phone && <p style={StyleSheet.error}>{errors.phone}</p>}
                </Grid>

                <Grid item xs={12} md={6} style={StyleSheet.gridItem}>
                    <FormControl className='w-100'>
                        <InputLabel htmlFor="city-select">City</InputLabel>
                        <Select
                            name='city'
                            fullWidth
                            onChange={changeHandler}
                        >
                            {
                                Object.keys(cities).map(
                                    (key) => <MenuItem key={key} value={key}>{cities[key]}</MenuItem>
                                )
                            }
                        </Select>

                    </FormControl>
                    
                </Grid>

                <Grid item xs={12} md={12} className='mt-2 mb-4 p-4 d-flex justify-content-center align-item-center'>
                    <Button type='submit' className='w-100' variant="contained" color="secondary"> Register </Button>
                </Grid>
            </Grid>
        </form>  
    )
}

const mapStateToProps = (state) => ({
    userAdded: userAdded(state)
})

const mapDispatchToProps = (dispatch) => ({
    registerUser: (data) => dispatch(UserActions.registerUser(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(FormBox)