import React, {useState} from 'react' // 리액트에서는 동적인 값을 상태라고 부름 (state) 상태를 처리하는 것이 useState

const Counter = () => {
    const [num, setNumber] = useState(0); // num useState 에서의 값 SetNumber set의 setter 함수 
    //버튼을 누를 때마다 위에 있는 함수가 동작
    const increase = () => {
        setNumber(num+1) // set함수를 통해서만 상태를 관리할 수 있다
    }

    const decrease = () => { 
        setNumber(num-1)
     }
    return (
    <div>
        <button onClick={increase}>+1</button> 
        <button onClick={decrease}>-1</button>
        <p>{num}</p> 
    </div>
  )
}

export default Counter