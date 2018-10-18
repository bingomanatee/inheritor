import React, {Component} from 'react';
import Display from './Display';
import Container from './Container';
import Box from './Box';
import {injectState} from 'freactal'

export default injectState( (props) => {
    let transform = {};
    if (props.state.a) {
        transform.a = props.state.a/2;
    }
   return <Container {...props} {...transform} >
        <Box color="green">
        <h2>Passthrough</h2>
        <Display></Display>
            {props.children  || ''}
        </Box>
    </Container>
})

