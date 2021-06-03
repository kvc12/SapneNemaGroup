import React from 'react'
import './Home.css'
import momo from '../../Images/momo.png'
import chole from '../../Images/chole.jpg'
import bhurji from '../../Images/bhurji.png'
import biryani from '../../Images/biryani.jpg'
import palakpaneer from '../../Images/palakpaneer.jpg'
import manchurian from '../../Images/manchurian.jpg'
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
    render() {
        return (
            <div className="container-fluid" >
                <section id="header">
                    <div className="row">
                        <div className="col-md-12 banner">
                            <div class="col-md-6 offset-md-3 info">
                                <p>#1 Food Delivery Service</p>
                                <h2>We Deliver home made food fresh & fast
                                at your door step </h2>
                                <Link className="btn btn-lg btn-danger mt-3 order"
                                    onClick={
                                        () => {
                                            if (sessionStorage.getItem("customer") != null) {
                                                this.props.history.push("/placeorder")
                                            } else {
                                                alert("You are not LoggedIn")
                                            }
                                        }
                                    }
                                >ORDER NOW</Link>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="middle-first">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="col-md-6 offset-md-3 trend">
                                <h2>Trending Foods in Your City</h2>
                                <p>choose what you want and we deliver it to you</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="food-list">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card border-dark">
                                <img src={momo} alt="Momos" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">Veg Momo</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card border-dark">
                                <img src={chole} alt="Chole Bhature" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">Chole Bhature</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card border-dark">
                                <img src={bhurji} alt="Bhurji Pav" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">Bhurji Pav</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <div className="card border-dark">
                                <img src={biryani} alt="Chicken Biryani" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">Chicken Biryani</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card border-dark">
                                <img src={palakpaneer} alt="Palak Paneer" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">Palak Paneer</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card border-dark">
                                <img src={manchurian} alt="Veg Manchurian" className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">Veg Manchurian</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}