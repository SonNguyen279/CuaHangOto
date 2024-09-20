import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img className='logo' src={assets.logo} alt="" />
            <p>VinFast logo sử dụng tone màu bạc tinh tế, sang trọng và đẳng cấp tạo cảm nhận về một hãng xe phong cách, thời trang. Khi phối hợp trên các màu xe đỏ hay đen, thiết kế logo màu bạc sẽ cực kỳ nổi bật.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-212-456-7890</li>
                <li>contact@tomato.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Bản quyền 2024 @ Tomato.com - Mọi quyền được bảo lưu.</p>
    </div>
  )
}

export default Footer
