import React, {useCallback, useState} from 'react';

let count = 0;
const MemoComponent = React.memo(function ({ func }) {
    ++count;
    return (
        <div>func使用了useCallback，子memo组件渲染次数：{ count }</div>
    );
});

let count1 = 0;
const MemoComponent1 = React.memo(function ({ func }) {
    ++count1;
    return (
        <div>func没有使用useCallback，子memo组件渲染次数：{ count1 }</div>
    );
});

function useCallbackComponent () {
    const [ count, setCount ] = useState(0)
    const add = useCallback(() => count, [])
    // const add = useCallback(() => count + 1, [count])
    const add1 = () => count + 1;
    return (
        <div>
            <MemoComponent func={ add }></MemoComponent>
            <MemoComponent1 func={ add1 }></MemoComponent1>
            点击次数: { count }
            <br/>
            次数加一: { add() }
            <button onClick={() => { setCount(count + 1)}}>点我</button>
        </div>
    )
}
  
export default useCallbackComponent;




