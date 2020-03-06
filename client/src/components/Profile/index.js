import React from 'react'
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import { Field} from 'redux-form';
import renderField from '../commun/TextField'


const Profile = (props) => {
    return(
        <div>
            <form>
                <Grid container justify="center" spacing={2}>
                    <Grid item xs={5}>
                        <FormLabel  component="legend">Firstname</FormLabel>
                        <Field
                            name="firstname"
                            component={renderField}
                            type = "text"
                            rows='1'
                        />
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}

export default Profile;