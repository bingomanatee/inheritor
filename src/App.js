import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import RootNode from './RootNode';
import Display from './Display';
import HalfA from './HalfA';

class App extends Component {
    render() {
        return (
            <div className="App">
                <section>
                    <RootNode>
                        <Display/>
                        <HalfA b={4}>
                            <HalfA c={20}>
                            </HalfA>
                        </HalfA>
                    </RootNode>
                </section>
            </div>
        );
    }
}

export default App;
