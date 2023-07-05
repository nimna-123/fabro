import React from 'react' 
import Classes from './ProductDetail.module.css'
const ProductDetail = (props) =>{
    return(
        <div className={Classes.Container}>
            <div className='row'>
                <div className={`${'col-md-6'} ${Classes.content} ${'pad-20'}`}>
                    <p>Brand Name:</p>
                    <p>Vehicle Name:</p>
                    <p>Vehicle Size:</p>
                    <p>Product Type:</p>
                    <p>Model :</p>
                    <p>Seat Layout:</p>
                    <p>Material:</p>
                    <p>Material Spec:</p>
                    <p>Colour: </p>
                    <p>MOQ:</p>
                    <p>Design:</p>
                    <p>Sub Design:</p>
                    <p>Perforation:</p>
                    <p>Foam Type:</p>
                    <p>Back Liner Type:</p>
                  
                    
                    <p>SKU:</p>

                </div>
                <div  className={`${'col-md-6'} ${Classes.contentVal} ${'pad-20'}`}>
                <p>{props.BrndName}</p>
                <p>{props.vehName}</p>
                <p>{props.vehSize}</p>
                <p>{props.prodType}</p>
                <p>{props.model}</p>
                <p>{props.seatLay}</p>
                <p>{props.mat}</p>
                <p>{props.matSpec}</p>
                <p>{props.color}</p>
                <p>{props.moq}</p>
                <p>{props.design}</p>
                <p>{props.subDesign}</p>   
                <p>{props.prefor}</p>
                 <p>{props.foamType}</p>
                 <p>{props.blt}</p>
                
               
                 <p>{props.sku}</p>
                    </div>
            </div>

        </div>

    )
}
export default ProductDetail