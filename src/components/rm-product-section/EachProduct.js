import React from 'react'
import Button from '../rm-general-components/Button';
import { Link } from 'react-router-dom';



const EachProduct = ({data}) => {

    console.log(data)

    const { img, price, name, description, id } = data;

    console.log(img);
    
    const images = require(`../../assets/img/${img}`);

    console.log(images)

    return (      
            <>
                <article className="column is-3 card">
                    <div className="card-image">
                        <figure className="image is-4by3">
                            <img src={images}  alt=""/>
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4"><span className="title-gradient">{name}</span></p>
                                <p className="subtitle is-4">{price}$</p>
                            </div>
                        </div>

                <div className="content">{description}</div>
                <div className="buttons">
                    
                    <Link to={`/products/${id}`}><Button cssClass="button is-primary view-details" idName="view-details" iconClass="fas fa-plus" text={<p>View details</p>}/></Link>
                    <Button cssClass="button is-link is-light" iconClass="fas fa-shopping-basket" text={<p>Add to basket</p>}/>
                </div>
                </div>
            </article>
            </>
    )
}

export default EachProduct