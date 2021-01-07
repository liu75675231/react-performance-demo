import { Component } from 'react';

class ShouldComponentUpdateComponent extends Component {
    constructor (props) {
        super(props);
        this.state = {
            passNum: 0,
            noPassNum: 0,
        }
    }
    shouldComponentUpdate (nextProps, nextState) {
        if (nextState.passNum !== this.state.passNum) {
            return true;
        }
        return false;
    }

    add = (type) => {
        this.setState({
            [type]: this.state[type] + 1,
        })
    }

    render () {
        return (<>
            <div>passNum: { this.state.passNum }</div>
            <div>noPassNum: { this.state.noPassNum }</div>
            <div onClick={ this.add.bind(this, 'passNum') }>add 1 to passNum</div>
            <div onClick={ this.add.bind(this, 'noPassNum') }>add 1 to noPassNum</div>
        </>)
    }
} 

export default ShouldComponentUpdateComponent;
