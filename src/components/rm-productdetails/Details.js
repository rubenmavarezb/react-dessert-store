import React, { useState, useEffect } from 'react';
import ProductDetail from './ProductDetail';
import Spinner from '../rm-spinner/Spinner'
import { useParams } from 'react-router-dom';
import data from '../../data.json';

const getPromise = (data) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        return res(data)
      }, 3000)
    })
}

const Details = () => {

    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState([]);

    const { id } = useParams();
    const searchProduct = data.filter(item => item.id === id)
    useEffect(() => {
        
        getPromise( searchProduct ).then(result => {
            setProduct(result);
            setLoading(false);
        });
    }, [searchProduct])
    

    return ( 
        <section className="section store-section" id="oven">
            <div>
                <div className="columns is-multiline is-centered" id="products">
                    { loading && <Spinner/> }
                    { !loading &&  <ProductDetail product={product}/> }
                    
                </div>
            </div>
        </section>
     );
}
 
export default Details;