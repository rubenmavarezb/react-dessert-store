import React, { useState, useEffect } from 'react';
import './Product-section.css';
import EachProduct from './EachProduct';
import Spinner from '../rm-spinner/Spinner'
import dataJson from '../../data.json';

const getPromise = (data) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        return res(data)
      }, 3000)
    })
}


function Products() {
    const [loading, setLoading] = useState(true);
    const [sourceData, setSourceData] = useState([]);

    useEffect(() => {
        getPromise( dataJson ).then(result => {
            console.log(result)
            setSourceData(result);
            setLoading(false)
        });
    }, [])

    return(
        <section className="section store-section" id="oven">
            <div>
                <div className="columns is-multiline is-centered" id="products">
                    { loading && <Spinner/> }
                    { !loading && (
                        sourceData.map((data, i) => (
                            <EachProduct
                                key={i + data.id}
                                data={data}
                            />
                        ))
                    )}

                </div>
            </div>
        </section>
    ) 
}

export default Products