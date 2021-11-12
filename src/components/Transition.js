import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition';

import '../css/App.css';

class TransitionComp extends Component {

    state = {
        show: false
    }
    showDiv = () => {
        this.setState({
            show:!this.state.show ? true : false
        })
    }
    render() {
        return (
            <div>
                {/* {this.state.show
                    ?
                    <div style={{
                        background: 'red',
                        height: '100px'
                    }}></div>
                    :
                    null
                } */}
                <Transition
                    // timeout={2000}
                    // mountOnEnter
                    // unmountOnExit
                    in={this.state.show}
                    // timeout={2000}
                    timeout={{ // Enter object
                        enter: 2000,
                        exit: 2000
                    }}
                    enter={false} // You can see all the classes entering and entered
                    exit={false} // You can see all the classes exiting and exited

                    onEnter={(node) => {
                        console.log('Enter')
                    }}

                    onExit={(node) => {
                        console.log('Exited')
                    }}
                >
                    {state =>
                        // Inline transition
                        // <div style={{
                        //     background: 'red',
                        //     height: '100px',
                        //     transition: 'all 2s ease',
                        //     opacity: state === 'exited' || state === 'exiting' ? 0 : 1
                        // }}>
                        //     {state}
                        // </div>
                        // CLass transition
                        <div className={`square square-${state}`}>
                            {`square suare-${state}`}
                        </div>
                    }
                </Transition>
                <div className="showDiv" onClick={this.showDiv}>
                    Show or Hide
                </div>
            </div>
        )
    }
}


export default TransitionComp;
