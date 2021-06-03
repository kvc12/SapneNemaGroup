import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'
export default class Footer extends React.Component {
    render() {
        return (
            <div className="container">
                    <div className="footer mt-4">
                        <ul className="list-unstyled list-inline text-center">
                            <li className="list-inline-item"><a href="https://www.facebook.com/profile.php?id=100068905235634" target= "_blank" rel="noopener noreferrer"><FacebookIcon className="mx-1"/></a></li>
                            <li className="list-inline-item"><a href="https://www.instagram.com/gharkakhana09032021/" target= "_blank" rel="noopener noreferrer"><InstagramIcon className="mx-1"/></a></li>
                            <li className="list-inline-item"><a href="https://twitter.com/gharkakhana10" target= "_blank"  rel="noopener noreferrer"><TwitterIcon className="mx-1"/></a></li>
                            <li className="list-inline-item"><a href="https://web.whatsapp.com/" target= "_blank" rel="noopener noreferrer"><WhatsAppIcon className="mx-1"/></a></li>
                        </ul>
                        <div class="footer-copyright text-center py-3">© 2021 All rights reserved : Apps Europe Team 
                        </div>
                    </div>
            </div>
        )
    }
}