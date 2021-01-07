import { Component } from 'react';

class PureComponentComponent extends Component {
    constructor (props) {
        super(props);
        this.state = {
          arr: [],
        }
    }
    shouldComponentUpdate (nextProps, nextState) {
      return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
    }

    add = () => {
//      const arr = this.state.arr;
//      arr.push(arr.length);
      this.setState({
//        arr: arr,
        arr: [...this.state.arr, this.state.arr.length]
      })

      // solve

    }

    innerForceUpdate = () => {
      this.forceUpdate();
    }

    render () {
      return (<>
        <div>arr: 
          { this.state.arr.join(',') }
        </div>
        <div onClick={ this.add }>add num to arr</div>
        <div onClick={ this.innerForceUpdate }>force update</div>
      </>)
    }
} 


function shallowEqual(objA, objB) {
  if (Object.is(objA, objB)) {
    return true;
  }

  if (
    typeof objA !== 'object' ||
    objA === null ||
    typeof objB !== 'object' ||
    objB === null
  ) {
    return false;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  for (let i = 0; i < keysA.length; i++) {
    if (
      !hasOwnProperty.call(objB, keysA[i]) ||
      !Object.is(objA[keysA[i]], objB[keysA[i]])
    ) {
      return false;
    }
  }

  return true;
}

export default PureComponentComponent;



// mobx中的过滤条件
// function observerSCU(nextProps, nextState) {
//   if (isUsingStaticRendering()) {
//       console.warn(
//           "[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side."
//       )
//   }
//   // update on any state changes (as is the default)
//   if (this.state !== nextState) {
//       return true
//   }
//   // update if props are shallowly not equal, inspired by PureRenderMixin
//   // we could return just 'false' here, and avoid the `skipRender` checks etc
//   // however, it is nicer if lifecycle events are triggered like usually,
//   // so we return true here if props are shallowly modified.
//   return !shallowEqual(this.props, nextProps)
// }