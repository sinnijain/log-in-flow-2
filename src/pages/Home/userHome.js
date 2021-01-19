import { Grid } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { selectUser } from '../../Redux/user/userSelector'
import styleSheet from '../../styles/styleSheet'

const UserHome = ( {user} ) => {
    return (
        <div className='d-flex justify-content-center align-item-center'>
            <Grid container style={styleSheet.nameCard}>
                <Grid className='mb-3' justify='center' alignContent='center' container>
                    <h6>Welcome {user?.fName} {user?.lName}</h6>
                </Grid>
                <Grid justify='center' alignContent='center' container>
                    <p>Email : {user.email}</p>
                </Grid>
                <Grid justify='center' alignContent='center' container>
                    <p>Phone : {user.phone}</p>
                </Grid>
                <Grid justify='center' alignContent='center' container>
                    <p>City : {user.city}</p>
                </Grid>
            </Grid>
            

        </div>
    )
}

const mapStateToProps = (state) => ({
    user : selectUser(state)
})

export default connect(mapStateToProps)(UserHome)