import React from 'react'
import Button from '../rm-general-components/Button';
import { Link } from 'react-router-dom'




const EachProduct = ({sourceData}) => {

    return (      
            sourceData.map((dess, i) => {
                const images = require(`../../assets/img/${dess.img}`)
                const dessDiv = `dess-div-${i}`
                return <article className="column is-3 card" key={i} id={dessDiv}>
                            <div className="card-image">
                                <figure className="image is-4by3">
                                    <img src={images}  alt=""/>
                                </figure>
                            </div>
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-content">
                                        <p className="title is-4"><span className="title-gradient">{dess.name}</span></p>
                                        <p className="subtitle is-4">{dess.price}$</p>
                                    </div>
                                </div>

                        <div className="content">{dess.description}</div>
                        <div className="buttons">
                            
                            <Link to={`/products/${dess.id}`}><Button cssClass="button is-primary view-details" idName="view-details" iconClass="fas fa-plus" text={<p>View details</p>}/></Link>
                            <Button cssClass="button is-link is-light" iconClass="fas fa-shopping-basket" text={<p>Add to basket</p>}/>
                        </div>
                        </div>
                    </article>
                })
    )
}

export default EachProduct