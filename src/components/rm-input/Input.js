import React, { Fragment } from 'react';
import Button from '../rm-general-components/Button'
import './Input.css';


function InputField(){

        return(
            <Fragment>
                <section className="section search-section" id="input">
                    {/* <form className="container" id="search-container" onSubmit={
                        (e) => {
                            e.preventDefault();
                            (!isDisabled) ? getSearchValue() : console.log('error')
                        }
                    }> */}
                    <form className="container" id="search-container" 
                    >
                        <div className="field has-addons">
                            <div className="control animate-left">
                                <input className="input" id="search-box" type="text" placeholder="Find in the kitchen"/>
                            </div>
                            <div className="control animate-right">
                                <Button cssClass="button is-info" idName="search-button" text='Search'/>
                            </div>
                        </div>
                        <hr/>
                    </form>
                </section>
            </Fragment>

        )
}

export default InputField