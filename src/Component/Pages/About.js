import React, { Component } from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import keval from '../../Images/keval.png';
import ragini from '../../Images/ragini.png';
import sarvesh from '../../Images/sarvesh.png';
import pratik from '../../Images/pratik.png'
import srushti from '../../Images/srushti.png';
import karan from '../../Images/karan.png';
import pramod from '../../Images/pramod.png';
import '../../Component/Pages/About.css';
import { Link } from 'react-router-dom';

export default class About extends Component {
    render() {
        return (
            <>
                <div className="team-area">
                    <div className="section-title">
                        <h1>Ghar Ka Khana Apps Europe Developer Team</h1>
                    </div>
                    <div className="team-box justify-content-center">
                        <div className="box">
                            <img src={srushti} alt="Srushti Nangare" />
                            <h2>Srushti Nangare</h2>
                            <span>Team Leader</span>
                            <span>Software Associate</span>
                            <ul>
                                <li>
                                    <Link to="#" target="_blank"><FacebookIcon className="fa fa-facebook" /></Link>
                                </li>
                                <li>
                                    <Link to="#" target="_blank"><InstagramIcon className="fa fa-instagram" /></Link>
                                </li>
                                <li>
                                    <Link to="#" target="_blank"><WhatsAppIcon className="fa fa-whatsapp" /></Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="team-box">
                        <div className="box">
                            <img src={keval} alt="Keval Chheda" />
                            <h2>Keval Chheda</h2>
                            <span>Team Member</span>
                            <span>Software Associate</span>
                            <ul>
                                <li>
                                    <Link to="#" target="_blank"><FacebookIcon className="fa fa-facebook" /></Link>
                                </li>
                                <li>
                                    <Link to="#" target="_blank"><InstagramIcon className="fa fa-instagram" /></Link>
                                </li>
                                <li>
                                    <Link to="#" target="_blank"><WhatsAppIcon className="fa fa-whatsapp" /></Link>
                                </li>
                            </ul>
                        </div>

                        <div className="box">
                            <img src={ragini} alt="Ragini Gupta" />
                            <h2>Ragini Gupta</h2>
                            <span>Team Member</span>
                            <span>Software Associate</span>
                            <ul>
                                <li>
                                    <Link to="#" target="_blank"><FacebookIcon className="fa fa-facebook" /></Link>
                                </li>
                                <li>
                                    <Link to="#" target="_blank"><InstagramIcon className="fa fa-instagram" /></Link>
                                </li>
                                <li>
                                    <Link to="#" target="_blank"><WhatsAppIcon className="fa fa-whatsapp" /></Link>
                                </li>
                            </ul>
                        </div>

                        <div className="box">
                            <img src={pratik} alt="Pratik Jadhav" />
                            <h2>Pratik Jadhav</h2>
                            <span>Team Member</span>
                            <span>Software Associate</span>
                            <ul>
                                <li>
                                    <Link to="#" target="_blank"><FacebookIcon className="fa fa-facebook" /></Link>
                                </li>
                                <li>
                                    <Link to="#" target="_blank"><InstagramIcon className="fa fa-instagram" /></Link>
                                </li>
                                <li>
                                    <Link to="#" target="_blank"><WhatsAppIcon className="fa fa-whatsapp" /></Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="team-box">
                        <div className="box">
                            <img src={karan} alt="Karan Yadav" />
                            <h2>Karan Yadav</h2>
                            <span>Team Member</span>
                            <span>Software Associate</span>
                            <ul>
                                <li>
                                    <Link to="#" target="_blank"><FacebookIcon className="fa fa-facebook" /></Link>
                                </li>
                                <li>
                                    <Link to="#" target="_blank"><InstagramIcon className="fa fa-instagram" /></Link>
                                </li>
                                <li>
                                    <Link to="#" target="_blank"><WhatsAppIcon className="fa fa-whatsapp" /></Link>
                                </li>
                            </ul>
                        </div>

                        <div className="box">
                            <img src={sarvesh} alt="Sarvesh Saudagar" />
                            <h2>Sarvesh Saudagar</h2>
                            <span>Team Member</span>
                            <span>Software Associate</span>
                            <ul>
                                <li>
                                    <Link to="#" target="_blank"><FacebookIcon className="fa fa-facebook" /></Link>
                                </li>
                                <li>
                                    <Link to="#" target="_blank"><InstagramIcon className="fa fa-instagram" /></Link>
                                </li>
                                <li>
                                    <Link to="#" target="_blank"><WhatsAppIcon className="fa fa-whatsapp" /></Link>
                                </li>
                            </ul>
                        </div>

                        <div className="box">
                            <img src={pramod} alt="Pramod Powar" />
                            <h2>Pramod Powar</h2>
                            <span>Team Member</span>
                            <span>Software Associate</span>
                            <ul>
                                <li>
                                    <Link to="#" target="_blank"><FacebookIcon className="fa fa-facebook" /></Link>
                                </li>
                                <li>
                                    <Link to="#" target="_blank"><InstagramIcon className="fa fa-instagram" /></Link>
                                </li>
                                <li>
                                    <Link to="#" target="_blank"><WhatsAppIcon className="fa fa-whatsapp" /></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
