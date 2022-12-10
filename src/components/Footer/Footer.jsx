import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import footerPart from '../../DATA-JSONS/data-footer.json'
import c from './Footer.module.css'
import {GrFacebookOption} from 'react-icons/gr'
import {FaTelegramPlane} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlineYoutube} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { BsChevronRight } from 'react-icons/bs'
const Footer = () => {
  const [pickedFooterText, setPickedFooterText] = useState(null)
  return (
    <footer>
{footerPart ?
footerPart.map(item =>
  <div key={uuidv4()}>
<div className={c.footer_options}>
  {item.footerInfo.map((text, index) =>
<div key={uuidv4()}>
  <div onClick={() => {if(pickedFooterText === null){setPickedFooterText(text)} else{setPickedFooterText(null)}}} className={c.box_main_info}>
  <b>{text.title}</b> <i style={pickedFooterText ? {transform: "rotate(90deg)", transition: "0.5s"} : null}><BsChevronRight/></i>
  </div>
{
pickedFooterText ?
pickedFooterText.infoText.map(option =>
  <div key={uuidv4()}>
    <p className={c.footer_text_option}>{option}</p>
  </div>
  ): null } 
</div>
    )}
</div>
<div className={c.footer_line_box_phone_version}>
  <hr />
</div>
    <div className={c.footer_info_box}>
    <p className={c.footer_main_text}>{item.text}</p>
    <h2 className={c.footer_phonenumber}>{item.phonenumber}</h2>
    <div className={c.icon_apps_box}>
    <i className={c.icon_app}><GrFacebookOption/></i>
    <i className={c.icon_app}><FaTelegramPlane/></i>
    <i className={c.icon_app}><BsInstagram/></i>
    <i className={c.icon_app}><AiOutlineYoutube/></i>
    </div>
    <div className={c.footer_playMarket_logo}>
      <img src={item.playMarketLogo} alt="" />
    </div>
    <div className={c.branch_link_info}>
    <Link className={c.link_info} >{item.branchInfo}</Link>
    </div>
    <div className={c.telegram_box_footer_center}>
    {
    footerPart.map(item =>
      item.footerInfo.map(info =>
        info.telegram ?
        <div key={uuidv4()}>
        <div className={c.telegram_box_option}>
        <i><FaTelegramPlane/></i> <p>{info.telegram}</p>
            </div>
            </div>
        : null)
      ) }
      </div>
  </div>
    {
      item.footerInfo.map(info =>
        <div className={c.info_option_card} key={uuidv4()}>
<b className={c.footer_title}>{info.title}</b>
{
  info.infoText.map(text =>
  <p className={c.footer_text} key={uuidv4()}>{text}</p>
  )
}
<div>
  {
    info.telegram ?
    <div className={c.telegram_box_option}>
<i><FaTelegramPlane/></i> <p>{info.telegram}</p>
    </div>
  : null}
</div>
        </div>
        
        )
    }
  </div>
  ) : null
}
<div className={c.footer_line_box_phone_version}>
  <hr />
</div>
<div className={c.footer_container_images_center}>
  <p>Қуйидаги тўловларни қабул қиламиз</p>
{
  footerPart.map(item =>
<div key={uuidv4()} className={c.footer_center_images}>
{  item.footerBottom.map(bottom =>
    bottom.imges ?
    bottom.imges.map(photo =>
<div key={uuidv4()}>
<img src={photo} alt="" />
</div>
      ) : null
    ) }
</div>

  ) 
  
}
</div>
<div className={c.footer_line_box}>
  <hr />
</div>
{
  footerPart ? 
  footerPart.map(item =>
    item.footerBottom.map(bottom =>
<div key={uuidv4()} className={c.footer_bottom}>
{bottom.text ?
<div className={c.footer_bottom_text_box}>
  <p className={c.footer_bottom_text}>{bottom.text}</p>
  </div>
: null
}
      <div className={c.footer_bottom_images}>
{
bottom.imges ?
bottom.imges.map(image =>
        <img key={uuidv4()} src={image} alt="" />
  ): null}
      </div>
</div>
      )
    ) : null
}
    </footer>
  )
}

export default Footer