import React from "react";

const ServiceType =(props)=> {

const typeArr = props.typeArr;

  return (
       <div className='service-task'>
        <div className='title-block'>SERVICE TYPE</div>
        <div className='image-container'>
          {typeArr.map((obj, index)=>{
            return(<div key={ index } className='service-type-item'  onClick={() => props.setServiceType(obj.name)}>
                    <div className={'image-item' + (obj.name === props.serviceType ? ' active' : '')} >
                      {obj.name === props.serviceType}
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
