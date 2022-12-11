import React from 'react'
import c from './Header.module.css'
import navbatTextTop from '../../DATA-JSONS/data-headerTop.json'
import headerTextCenter from '../../DATA-JSONS/data-headerCenter.json'
import { v4 as uuidv4 } from 'uuid';
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { BiCart, BiWorld } from 'react-icons/bi'
import { useState, useRef, useEffect } from 'react';
import { BsTelephone, BsSearch } from 'react-icons/bs'
import { AiOutlineAudio, AiOutlineHeart, AiOutlineMenu, AiTwotoneFire, AiOutlineWarning, AiOutlineFileSearch } from 'react-icons/ai'
import { AiOutlineLeft } from 'react-icons/ai'
import { GoPackage, GoLaw } from 'react-icons/go'
import { BiUser } from 'react-icons/bi'
import { FiShoppingCart, FiChevronRight } from 'react-icons/fi'
import headerBottomText from '../../DATA-JSONS/data-headerBottom.json'
import { FiGrid } from 'react-icons/fi'
import { RiThunderstormsFill } from 'react-icons/ri'
import { GrClose,  GrFormClose } from 'react-icons/gr'
import { VscChromeClose } from 'react-icons/vsc'
import  textKatalog from '../../DATA-JSONS/data-katalog.json'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { BsChevronRight } from 'react-icons/bs'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { signup, logout, useAuth } from "../../firebase/config";
const Header = () => {
  const [location, setLocation] = useState(navbatTextTop.map(text => text.location[0]))
  const [selectedText, setSelectedText] = useState()
  const [katalog, setKatalog] = useState(false)
  const [registrAccount, setRegistrAccount] = useState(false)
  const [registrTextOptions, setRegistrTextOptions] = useState(0)
  const registrEl = useRef()
  const [registrPhonenumber, setRegistrPhonenumber] = useState()
  const [registrPhonenumberSignup, setRegistrPhonenumberSignup] = useState()
  const [label, setLabel]= useState(false)
  const [secondLabel, setSecondLabel] = useState(false)
  const [closeApp, setCloseApp] = useState()
  const [sidebarBox, setSidebarBox] = useState(false)
  const sidebarEl = useRef()
  const [indexEquality, setIndexEquality] = useState()
  const [pickedText, setPickedText] = useState(null)
  const [pickedTextSidebar, setPickedTextSidebar] = useState(null)
  const [pagesidebar, setPageSidebar] = useState(0)
  const [selectOptions, setSelectOptions] = useState(0)
  const [cartBox, setCartBox] = useState(false)
  if(katalog){
    document.body.style.overflow = "hidden"
  }
  else{
    document.body.style.overflow = "auto"
  }
  useEffect(() => {
    registrEl.current.scrollLeft = registrTextOptions * registrEl.current.offsetWidth
  }, [registrTextOptions])
  useEffect(() => {
      sidebarEl.current.scrollLeft = pagesidebar * sidebarEl.current.offsetWidth
  }, [pagesidebar])
const [orderedProduct, setOrderedProduct] = useState()
const [indexProduct, setIndexProduct] = useState()
  const data = useSelector(cartInfo => cartInfo.cartInfo)
// const newArr = data.map(item =>
//   item.cardData.name
//   )
//   console.log(newArr);
const [productAmount, setProductAmount] = useState(1)
const [favouriteProduct, setFavouriteProduct] = useState()

  const dataNumber = useSelector(amountInfo => amountInfo.amountInfo.products)
  const stateForm = useSelector(amountInfo => amountInfo.amountInfo.infoState)
      const currentUser = useAuth();
    const emailRef = useRef();
    const passwordRef = useRef();
    console.log(currentUser);
    async function handleSignup() {
        try {
            await signup(emailRef.current.value, passwordRef.current.value);
            alert("Succesfully signedUp")
        } catch {
            alert("Error!");
        }
    }
  return (
    <header>
{
  navbatTextTop ?
  navbatTextTop.map(navText =>
    <div  className={c.header_top} key={uuidv4()}>
      <div className={c.header_navbarLocation_box}>
<i><HiOutlineLocationMarker/></i>  <span>{location}</span>
<div className={c.location_choices_box}>
  <div className={c.header_region_options}> 
  {navText.location ? 
navText.location.map(regions =>
  <option onClick={(e) => { setLocation(e.target.value) }} key={uuidv4()} value={regions}>{regions}</option>
  )  : null
}
  </div>
</div>
      </div>
<div className={c.header_logo}>
<img src="https://marketing.uz/uploads/articles/1208/article-original.png" alt="" />
</div>
      <ul>
{
  navText.navbarText ?
  navText.navbarText.map(navOptions =>
<div key={uuidv4()}>
{navOptions.text ?
<li>{navOptions.text}</li>
 : null}
{navOptions.textOption ?
<li className={c.nav_text_option}>{navOptions.textOption}</li>
 : null}
</div>
    ) : null
}
      </ul>
      <div className={c.phonenumber_and_location_box}>
      <div className={c.header_top_phonenumber_box}>
      <span className={c.header_phone_icon}><BsTelephone/></span>  <span className={c.header_phone_text}>Aлоқа маркази :</span> <span className={c.phone_call_number}>{navText.phoneNumber}</span>
      </div>
      <div  className={`${c.header_navbarLocation_box} ${c.header_location_end}`}>
<i><HiOutlineLocationMarker/></i>  <span>{location}</span>
<div className={`${c.location_choices_box}  ${c.header_region_end}`}>
  <div  className={c.header_region_options}> 
  {navText.location ? 
navText.location.map(regions =>
  <option onClick={(e) => { setLocation(e.target.value) }} key={uuidv4()} value={regions}>{regions}</option>
  )  : null
}
  </div>
</div>
      </div>
      </div>
 <div className={c.header_language_box}>
  <i><BiWorld/></i>
  <select name="" className={c.header_select_language} id="">
    <option value="uz">УЗ</option>
    <option value="ru">РУ</option>
  </select>
 </div>
    </div>
    ) : null
}
<div className={c.header_center}>
  <button onClick={() => {setSidebarBox(true)}} className={c.sidebar_btn}><AiOutlineMenu/></button>
  <div className={c.header_center_logo}>
    <img src="https://marketing.uz/uploads/articles/1208/article-original.png" alt="" />
  </div>
  <form className={c.header_center_seacrh}>
    <div className={c.header_product_select}>
<select style={selectedText < 5 ? {width: selectedText * 18 + "px"} : {width: selectedText * 8.5 + "px"} } onChange={(e) => {setSelectedText(e.target.value.length)}} name="" className={c.header_center_select} id="">
  {headerTextCenter ? 
headerTextCenter.map(text =>
text.selectOption.map(textSelect =>
  <option key={uuidv4()} value={textSelect}>{textSelect}</option>
  )
  )  : null
}
</select>
</div>
<div className={c.header_center_input}>
  <input type="text" /> <i><AiOutlineAudio/></i>
</div>
<button type='submit' className={c.btn_search}><BsSearch/></button>
  </form>
  <div className={c.header_center_nav}>
    {headerTextCenter ?
  headerTextCenter.map(text =>
  text.navText.map(textNav =>
    <ul key={uuidv4()}>
<div>
<i><GoPackage/></i>
<li  className={c.nav_text_options}>{textNav.box}</li>
</div>
<div onClick={() => {setRegistrAccount(true)}}>
<i><BiUser/></i>
 <li  className={c.nav_text_options}>{textNav.account}</li> 
</div>
<div>
<i><GoLaw/></i>
 <li  className={c.nav_text_options}>{textNav.compare}  </li> 
</div>
<div>
<i><AiOutlineHeart/></i>
<li  className={c.nav_text_options}>{textNav.favourite} </li> 
</div>
<div onClick={() =>
{
  setCartBox(true)
}
}>
<i><FiShoppingCart/> <sup>{dataNumber}</sup></i>
<li  className={c.nav_text_options}>{textNav.cart}</li> 
</div>
</ul>
    )

    ) : null }
  </div>
</div>
{
  headerBottomText ?
  headerBottomText.map(textNav =>
<div key={uuidv4()} className={c.header_bottom}>
<div onClick={() => {setKatalog(!katalog)}} className={c.header_bottom_btn_box}>
<button className={c.header_btn_bottom}> <i style={katalog === false ? {display: "block"} : {display: "none"}}><FiGrid/></i> <i style={katalog ? {display: "block"} : {display: "none"}}><GrFormClose/></i> {textNav.btn}</button>
</div>
    <ul>
<div>
<i className={c.icon_thunder}><RiThunderstormsFill/></i>  <li>{textNav.weekDiscount}</li> 
</div>
<div>
<i className={c.icon_heart} ><AiTwotoneFire/></i> <li className={c.header_bottom_right_li}>{textNav.dicount}</li> 
  </div>
{textNav.productOptions ?
<div>
{textNav.productOptions.map(textProducts =>
  <li key={uuidv4()} className={c.header_bottom_right_li}>{textProducts}</li>
  )}
</div>
  : null
}
    </ul>
    </div>
    ) : null
}
<div style={closeApp === false ? {display: "none"} : null} className={c.header_above}>
  <div className={c.header_left_box}>
    <div onClick={() => {setCloseApp(false)}} className={c.header_bottom_btn_close_icon}><i><GrFormClose/></i></div>
    <div className={c.header_bottom_app}>
    <img  src="https://texnomart.uz/_nuxt/img/logo-gold.6c751c6.svg" alt="" />
  </div>
  <div className={c.header_bottom_text_info}>
    <p>Приложение</p>
    <img src="https://texnomart.uz/_nuxt/img/tm-medium.4a1cf70.svg" alt="" />
  </div>
  </div>
  <div className={c.header_right_box}>
    <button>УСТАНОВИТЬ</button>
  </div>
</div>
<div style={katalog ? {display: "flex"} : {display: "none"}} className={c.katalog_container}>
  <div className={c.box_options_katalog}>
  {
      textKatalog.map(text =>
      text.textOptions ?
      text.textOptions.map((item, index) =>
       <div style={indexEquality === index ? {backgroundColor: "rgba(251,193,0,.2)"} : null} key={uuidv4()} onMouseOver={() => {setPickedText(item)
        setIndexEquality(index)}} className={c.option_box_goods}>
         <p>{item.option}</p> <i><FiChevronRight/></i>
       </div>
        ) : null
        ) 
    }
  </div>
  <div className={c.box_result_text_katalog}>
{
  pickedText ?
  <div>
<div className={c.heading_box}>
<h2>{pickedText.option}</h2>
</div>
  <div className={c.box_results_text}>
{ pickedText.textResults.map(text =>
  <div key={uuidv4()} className={c.info_text_result_box}>
      <b>{text.heading}</b>
{text.underHeading ?
      <b>{text.underHeading}</b>
 : null
}
{
  text.underHeadings ?
text.underHeadings.map(textHeadings =>
  <b key={uuidv4()}>{textHeadings}</b>
  )
: null
}
      {
      text.optionResult ?
      text.optionResult.map(item =>
        <p key={uuidv4()}>{item}</p>
      ) : null
    }
      {
        text.nextHeadings ?
        text.nextHeadings.map(headings =>
          <b key={uuidv4()}>{headings}</b>
          ) : null
      }
      {
        text.nextHeading ?
        <b>{text.nextHeading}</b>
        : null
      }
      {
        text.nextOptionResult ?
        text.nextOptionResult.map(optionText =>
          <p key={uuidv4()}>{optionText}</p>
          ) : null
      }
      {
        text.lastHeading ?
        <b>{text.lastHeading}</b>
        : null
      }
      {
        text.lastOptionResult ?
        text.lastOptionResult.map(optionText =>
          <p key={uuidv4()}>{optionText}</p>
          )
        : null
      }
  </div>
    )} 
    </div>
    </div>
    : null
}
  </div>
</div>
<div style={sidebarBox ? {left: "0"} : {left: "-100%"}} className={c.sidebar_container}>
  <div className={c.appex_box_sidebar}>
    <div className={c.logo_sidebar}>
      <img src="https://texnomart.uz/_nuxt/img/texnomart-logo-white.91385b7.svg" alt="" />
    </div>
  <div onClick={() => {setSidebarBox(false)}} className={c.btn_close_sidebar}>
    <i><VscChromeClose/></i>
  </div>
  </div>
  <div ref={sidebarEl} className={c.info_option_container_sidebar}>
    <div className={c.info_option_box}>
    <div className={c.account_box_sidebar}>
    <div className={c.icon_user_box}>
      <i><BiUser/></i>
    </div>
    <div className={c.account_text_sidebar}>
      <span className={c.start_registr_text}>Кириш  &nbsp; |  &nbsp; Рўйхатдан ўтиш </span>
    </div>
  </div>
      {
        textKatalog ?
        <div>
{        textKatalog.map(item =>
<div key={uuidv4()}>
{          item.allOptionsLeading ?
          <div onClick={() => {setPickedTextSidebar(item)
            setPageSidebar(pagesidebar + 1)
          }} className={c.info_all_option}>
        <i><FiGrid/></i>    <p>{item.allOptionsLeading}</p> 
          </div> : null
                    }
{            item.optionsSidebar ?
              item.optionsSidebar.map(text =>
                <p key={uuidv4()}>{text}</p>
              ) : null}
            
              </div>
          )}
          </div> : null

      }
    </div>
    <div className={c.info_text_box}>
      {
    pickedTextSidebar ?
    pickedTextSidebar.textOptions.map(text =>
<div onClick={() => {setPickedText(text)
          setPageSidebar(pagesidebar + 1)
}
} key={uuidv4()} className={c.info_text_otherPages}>
<p >{text.option}</p> <BsChevronRight/>
</div>
      )
    : null    
      }
    </div>
    <div className={c.extra_info_box}>
      {
        pickedText ?
 <div>
        <div className={c.info_theme} onClick={() => {
          setPageSidebar(pagesidebar - 1)
          }}>
          <i><AiOutlineLeft/></i>
        <h3>{pickedText.option}</h3>
        </div>
{pickedText.textResults.map((item) =>
<div key={uuidv4()} className={c.info_text_option} onClick={() => {
  selectOptions <= 0 ? setSelectOptions(item.length) : setSelectOptions(0)
}}>
{item.heading ?
<div className={c.heading_text_box}>
<p >{item.heading}</p>
<i className={c.icon_down_select} onClick={() => {setSelectOptions(0)}} style={selectOptions !== 0 ? {transition: "0.5s", transform: "rotate(90deg)"} : null }><BsChevronRight/></i>
</div>
: null
}
{
  item.optionResult ?
  item.optionResult.slice(0, selectOptions).map(infoText =>
  <div key={uuidv4()} className={c.selected_options_sidebar} >
  <p >{infoText}</p>
  </div>
  )
  : null
}
{item.underHeading ?
<div key={uuidv4()} className={c.selected_options_sidebar}>
<p>{item.underHeading}</p>
</div>
: null
}
{item.underHeadings ?
item.underHeadings.map(text =>
<div key={uuidv4()} className={c.selected_options_sidebar}>
  <p>{text}</p>
  </div>
  )
: null
}
{
  item.nextHeading ?
<div className={c.selected_options_sidebar}>
  <p>{item.nextHeading}</p>
  </div>
  : null
}
{
  item.nextOptionResult ?
  item.nextOptionResult.slice(0, selectOptions).map(infoText =>
    <p key={uuidv4()}>{infoText}</p>
    ) : null
}
</div>
  )} </div>
        : null
      }
    </div>
  </div>
</div>
<div style={registrAccount ? {display: "flex"}: {display: "none"}} className={c.registr_whole_container}>
<div  className={c.registr_box}>
<div className={c.appex_options_box}>
<div className={c.registr_options_box}>
<div style={registrTextOptions === 0 ? {background: "white"} : null} onClick={() => {setRegistrTextOptions(0)}}>
  <b>Кириш</b>
    </div>  
    <div style={registrTextOptions === 1 ? {background: "white"} : null} onClick={() => {setRegistrTextOptions(1)}}>
    <b>Рўйхатдан ўтиш</b>
    </div>
</div>
<div onClick={() => {setRegistrAccount(false)}} className={c.registr_icon_box}>
<i><GrClose/></i>
</div>
</div>
<div ref={registrEl} className={c.registr_container}>
  <div className={c.login_box}>
    <form onSubmit={(e) => {e.preventDefault()}}>
      <div className={c.login_input_box}>
      <input style={registrPhonenumber < 9 ? {border: "2px solid red"} : null} onInput={(e) => {setRegistrPhonenumber(e.target.value.length)}} required  type="text" />
      <label className={c.input_type} htmlFor="">Телефон</label>
      <label className={c.input_value_number} htmlFor="">+998</label>
      </div>
      <span className={c.number_incorrect_warning} style={registrPhonenumber < 9 ? {display: "block"} : {display: "none"}}><i><AiOutlineWarning/></i> Телефон рақамини тўғри киритинг</span>
      <div className={c.btn_login_box}>
      <button onClick={handleSignup}  type='submit'>Телефон орқали кириш</button>
      </div>
      <div className={c.secondOption_of_registering}>
        <p>Логин орқали кириш</p>
      </div>
    </form>
  </div>
  <div className={c.signup_box}>
  <form onSubmit={(e) => {e.preventDefault()}}>
      <div className={c.signup_input_box}>
      <input ref={passwordRef} style={registrPhonenumberSignup < 9 ? {border: "2px solid red"} : null} onInput={(e) => {setRegistrPhonenumberSignup(e.target.value.length)}} required  type="text" />
      <label  className={c.input_type} htmlFor="">Телефон</label>
      <label className={c.input_value_number} htmlFor="">+998</label>
      </div>
      <div className={c.signup_phone_incorrect_warning}>
      <span className={c.number_incorrect_warning} style={registrPhonenumberSignup < 9 ? {display: "block"} : {display: "none"}}><i><AiOutlineWarning/></i> Телефон рақамини тўғри киритинг</span>
      </div>
      <div>
      <div className={c.signup_name_input_box}>
      <input onClick={() => {setLabel(true)}} required ref={emailRef} type="email" />
      <label style={label ? {transform: "translate(-9px, -23px) scale(0.9)"} : null} className={c.input_value_name} htmlFor="">Исм</label>
      </div>
      <div className={c.signup_name_input_box}>
      <input onClick={() => {setSecondLabel(true)}} required  type="text" />
      <label style={secondLabel ? {transform: "translate(-9px, -23px) scale(0.9)"} : null} className={c.input_value_name} htmlFor="">Фамилия</label>
      </div>
      </div>
      <div className={c.beneficial_info_box}>
      <p>Чегирмалар ва акциялар ҳақида билишни истайман</p>
      </div>
      <div className={c.btn_signup}>
        <button onClick={handleSignup} type='submit'>Рўйхатдан ўтиш</button>
      </div>
      </form>
  </div>
</div>
</div>
</div>
<div style={cartBox ? {display: "flex"} : {display: "none"}} className={c.cart_whole_container}>
<div className={c.cart_popUp_box}>
<div className={c.appex_cart}>
<h2>Хозир харид килиш</h2>
  <div onClick={() => {setCartBox(false)}} className={c.close_cart_icon_box}>
    <GrClose/>
  </div>
</div>
<div style={stateForm ? {overflow: "auto"} : {overflow: "hidden"}} className={c.cart_ordered_box}>
{  stateForm ?
data.map((item, index) =>
<div style={orderedProduct === item.cardData._id ? {display: "none"} : null }  className={c.product_selected} key={item.cardData._id}>
  <div className={c.ordered_product_info_box}>
<div className={c.ordered_img_product_box}>
<img className={c.ordered_product_photo} src={item.cardData.image[0].url} alt="" />
</div>
<div className={c.ordered_product_text}>
<p>{item.cardData.name}</p>
   <b className={c.ordered_product_price}>{item.cardData.price}$</b>
</div>
</div>
<div className={c.ordered_product_optional_icons}>
  <div className={c.select_ordered_product}>
    <div onClick={() => {setProductAmount(productAmount + indexProduct ** 0)
    setIndexProduct(index)
    }}>+</div><div>{productAmount}</div><div onClick={() => {setProductAmount(productAmount - indexProduct ** 0)}}>-</div>
  </div>
  <div className={c.ordered_product_icons}>
    <i style={favouriteProduct === index ? {color: "red"} : null} onClick={() => {setFavouriteProduct(index)}}><AiOutlineHeart/></i>
    <i onClick={() => {setOrderedProduct(item.cardData._id)}}><RiDeleteBin6Line/></i>
  </div>
</div>
</div>
)
:
<div className={c.box_empty_cart}>
<div className={c.icon_cart_box}>
  <i><BiCart/></i>
</div>
<div className={c.informing_box}>
Саватчада хозирда <br />  &nbsp; &nbsp; &nbsp; ҳеч нима йўқ
</div>
<Link>Харид Килиш</Link>
</div>
}
</div>
{stateForm ?
    <div className={c.btn_box_ordered_product}>
    <button onClick={() => {setCartBox(false)}} className={c.btn_continue_shopping}>Харидларни давом эттириш</button> <button onClick={() => {alert("We recieved your desires, We will deliver")}} className={c.btn_finish_shopping}>Харидни расмийлаштириш</button>
  </div>
  : null 
    }
</div>
</div>
  <div onClick={() => {
    setSidebarBox(false)
  setRegistrAccount(false)
setCartBox(false)
}
    } style={sidebarBox || registrAccount || cartBox ? {display: "block"} : {display: "none"}} className={c.container_shadow}></div>
    <div className={c.header_bottom_phone_version}>
    <i onClick={() => {setSidebarBox(true)}}><AiOutlineFileSearch/></i>
    <i><GoLaw/></i>
    <i onClick={() => {setCartBox(true)}}><FiShoppingCart/> <sup>{dataNumber}</sup></i>
    <i><AiOutlineHeart/></i>
    <i onClick={() => {setRegistrAccount(true)}}><BiUser/></i>
    </div>

    </header>
  )
}

export default Header