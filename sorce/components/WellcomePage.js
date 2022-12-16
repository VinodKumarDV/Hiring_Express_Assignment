import React from 'react'
import mainIcon from '../assets/mainIcon.svg'

const WellcomePage = (props) => {
    return (
        <div className='form-container h-100'>
            <div className='form-group main-icon'>
                <img src={mainIcon} alt='' />
                <h2>IQ Test for kids from 7 to 16 year old</h2>
                <button onClick={() => props.StartTest()} className='wc-btn'>
                    Start test
                </button>
                <br></br>
                <p className='Des-text'>Most IQ tests are not suitable for children, as they are originally developed for the
                    adult population. However, if you want to know the IQ of a child between the ages of
                    7 and 16, there are several tests that can help you. There is an IQ test for children,
                    developed by us, which, unlike similar ones, can also determine the IQ level of children
                    at the age of 6 years.The child will be shown a series of three pictures arranged with some
                    regularity. Children will need to choose pictures that are suitable for an empty cell. The
                    first four questions should be answered together with the child so that he/she understands
                    the essence of the task - these questions are not taken into account in the calculation of
                    the child’s IQ. Let's get started!</p>
                <h2 className='Aut-txt' >Author of the test:  Testometrika Team</h2>
                <br></br>
                <button onClick={() => props.StartTest()} className='wc-btn'>
                    Start test
                </button>
            </div>
        </div>
    )
}

export default WellcomePage