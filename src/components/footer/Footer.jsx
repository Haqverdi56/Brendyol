import React from 'react'
import './footer.scss'
import brendyolImage from '../../assets/images/brendyolfooter.png'
import { FaFacebookF } from 'react-icons/fa'
import { AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-inner'>
        <div className='footer-logo-div'>
          <img src={brendyolImage} alt="" />
          <div className='footer-icon-div'>
            <FaFacebookF/>
            <AiFillInstagram/>
            <AiFillYoutube/>
            <AiOutlineTwitter/>
          </div>
        </div>
        <div className='footer-menu'>
          <h2>Menu</h2>
          <div className='footer-categories'>
            <p>Yeni</p>
            <p>Endirimlər</p>
            <p>Aksesuarlar</p>
          </div>
        </div>
        <div className='footer-menu'>
          <h2>Kömək</h2>
          <div className="footer-categories">
            <p>Tez-tez soruşulan suallar</p>
            <p>Çatdırılma xidməti</p>
            <p>Geri qaytarılma şərtləri</p>
          </div>
        </div>
        <div className='footer-menu'>
          <h2>Əlaqə</h2>
          <div className="footer-categories">
            <p>qhaqverdi56@gmail.com</p>
            {/* <p>*0001</p> */}
          </div>
        </div>
      </div>
      <div className='all-reserved'>
        <p>© Brendyol MMC 2023. Bütün hüquqlar qorunur.</p>
        <div className='all-reserved-rules'>
          <p>Qaydalar və şərtlər</p>
          <p>Məxfilik siyasəti</p>
        </div>
      </div>
    </div>
  )
}

export default Footer