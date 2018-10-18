import React, {Component} from 'react';
import SeedFactory from 'freactal-seed';
import {provideState, injectState, update} from 'freactal';

class Wrapper extends Component {
    render() {
        return this.props.children;
    }
}

export const wrap = (props = {}) => {
    let keys = Object.keys(props);

    if (!keys.length) return Wrapper;
    const Seed = SeedFactory();
    const state = new Seed();
    keys.forEach(key => state.addIntAndSetEffect(key, props[key]));

    return provideState(state)(Wrapper);
}

export default class Container extends Component {
    render() {
        const {children} = this.props;
        const withoutSCS = {...this.props};
        delete withoutSCS.state;
        delete withoutSCS.children;
        delete withoutSCS.effects;

        let MyWrapper = wrap(withoutSCS);
        return <MyWrapper>{children}</MyWrapper>
    }
};
