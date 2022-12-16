import React, { useState, useEffect } from 'react'
import Quiz from './components/Quiz';
import { OPTIONS1, OPTIONS2, OPTIONS3, OPTIONS4, OPTIONS5 } from './assets/index'
import Counter from './components/Counter'
import WellcomePage from './components/WellcomePage';
import ResultPage from './components/ResultPage';

const App = () => {

  const [isResult, setIsResult] = useState(false);
  const [current, setCurrent] = useState('click here');
  const [rightAns, setRightAns] = useState(0);
  const [wrongAns, setWrongAns] = useState(0);
  const [height, setHeight] = useState('');
  const [setAge] = useState('');
  const [time, setTime] = useState('');
  const [setGender] = useState('');
  const [isStartTimer, setIsStartTimer] = useState(false);
  const [isStopTimer, setIsStopTimer] = useState(true);

  const nextQuestion = () => {
    setCurrent(current + 1)
  }

  const RightAns = () => {
    setRightAns(rightAns + 1)
  }

  const WrongAns = () => {
    setWrongAns(wrongAns + 1)
  }

  useEffect(() => {
    current >= 7 && StopTest()
  }, [current])

  useEffect(() => {
    current === 5 && setHeight('40rem')
    current === 7 && setHeight('')
  }, [current])

  const handelSub = (ans) => {
    if (ans === 1) {
      nextQuestion()
      RightAns()
    } else {
      WrongAns()
      nextQuestion()
    }
  }

  const TimeCount = (data) => {
    setTime(data)
  }

  const StartTest = () => {
    setCurrent(0)
    setIsStartTimer(true)
    setIsStopTimer(false)
  }

  const StopTest = () => {
    setIsResult(true)
    setIsStartTimer(false)
    setIsStopTimer(true)
  }

  const submitAge = (Age) => {
      nextQuestion()
      setAge(Age)
  }
  const submitGen = (Gen) => {
      nextQuestion()
      setGender(Gen)
  }

  const ans1 = [1 , 0, 0, 0, 0]
  const ans2 = [0, 1, 0, 0, 0]
  const ans3 = [1, 0, 0, 0, 0]
  const ans4 = [0, 0, 0, 0, 1]
  const ans5 = [0, 0, 0, 1, 0]

  return (
    <div className='wrapper'>
      <div style={{ height: height }} className='main'>
        {current < 7 && <><h2>{current}/7</h2></>}  
        {current === 'click here' &&  
          <div className='form-container'>
            <WellcomePage StartTest={StartTest} />
          </div>
        }
        {current === 0 && 
          <div className='form-container h-100'>
            <Quiz current={current+1} task={OPTIONS1} handelSub={handelSub} ans={ans1} />
          </div>
        }
        {current === 1 &&
          <div className='form-container h-100'>
            <Quiz current={current+1} task={OPTIONS2} handelSub={handelSub} ans={ans2} />
          </div>
        }
        {current === 2 &&
          <div className='form-container h-100'>
            <Quiz current={current+1} task={OPTIONS3} ans={ans3} handelSub={handelSub} />
          </div>
        }
        {current === 3 &&
          <div className='form-container h-100'>
            <Quiz current={current+1} task={OPTIONS4} ans={ans4} handelSub={handelSub} />
          </div>
        }
        {current === 4 &&
          <div className='form-container h-100'>
            <Quiz current={current+1} task={OPTIONS5} ans={ans5} handelSub={handelSub} />
          </div>
        }
        {current === 5 &&
          <div className='form-container h-100'>
            <div className='form-group'>
              <h1>6. How old are you?</h1>
              <div className='Options-age'>
                <span onClick={() => submitAge(6)}>6</span>
                <span onClick={() => submitAge(7)}>7</span>
                <span onClick={() => submitAge(8)}>8</span>
                <span onClick={() => submitAge(9)}>9</span>
                <span onClick={() => submitAge(10)}>10</span>
                <span onClick={() => submitAge(11)}>11</span>
                <span onClick={() => submitAge(12)}>12</span>
                <span onClick={() => submitAge(13)}>13</span>
                <span onClick={() => submitAge(14)}>14</span>
                <span onClick={() => submitAge(15)}>15</span>
                <span onClick={() => submitAge(16)}>16</span>
              </div>
            </div>
          </div>
        }
        {current === 6 &&
          <div className='form-container age-container'>
            <div className='form-group'>
              <h1>6. How old are you?</h1>
              <div className='Options-age'>
                <span onClick={() => submitGen('Male')}>Male</span>
                <span onClick={() => submitGen('Female')}>Female</span>
                <span onClick={() => submitGen('Other')}>Other</span>
              </div>
            </div>
          </div>
        }
        {current === 7 &&
          <div className='form-container age-container'>
            <div className='form-group'>
            <h1>IQ Test for kids from 7 to 16 year old</h1>
            <button onClick={() => StartTest()} className='wc-btn'>
              Start test again
            </button>
            </div>
          </div>
        }

      </div>
      {isResult ? <div className=''><ResultPage rightAns={rightAns} time={time} /></div> : <></>}
      <div className='timer'><Counter TimeCount={TimeCount} isStartTimer={isStartTimer} isStopTimer={isStopTimer} /></div>
    </div>
  )
}

export default App
