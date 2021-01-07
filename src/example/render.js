import { Component, PureComponent } from 'react';
class Child extends PureComponent {
    render () {
        console.log('导致重新渲染')
        return (
            <div>todo</div>
        )
    }
}
  
class RenderComponent extends Component {
    state = {
        count: 0
    }
    handleClick = () => {
        this.setState({count: this.state.count+1})
    }

    pureFn = () => {
        console.log('这次就没问题了');        
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>{this.state.count}</button>
                <Child callbackFn={() => { console.log('在render方法中使用箭头函数') }} />
            </div>
        )
    }
}
  
export default RenderComponent;
