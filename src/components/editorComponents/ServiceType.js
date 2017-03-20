import React from "react";

const ServiceType =(props)=> {

const typeArr = props.typeArr;

  return (
       <div className='service-task'>
        <div>SERVICE TYPE</div>
        <div className='image-container'>
          {typeArr.map((obj, index)=>{
            return(<div key={ index } className='image-item' onClick={() => props.setServiceType(obj.name)}>
                    <div className='image-item' >
                      <img src={ obj.src } alt=""/>
                    </div>
                    <div className='image-description'>{obj.name}</div>
                    </div>)
          })}

        </div>
       </div>
   );
}

export default ServiceType;
