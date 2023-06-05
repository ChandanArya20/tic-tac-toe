import Square from "./Square"
import Header from './Header'
import { useState } from "react"

function Board(){

    const[state,setState]=useState(Array(9).fill(null))
    const[isXTurn,setIsXTurn]=useState(true)

    const checkWinner=()=>{
        const winConditions=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]

        for(let condition of winConditions){
            const [a,b,c]=condition
            if(state[a]!==null && state[a]===state[b] && state[a]===state[c])
                return state[a]
        }
        return false
    }

    const isWinner=checkWinner()

    const onClickHandler=(index)=>{
        const copidState=[...state]
        if(copidState[index]!==null)
            return;
        copidState[index]=isXTurn?'X':'0'
        setState(copidState)
        setIsXTurn(!isXTurn)      
    }
    const resetHanler=()=>{
        setState(Array(9).fill(null))
    }

    return(
        <>
        <Header headerName='Tic Tac Toe Game' />
        <div className="board-container">
            { isWinner?<h4 style={{textAlign:'center'}}>Player {isWinner} won the game <button onClick={resetHanler}> Play Again</button></h4>:
            <>
            <h4 style={{textAlign:'center'}}>It's player {isXTurn?'X':'0'} turn</h4>
            <div className="board-row">
                <Square value={state[0]} onClick={()=>onClickHandler(0)}/>
                <Square value={state[1]} onClick={()=>onClickHandler(1)}/>
                <Square value={state[2]} onClick={()=>onClickHandler(2)}/>
            </div>
            <div className="board-row">
                <Square value={state[3]} onClick={()=>onClickHandler(3)}/>
                <Square value={state[4]} onClick={()=>onClickHandler(4)}/>
                <Square value={state[5]} onClick={()=>onClickHandler(5)}/>
            </div>
            <div className="board-row">
                <Square value={state[6]} onClick={()=>onClickHandler(6)}/>
                <Square value={state[7]} onClick={()=>onClickHandler(7)}/>
                <Square value={state[8]} onClick={()=>onClickHandler(8)}/>
            </div>
            </>}
            
        </div>
        </>
    )
}

export default Board