/* jshint esversion: 6 */
import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css'

const layout = (props) => (
    <aux>
        <div>Toolbar, Sidedraw, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </aux>
);

export default layout;
