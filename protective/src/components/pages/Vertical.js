import React from 'react'

function Vertical(props) {
  return (
    <div className={props.accord ? 'verticalAccordian' : 'verticalAccordianCollapse'}>
        <div className='vericalAccordianHeader'>
          <button >{props.accord ? <span className="k-icon k-i-arrow-chevron-left"></span> : <span className="k-icon k-i-arrow-chevron-right"></span>}</button>
        </div>
      </div>
  )
}

export default Vertical