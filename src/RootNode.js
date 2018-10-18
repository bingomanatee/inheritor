import React, {Component} from 'react';
import seedFactory from 'freactal-seed';
import {provideState, injectState, update} from 'freactal';
import styled from 'styled-components';
import Display from './Display';
import Container from './Container';
import Box from './Box';

const Seed = seedFactory();
const state = new Seed();
state.addIntAndSetEffect('a', 0)
    .addIntAndSetEffect('b', 1)
    .addIntAndSetEffect('c', 2);

class RootNode extends Component {
    render () {
        let children = React.Children.toArray(this.props.children);
        return <Box>
            <h1>Root Node</h1>
            <Display />
            <Box color="red">
            {
                children.map(child => <Container>{child}</Container>)
            }
            </Box>
        </Box>
    }

    componentDidMount(){
        setInterval(() => {
            this.props.effects.setA(this.props.state.a + 1);
        }, 500);
    }
}

export {RootNode};

export default provideState(state)(injectState(RootNode));
