import React from 'react'
import "./footer.css"

export const Footer = () => {
  return (
    <>
    <footer>
        <div className="container">
            <div className="box">
                <ul className='flex'>
                    <li>Term of Use</li>
                    <li>Privacy-Policy</li>
                    <li>Blog</li>
                    <li>FAQ</li>
                    <li>Watch List</li>
                </ul>
                <p>
                © 2023 Roxy Cinema.All Right Reserved. All videos and shows on this plateform are trademarks of, and all related images and content are the property of, Roxy Cinema Inc. Duplication and copy of this is strictly prohibited. All rights reserved. 
                </p>
            </div>
            <div className="box">
                <h3>Follow Us</h3>
                <i className='fab fa-facebook'></i>
                <i className='fab fa-twitter'></i>
                <i className='fab fa-youtube'></i>
                <i className='fab fa-instagram'></i>
            </div>
            <div className="box">
                <h3>Roxy Cinema App</h3>
                <div className="img flexSB">
                    <img src="./images/app store.png" alt="" width="25px" heigth="100px"/>
                    <span>App Store</span>
                    <img src="./images/google.jpg" alt="" width="25px" heigth="100px"/>
                    <span>Google Play Store</span>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}
