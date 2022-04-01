import React from 'react';
import { Button } from 'react-bootstrap';
// create style here
const styles ={
    form: {
        margin: '16px 20% 0',
    },
    formGroup: {
        marginBottom: '16px',
    },
    formLabel: {
        marginBottom: '8px',
        display: 'block',
    },
    formInput: {
        width: '350px 50px',
        fontSize: '1rem',
        color: '#BCBCBC',
        backgroundColor: 'rgba(210, 210, 210, 0.25)',
        border: '2px solid #BCBCBC',
        borderRadius: '5px',
        padding: '7px 13px',
    },
    Container: {
        backgroundColor: '#181818',
        padding: '30px',
        width: '450px',
        border: '3px solid #ced4da',
        borderRadius: '10px',
        boxShadow: '10px #ced4da',
    },
    h2: {
        color: 'white',
    },
    mainContainer: {
        backgroundColor: 'black',
    },
};
// create form component

function Form() {
    return(
        <div style={styles.mainContainer}>
            <div>       
                <div style={styles.Container}>
                    <h2 style={styles.h2}>Register</h2>
                    <form style={styles.form}>
                        <div style={styles.formGroup}>
                            <label 
                                htmlFor="username" 
                                style={styles.formLabel}>
                            </label>
                            <input 
                                style={styles.formInput}
                                type="text" 
                                id="username" 
                                placeholder="Name">
                            </input>
                        </div>
                        <div style={styles.formGroup}>
                            <label 
                                htmlFor="email" 
                                style={styles.formLabel}>
                            </label>
                            <input 
                                id="email"
                                style={styles.formInput}
                                placeholder="Email"></input>
                        </div>
                        <div style={styles.formGroup}>
                            <label 
                                style={styles.formLabel}
                                htmlFor="password">
                            </label>
                            <input 
                                style={styles.formInput}
                                type="text" 
                                id="password" 
                                placeholder="Password">
                            </input>
                        </div>
                        <div>
                            <Button variant='danger'>Register</Button>
                        </div>
                    </form>
                </div>              
            </div>
        </div>
    );
}

export default Login