import React from 'react'
import { SocialIcons } from '../assets/index'

const ResultPage = (props) => {
    console.log(SocialIcons.Pinterest)
    return (
        <div className='form-container h-100'>
            <div className='rp-main'>
            <p className='rp-txt'>Your result:</p>
            
                <p className='rp-txt'>Test time: <span style={{ color: 'skyblue' }}>{props.time}</span>, average users 00:00:10.</p>
                
            <p className='rp-txt'>Your IQ is 83. This corresponds to a below average level IQ.In this test you have {props.rightAns} correct answers from 5. This is not a very good result for your age 9.</p>
            
            <h4 className='rp-txt'>Easy Monetization. Increase earnings from ads up to 2x</h4>
            
                <p className='rp-txt link-txt'>A single solution for app monetization. Step-by-step instructions. Try now!</p>
            
            <a className='rp-link' href='ads.yandex.com'>ads.yandex.com</a>
            
            <p className='rp-txt link-txt-bt'>Please note that the first four questions of the test were only the practice questions and they do not count towards the final result.</p>
            
            <p className='rp-txt link-txt1' >Permanent result link:</p>
            
            <a className='rp-link' href='http://localhost:3000/?'>http://localhost:3000/?</a>
            
            <button onClick={() => console.log('done')} className='Rp-btn'>
               Copy
            </button>
            
            <p className='rp-txt-share'>Share result:</p>
                <div className='Rp-Options'>
                    <img className='What' onClick={() => console.log('done')} src={SocialIcons.Whatsapp} alt='' />
                    <img className='Teleg' onClick={() => console.log('done')} src={SocialIcons.Telegram} alt='' />
                    <img className='Twit' onClick={() => console.log('done')} src={SocialIcons.Twiter} alt='' />
                    <img className='Pinter' onClick={() => console.log('done')} src={SocialIcons.Pinterest} alt='' />
                    <img className='Skype' onClick={() => console.log('done')} src={SocialIcons.Skype} alt='' />
                </div>
            </div>
        </div>
    )
}

export default ResultPage