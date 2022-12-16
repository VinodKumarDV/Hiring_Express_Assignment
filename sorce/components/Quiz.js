import React from 'react'

const Quiz = (props) => {
    return (
        <div className='form-container h-100'>
            <form autoComplete="off" className='form-group'>
                <img src={props.task.question} alt='' />
                <h2>{props.current}. Which shape should be in the rightmost cell with a question mark?</h2>
                <div className='Options'>
                    <img onClick={() => props.handelSub(props.ans[0])} src={props.task.opt1} alt='' />
                    <img onClick={() => props.handelSub(props.ans[1])} src={props.task.opt2} alt='' />
                    <img onClick={() => props.handelSub(props.ans[2])} src={props.task.opt3} alt='' />
                    <img onClick={() => props.handelSub(props.ans[3])}  src={props.task.opt4} alt='' />
                    <img onClick={() => props.handelSub(props.ans[4])}  src={props.task.opt5} alt='' />
                </div>
                <br></br>
            </form>
        </div>
    )
}

export default Quiz