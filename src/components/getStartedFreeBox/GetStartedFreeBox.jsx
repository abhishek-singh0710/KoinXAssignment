import React from 'react'
import "./getStartedFreeBox.css";

const GetStartedFreeBox = () => {
    return (
        <div className='free-box'>
            <div className="text">
                <h2>Get Started with KoinX for Free</h2>
                <p>
                    With our range of features that you can equip for free,
                    KoinX allows you to be more educated and aware of your tax reports.
                </p>
            </div>
            <img src="getFree.png" alt="getFree" />
            <button>
                Get Started for Free
                <img src="Arrow-Right.png" alt="" /> 
            </button>
        </div>
    )
}

export default GetStartedFreeBox
