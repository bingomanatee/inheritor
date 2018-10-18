import React, {Component} from 'react';
import SeedFactory from 'freactal-seed';
import {provideState, injectState, update} from 'freactal';


export default injectState(({state: {a, b, c}}) => (<ul>
    <li>A: <b>{a}</b></li>
    <li>B: <b>{b}</b></li>
    <li>C: <b>{c}</b></li>
</ul>))
