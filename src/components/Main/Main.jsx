import React from 'react'
import c from './Main.module.css'
import mainPart from '../../DATA-JSONS/data-mainPart.json'
import { useState, useEffect, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'; //key={uuidv4()}
import { AiOutlineLeft, AiOutlineRight, AiOutlineHeart, AiOutlineClose } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { GoLaw } from 'react-icons/go'
import { useDispatch } from 'react-redux'
import {BsFillCartCheckFill} from 'react-icons/bs'
import { GrLinkTop } from 'react-icons/gr'
// import { FaUserAstronaut } from 'react-icons/fa';
import {FaTelegramPlane} from 'react-icons/fa'
import { SiGooglechat } from 'react-icons/si'
const Main = () => {
  const [carouselPage, setCarouselPage] = useState(0)
let nextPage = () => {
  if(carouselPage < 5){
    setCarouselPage(carouselPage + 1)
  }
  else{
    setCarouselPage(0)
  }
}
let previousPage = () => {
  if(carouselPage > 0){
    setCarouselPage(carouselPage - 1)
  }
  else{
    setCarouselPage(5)
  }
}
  const $carousel = useRef()
  useEffect(() => {
    $carousel.current.scrollLeft = carouselPage * $carousel.current.offsetWidth
  }, [carouselPage])
  const [brands, setBrands] = useState(0)
  useEffect(() => {
    brandsEl.current.scrollLeft = brands  * 275
  }, [brands])
  const brandsEl = useRef()
const [gadgetPage, setGadgetPage] = useState(0)
useEffect(() => {
gadgetsEl.current.scrollLeft = gadgetPage * 285
}, [gadgetPage])
const gadgetsEl = useRef()
const [allProducts, setAllProducts] = useState([])
const [productsCarousel, setProductsCarousel] = useState(0)
const dispatch = useDispatch()
const [btnCartStyle, setBtnCart] = useState()
const [productCount, setProductCount] = useState(1)
const [chatWithAdmin, setChatWithAdmin] = useState(false)
useEffect(() => {
  fetch("http://localhost:8000/v2/allproducts")
  .then(response => response.json())
  .then(data => setAllProducts(data))
}, [])
const carouselProducts = useRef()
useEffect(() => {
  carouselProducts.current.scrollLeft = productsCarousel * 273
}, [productsCarousel])
const [secondCarouselProduct, setSecondCarouselProduct] = useState(0)
const secondProductCarousel = useRef()
useEffect(() => {
  secondProductCarousel.current.scrollLeft =  secondCarouselProduct * 273
}, [secondCarouselProduct])
const [lastCarouselProduct, setLastCarouselProduct] = useState(0)
const LastCarouselEl = useRef()
useEffect(() => {
  LastCarouselEl.current.scrollLeft = lastCarouselProduct  * 273
}, [lastCarouselProduct])
const [listCarousel, setListCarousel] = useState(0)
useEffect(() => {
listEl.current.scrollLeft = listCarousel * listEl.current.offsetWidth 
}, [listCarousel])
const listEl = useRef()
const [productNumberCount, setProductNumberCount] = useState(1)
useEffect(() => {
  window.scrollTo({top: 0})
}, [])
return (
    <div>
      <div className={c.main_carousel_box}>
        {mainPart ?
        <div style={{width: "100%", height: "100%"}}  >
<div className={c.wrapper_btn_box}>
  <button onClick={previousPage}><AiOutlineLeft/></button>
  <button onClick={nextPage}><AiOutlineRight/></button>
</div>
{        mainPart.map(item =>
<div  ref={$carousel} className={c.carousel_photoes_box}>
{          item.carouselPhoto.map(photoCarousel =>
            <div className={c.carousel_img_box} key={uuidv4()}><img className={c.carousel_photo} src={photoCarousel} alt="" /></div>
            )}
            {item.carouselPhonePhotos.map(photoCarousel =>
              <div className={c.carousel_phone_version} key={uuidv4()} ><img src={photoCarousel} alt="" /></div>
              )}
          </div>
          )
          } </div>
           : null
        }
        {
mainPart.map(item =>
  <div className={c.carousel_wrapper_circles}>
{new Array(item.carouselCircles).fill("*").map((number, index) =>
<div key={uuidv4()} >
  <div style={carouselPage === index ? {background: "none", borderColor: "black", transform: "scale(1.2)"} : null} onClick={() => {setCarouselPage(index)}} className={c.carousel_circles}></div>
  </div>
  )}
  </div>
)
        }
      </div>
      <div className={c.brand_container}>
      <div className={c.wrapper_btn_box_card}>
<button onClick={() =>{
if(brands > 0){
  setBrands(brands - 1)
}
else{
  setBrands(4)
}
if(brands === 7){
  setBrands(brands - 4)
}
if(gadgetPage === 6){
  setGadgetPage(gadgetPage - 3)
}
}}><AiOutlineLeft/></button>
<button onClick={() => {
  if(brands < 4){
    setBrands(brands + 1)
  }
  else{
    setBrands(0)
  }
}}><AiOutlineRight/></button>
</div>
<div className={`${c.wrapper_btn_box_card} ${c.wrapper_btn_box_phone}`}>
<button onClick={() =>{
if(brands > 0){
  setBrands(brands - 1)
}
else{
  setBrands(7)
}
}}><AiOutlineLeft/></button>
<button onClick={() => {
  if(brands < 7){
    setBrands(brands + 1)
  }
  else{
    setBrands(0)
  }
}}><AiOutlineRight/></button>
</div>
<div className={`${c.wrapper_btn_box_card} ${c.wrapper_btn_box_tablet}`}>
<button onClick={() =>{
if(brands > 0){
  setBrands(brands - 1)
}
else{
  setBrands(6)
}
if(brands === 7){
  setBrands(brands - 2)
}
}}><AiOutlineLeft/></button>
<button onClick={() => {
  if(brands < 6){
    setBrands(brands + 1)
  }
  else{
    setBrands(0)
  }
}}><AiOutlineRight/></button>
</div>
        <div ref={brandsEl} className={c.wrapper_brands_box}>
        {mainPart ?
    mainPart.map(item =>
      item.brands.map(brand =>
        <div key={uuidv4()}>
          <img src={brand} alt="" />
        </div>
        )
      ) : null  
    }
    </div>
      </div>
      <div className={c.carousel_preference_product}>
      <div className={c.wrapper_btn_box_card}>
<button onClick={() =>{
if(gadgetPage > 0){
  setGadgetPage(gadgetPage - 1)
}
else{
  setGadgetPage(3)
}
if(gadgetPage === 5){
  setGadgetPage(gadgetPage - 3)
}
if(gadgetPage === 4){
  setGadgetPage(gadgetPage - 2)
}
}}><AiOutlineLeft/></button>
<button onClick={() => {
  if(gadgetPage < 3){
    setGadgetPage(gadgetPage + 1)
  }
  else{
    setGadgetPage(0)
  }
}}><AiOutlineRight/></button>
</div>
<div className={`${c.wrapper_btn_box_card} ${c.wrapper_btn_box_phone}`}>
<button onClick={() =>{
if(gadgetPage > 0){
  setGadgetPage(gadgetPage - 1)
}
else{
  setGadgetPage(5)
}
}}><AiOutlineLeft/></button>
<button onClick={() => {
  if(gadgetPage < 5){
    setGadgetPage(gadgetPage + 1)
  }
  else{
    setGadgetPage(0)
  }
}}><AiOutlineRight/></button>
</div>
<div className={`${c.wrapper_btn_box_card} ${c.wrapper_btn_box_tablet}`}>
<button onClick={() =>{
if(gadgetPage > 0){
  setGadgetPage(gadgetPage - 1)
}
else{
  setGadgetPage(4)
}
if(gadgetPage === 5){
  setGadgetPage(gadgetPage - 2)
}
}}><AiOutlineLeft/></button>
<button onClick={() => {
  if(gadgetPage < 4){
    setGadgetPage(gadgetPage + 1)
  }
  else{
    setGadgetPage(0)
  }
}}><AiOutlineRight/></button>
</div>
        {
          mainPart ?
          mainPart.map(items =>
            <div ref={gadgetsEl} className={c.carousel_gadget_container}>
              {
                items.gadgetProduct.map(gadgetProduct =>
                  <div key={uuidv4()}>
                    <img src={gadgetProduct.img} alt="" />
                  <span>{gadgetProduct.title}</span>
                  </div>
                  )
              }
            </div>
            ) : null
        }
      </div>
      <div className={c.container__card}>
      <div className={c.wrapper_btn_box_card}>
<button onClick={() =>{
if(productsCarousel > 0){
  setProductsCarousel(productsCarousel - 1)
}
else{
  setProductsCarousel(11)
}
if(productsCarousel === 14){
  setProductsCarousel(productsCarousel - 4)
}
if(productsCarousel === 13){
  setProductsCarousel(productsCarousel - 3)
}
}}><AiOutlineLeft/></button>
<button onClick={() => {
  if(productsCarousel < 11){
    setProductsCarousel(productsCarousel + 1)
  }
  else{
    setProductsCarousel(0)
  }
}}><AiOutlineRight/></button>
</div>
<div className={`${c.wrapper_btn_box_card} ${c.wrapper_btn_box_phone}`}>
<button onClick={() =>{
if(productsCarousel > 0){
  setProductsCarousel(productsCarousel - 1)
}
else{
  setProductsCarousel(14)
}

}}><AiOutlineLeft/></button>
<button onClick={() => {
  if(productsCarousel < 14){
    setProductsCarousel(productsCarousel + 1)
  }
  else{
    setProductsCarousel(0)
  }
}}><AiOutlineRight/></button>
</div>
<div className={`${c.wrapper_btn_box_card} ${c.wrapper_btn_box_tablet}`}>
<button onClick={() =>{
if(productsCarousel > 0){
  setProductsCarousel(productsCarousel - 1)
}
else{
  setProductsCarousel(11)
}
if(productsCarousel === 14){
  setProductsCarousel(productsCarousel - 2)
}
}}><AiOutlineLeft/></button>
<button onClick={() => {
  if(productsCarousel < 13){
    setProductsCarousel(productsCarousel + 1)
  }
  else{
    setProductsCarousel(0)
  }
}}><AiOutlineRight/></button>
</div>
      <div ref={carouselProducts} className={c.card_products_container}>
{
  allProducts ?
  allProducts.map((product, index) =>
    <div key={product._id} className={c.product_card}>
      <div className={c.discount_text}>
      <div>Сарик хафта</div>
      </div>
<img src={product.image[0]?.url} alt="" />
<div>
<p>{product.name}</p>
<s>{product.price * 1.2}$</s>
<br />
<b>{product.price}$</b>
</div>
<div className={c.buy_btn_cart}>
<button style={btnCartStyle === index ? {display: "none"} : {display: "block"}} onClick={() => {
    setProductCount(productCount + productNumberCount)
    setProductNumberCount(1)
  setBtnCart(index)
dispatch({info: product, type: "CART", number: productCount, state: true})}}>Саватчага <FiShoppingCart/></button>
  <button style={btnCartStyle === index ? {display: "block"} : {display: "none"}} className={c.orderedCart}><BsFillCartCheckFill/></button>
  <div style={btnCartStyle === index ? {display: "flex"} : {display: "none"}} className={c.calculator_product}>
  <div onClick={() => {setProductNumberCount(productNumberCount + 1)
  }}>+</div> <div>{productNumberCount}</div> <div onClick={() => {if(productNumberCount > 0){
    setProductNumberCount(productNumberCount - 1)}}}>-</div>
</div>
<div style={btnCartStyle === index ? {display: "none"} : {display: "flex"}} className={c.icons_box}>
<i><AiOutlineHeart/></i>
  <i><GoLaw/></i>
</div>
</div>
    </div>
    ) : null
}
      </div>
    </div>
    <div className={c.container__card}>
      <div className={c.wrapper_btn_box_card}>
<button onClick={() =>{
if(secondCarouselProduct > 0){
  setSecondCarouselProduct(secondCarouselProduct - 1)
}
else{
  setSecondCarouselProduct(11)
}
if(secondCarouselProduct === 14){
  setSecondCarouselProduct(secondCarouselProduct - 4)
}
if(secondCarouselProduct === 13){
  setSecondCarouselProduct(secondCarouselProduct - 3)
}
}}><AiOutlineLeft/></button>
<button onClick={() => {
  if(secondCarouselProduct < 11){
    setSecondCarouselProduct(secondCarouselProduct + 1)
  }
  else{
    setSecondCarouselProduct(0)
  }
}}><AiOutlineRight/></button>
</div>
<div className={`${c.wrapper_btn_box_card} ${c.wrapper_btn_box_phone}`}>
<button onClick={() =>{
if(secondCarouselProduct > 0){
  setSecondCarouselProduct(secondCarouselProduct - 1)
}
else{
  setSecondCarouselProduct(14)
}
}}><AiOutlineLeft/></button>
<button onClick={() => {
  if(secondCarouselProduct < 14){
    setSecondCarouselProduct(secondCarouselProduct + 1)
  }
  else{
    setSecondCarouselProduct(0)
  }
}}><AiOutlineRight/></button>
</div>
<div className={`${c.wrapper_btn_box_card} ${c.wrapper_btn_box_tablet}`}>
<button onClick={() =>{
if(secondCarouselProduct > 0){
  setSecondCarouselProduct(secondCarouselProduct - 1)
}
else{
  setSecondCarouselProduct(13)
}
if(secondCarouselProduct === 14){
  setSecondCarouselProduct(secondCarouselProduct - 2)
}
}}><AiOutlineLeft/></button>
<button onClick={() => {
  if(secondCarouselProduct < 13){
    setSecondCarouselProduct(secondCarouselProduct + 1)
  }
  else{
    setSecondCarouselProduct(0)
  }
}}><AiOutlineRight/></button>
</div>
      <div ref={secondProductCarousel} className={c.card_products_container}>
{
  allProducts ?
  allProducts.map((product, index) =>
    <div key={product._id} className={c.product_card}>
      <div className={c.top_product_text}>
      <div>Хит Савдо</div>
      </div>
<img src={product.image[1]?.url} alt="" />
<div>
<p>{product.name}</p>
<s>{product.price * 1.2}$</s>
<br />
<b>{product.price}$</b>
</div>
<div className={c.buy_btn_cart}>
<button style={btnCartStyle === index ? {display: "none"} : {display: "block"}} onClick={() => {
    setProductNumberCount(1)
    setProductCount(productCount + productNumberCount)
  setBtnCart(index)
dispatch({type: "CART", info: product, number: productCount, state: true})}}>Саватчага <FiShoppingCart/></button>
  <button style={btnCartStyle === index ? {display: "block"} : {display: "none"}} className={c.orderedCart}><BsFillCartCheckFill/></button>
  <div style={btnCartStyle === index ? {display: "flex"} : {display: "none"}} className={c.calculator_product}>
  <div onClick={() => {setProductNumberCount(productNumberCount + 1)
  }}>+</div> <div>{productNumberCount}</div> <div onClick={() => {if(productNumberCount > 0){
    setProductNumberCount(productNumberCount - 1) }}}>-</div>
</div>
<div style={btnCartStyle === index ? {display: "none"} : {display: "flex"}} className={c.icons_box}>
<i><AiOutlineHeart/></i>
  <i><GoLaw/></i>
</div>
</div>
    </div>
    ) : null
}
      </div>
    </div>
    <div className={c.container__card}>
      <div className={c.wrapper_btn_box_card}>
<button onClick={() =>{
if(lastCarouselProduct > 0){
  setLastCarouselProduct(lastCarouselProduct - 1)
}
else{
  setLastCarouselProduct(11)
}
if(lastCarouselProduct === 14){
  setLastCarouselProduct(lastCarouselProduct - 4)
}
if(secondCarouselProduct === 13){
  setLastCarouselProduct(lastCarouselProduct - 3)
}
}}><AiOutlineLeft/></button>
<button onClick={() => {
  if(lastCarouselProduct < 11){
    setLastCarouselProduct(lastCarouselProduct + 1)
  }
  else{
    setLastCarouselProduct(0)
  }
}}><AiOutlineRight/></button>
</div>
<div className={`${c.wrapper_btn_box_card} ${c.wrapper_btn_box_phone}`}>
<button onClick={() =>{
if(lastCarouselProduct > 0){
  setLastCarouselProduct(lastCarouselProduct - 1)
}
else{
  setLastCarouselProduct(14)
}
}}><AiOutlineLeft/></button>
<button onClick={() => {
  if(lastCarouselProduct < 14){
    setLastCarouselProduct(lastCarouselProduct + 1)
  }
  else{
    setLastCarouselProduct(0)
  }
}}><AiOutlineRight/></button>
</div>
<div className={`${c.wrapper_btn_box_card} ${c.wrapper_btn_box_tablet}`}>
<button onClick={() =>{
if(lastCarouselProduct > 0){
  setLastCarouselProduct(lastCarouselProduct - 1)
}
else{
  setLastCarouselProduct(13)
}
if(lastCarouselProduct === 14){
  setLastCarouselProduct(lastCarouselProduct - 2)
}
}}><AiOutlineLeft/></button>
<button onClick={() => {
  if(productsCarousel < 13){
    setLastCarouselProduct(lastCarouselProduct + 1)
  }
  else{
    setLastCarouselProduct(0)
  }
}}><AiOutlineRight/></button>
</div>
      <div ref={LastCarouselEl} className={c.card_products_container}>
{
  allProducts ?
  allProducts.map((product, index) =>
    <div key={product._id} className={c.product_card}>
      <div className={c.alternative_product}>
      <div>Тавсия этамиз</div>
      </div>
<img src={product.image[2]?.url} alt="" />
<div>
<p>{product.name}</p>
<s>{product.price * 1.2}$</s>
<br />
<b>{product.price}$</b>
</div>
<div className={c.buy_btn_cart}>
<button style={btnCartStyle === index ? {display: "none"} : {display: "block"}} onClick={() => {
    setProductCount(productCount + productNumberCount)
    setProductNumberCount(1)
  setBtnCart(index)
dispatch({type: "CART", number: productCount, info: product, state: true})}}>Саватчага <FiShoppingCart/></button>
  <button style={btnCartStyle === index ? {display: "block"} : {display: "none"}} className={c.orderedCart}><BsFillCartCheckFill/></button>
  <div style={btnCartStyle === index ? {display: "flex"} : {display: "none"}} className={c.calculator_product}>
  <div onClick={() => {setProductNumberCount(productNumberCount + 1)
  }}>+</div> <div>{productNumberCount}</div> <div onClick={() => {if(productNumberCount > 0){
    setProductNumberCount(productNumberCount - 1)}}}>-</div>
</div>
<div style={btnCartStyle === index ? {display: "none"} : {display: "flex"}} className={c.icons_box}>
<i><AiOutlineHeart/></i>
  <i><GoLaw/></i>
</div>
</div>
    </div>
    ) : null
}
      </div>
    </div>
    {
      mainPart ?
      mainPart.map(item =>
        item.appPreference.map(app =>
<div className={c.container_info} key={uuidv4()}>
<div className={c.box_info}>
<div className={c.main_img}>
          <img src={app.img} alt="" />
        </div>
        <div>
<div>
<h2>
  {app.textPreference}
</h2>
<p className={c.text_app}>{app.text}</p>
</div>
<div className={c.box_QR_info}>
  <div className={c.QR_code}>
    <img className={c.QR_img} src={app.QRCODE} alt="" />
  </div>
    <p className={c.instruction_text_QRCODE}>{app.instruction}</p>
</div>
<div>
<img className={c.playMarket_logo} src={app.playMarketLogo} alt="" />
</div>
        </div>
</div>
</div>
          )
          
        ) : null
    }
            <div className={c.conditions_container}>
          {
            mainPart ?
            mainPart.map(item =>
              item.providedFacilities.map(condition =>
<div key={uuidv4()}>
<div className={c.img_condition}>
  <div>
<img src={condition.img} alt="" />
</div>
</div>
<b>{condition.facility}</b>
<p>{condition.text}</p>
</div>
                )
              ) : null
          }
        </div>
        <div className={c.carousel_list_container}>
        <div ref={listEl} className={c.carousel_conditions}>
{
  mainPart ?
  mainPart.map(item =>
item.providedFacilities.map(condition =>
  <div className={c.condition_card} key={uuidv4()}>
    <div className={c.img_condition}>
      <div>
<img src={condition.img} alt="" />
</div>
</div>
<b>{condition.facility}</b>
<p>{condition.text}</p>
  </div>
  )
    )
  :null
}
</div>
<div className={c.list_carousel_circle_box}>
  {
    new Array(5).fill("*").map((circles, index) =>
      <div key={uuidv4()} className={c.list_circles_carousel} style={listCarousel === index ? {borderColor: "black", background: "white"} : null} onClick={() => {setListCarousel(index)}}></div>
      )
  }
</div>
</div>
<div className={c.back_to_top_box}>
  <div>
<div className={c.box_options_right}>
<div onClick={() => {
  window.scrollTo({top: 0})
    }} className={c.back_to_top}>
<GrLinkTop/>
    </div>
    <div className={c.telegram_icon}>
<FaTelegramPlane/>
    </div>
    <div className={c.chat_btn_box}>
    <div className={c.radious_box}></div>
    <div className={c.box_shadow_radious}></div>
    <div onClick={() => {setChatWithAdmin(true)}} className={c.icon_chat}>
      <SiGooglechat/>
    </div>
    </div>
</div>
</div>
    </div>
    <div onClick={() => {setChatWithAdmin(false)}} className={c.container_admin_chat} style={chatWithAdmin ? {display: "block"}: {display: "none"}}>
        <div className={c.chat_box}>
        <iframe  src="https://xn--80affa3aj0al.xn--80asehdb/" frameborder="0"></iframe>
        <i onClick={() => {setChatWithAdmin(false)}} className={c.close_website_icon}><AiOutlineClose/></i>
        </div>
    </div>
    </div>
  )
}

export default Main