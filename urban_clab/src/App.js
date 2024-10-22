import logo1 from './Image/logo1.png';
import Ac_Repair from './Image/AC Repair.png';
import Clean from './Image/Clean.png';
import eight from './Image/eight8.png';
import electric from './Image/electric.png';
import two2 from './Image/two2.png';
import three3 from './Image/three3.png';
// import five from './Image/five5.png';
import six6 from './Image/six6.png';
import seven7 from './Image/seven7.png';
import four from './Image/four4.png';
import group from './Image/group.png';
import im1 from './Image/im1.png';
import im2 from './Image/im2.png';
import im3 from './Image/im3.png';
import im4 from './Image/im4.png';
import men_salon from './Image/men salon.png';
import nine9 from './Image/nine9.png';
import ten10 from './Image/ten10.png';
import painting from './Image/painting.png';
import right_main from './Image/right_main.png';
import s4_1 from './Image/s4-1.png';
import s4_2 from './Image/s4-2.png';
import s4_3 from './Image/s4-3.png';
import sec5_im1 from './Image/sec5-im1.png';
import sec5_im2 from './Image/sec5-im2.png';
import sec5_im3 from './Image/sec5-im3.png';
import sec5_im4 from './Image/sec5-im4.png';
import sec5_im5 from './Image/sec5-im5.png';
import sec5_im6 from './Image/sec5-im6.png';
import sec5_im7 from './Image/sec5-im7.png';
import sec5_im8 from './Image/sec5-im8.png';
import sec6_im1 from './Image/sec6 im1.png';
import sec7_im1 from './Image/sec7-im1.png';
import sec7_im2 from './Image/sec7-im2.png';
import sec7_im3 from './Image/sec7-im3.png';
import sec7_im4 from './Image/sec7-im4.png';
import sec7_im5 from './Image/sec7-im5.png';
import sec7_im6 from './Image/sec7-im6.png';
import sec7_im7 from './Image/sec7-im7.png';
import sec8_im1 from './Image/sec8-im1.png';
import sec8_im2 from './Image/sec8-im2.png';
import sec8_im3 from './Image/sec8-im3.png';
import sec9_im1 from './Image/sec9-im1.png';
import sec10_im1 from './Image/sec10-im1.png';
import sec10_im2 from './Image/sec10-im2.png';
import sec10_im3 from './Image/sec10-im3.png';
import sec10_im4 from './Image/sec10-im4.png';
import sec10_im5 from './Image/sec10-im5.png';
import sec11_im1 from './Image/sec11-im1.png';
import sec12_im1 from './Image/sec12-im1.png';
import sec12_im2 from './Image/sec12-im2.png';
import sec12_im3 from './Image/sec12-im3.png';
import sec12_im4 from './Image/sec12-im4.png';
import sec12_im5 from './Image/sec12-im5.png';
import sec12_im6 from './Image/sec12-im6.png';
import sec12_im7 from './Image/sec12-im7.png';
import sec12_im8 from './Image/sec12-im8.png';
import sec13_im1 from './Image/sec13-im1.png';
import sec13_im2 from './Image/sec13-im2.png';
import sec13_im3 from './Image/sec13-im3.png';
import sec13_im4 from './Image/sec13-im4.png';
import sec13_im5 from './Image/sec13-im5.png';
import sec13_im6 from './Image/sec13-im6.png';
import sec13_im7 from './Image/sec13-im7.png';
import sec13_im8 from './Image/sec13-im8.png';
import sec13_im9 from './Image/sec13-im9.png';
import sec13_im10 from './Image/sec13-im10.png';
import sec14_im1 from './Image/sec14-im1.png';
import sec14_im2 from './Image/sec14-im2.png';
import sec14_im3 from './Image/sec14-im3.png';
import sec15_im1 from './Image/sec15-im1.png';
// import sec15_im1 from './Image/sec15-im1.png';
// import sec15_im1 from './Image/sec15-im1.png';
// import sec15_im1 from './Image/sec15-im1.png';
// import sec16_im1 from './Image/sec16-im1.png';




import './App.css';

function App() {
  return (
    <div className="App">
    
    <div class="header1">
        <div class="logo">
            <img src={logo1} alt=""/>
        </div>

        <div class="form">
            <i class="fa-solid fa-location-dot"></i>
            <select name="" id="">
                <option value="Select">Select</option>
                <option value="Select">Deccan Gymkhana, Pune</option>
                <option value="Select">FC Road, Pune</option>
                <option value="Select">Viman Nagar, Pune</option>
            </select>

            <i class="fa-solid fa-magnifying-glass"></i> 
            <input type="Search" placeholder="Search for"/>
        </div>

        <div class="login">
            <button>Login</button>
        </div>
    </div> 
    
    <div class="main">
    <div class="left-div">
        <div class="h1"><h1>Home services at your <br/> doorstep</h1></div>
        <div class="left-services">
            <div class="ls-h4"><h3>What are you looking for?</h3></div>
            <div class="ls-im1">
                <div class="ls-im1-div">
                    <img src={men_salon} alt=""/>
                </div>
                <div class="ls-im1-div">
                    <img src="/Image/men salon.png" alt=""/>
                </div>
                <div class="ls-im1-div">
                    <img src={Ac_Repair} alt=""/>
                </div>

                <div class="para1"><p>Womens's Salon</p></div>
                
                <div class="para2"><p>Men's Salon & <br/>Massage</p></div>
                
                <div class="para3"><p>AC & Appliance Repair</p></div>
            </div>

            <div class="ls-im2">
              <div class="ls-im2-p"><p>Cleaning & Pest <br/> Control</p></div> 
                <div class="main-imge"><img src={Clean} alt=""/></div>
            </div>
            <div class="ls-im2">
                <div class="ls-im2-p"><p>Electrician, Plumber & <br/> Carpenter</p></div>
                <div class="main-imge"><img src={electric} alt=""/></div>
            </div>
            <div class="ls-im2">
                <div class="ls-im2-p"><p>Native Water Purifier</p></div>
                <div class="main-imge"><img src="/Image/water puri.png" alt=""/></div>
            </div>
            <div class="ls-im2">
                <div class="ls-im2-p"><p>Painting & <br/> Waterproofing</p></div>
                <div class="main-imge"><img src={painting} alt=""/></div>
            </div>
        </div>

        <div class="review">
            <div class="review1">
                <div class="rev-img">
                    <img src="/Image/star.png" alt=""/>
                </div>
                <div class="rev-info">
                    <h2>4.8</h2>
                    <p>Service Rating</p>
                </div>
            </div>
            <div class="review2">
                <div class="rev-img">
                    <img src={group} alt=""/>
                </div>
                <div class="rev-info">
                    <h2>5M+</h2>
                    <p>Service Rating</p>
                </div>
            </div>
        </div>

    </div>
    <div class="right-div">
        <div class="right-image">
            <div class="right-img1">
            <img class="sec1_right_iamge" src={right_main} alt="service_banner"/>
        </div>
        </div>
    </div>
    </div>


    <div class="section3">
        <div class="sec3-im-div1">
            <div class="sec3-im1"><img src={two2} alt=""/></div>
            <div class="sec3-im"><img src={three3} alt=""/></div>
            <div class="sec3-im"><img src={four} alt=""/></div>
            <div class="sec3-im"><img src={im1} alt=""/></div>
            <div class="sec3-im"><img src={im2} alt=""/></div>
            <div class="sec3-im"><img src={im3} alt=""/></div>
            <div class="sec3-im"><img src={im4} alt=""/></div>
        </div>
    </div>

    <div class="section4">
        <div class="sec4-head"><h1>New and noteworthy</h1></div>
        <div class="sec4-im-div1">
            <div class="sec4-im1">
                <div class="sec4-imag"><img src={s4_1} alt=""/></div>
                <div class="sec3-para"><p>Wall decor (Panels)</p></div>
            </div>
            <div class="sec4-im">
                <div class="sec4-imag"><img src={six6} alt=""/></div>
                <div class="sec3-para"><p>Native Water Purifier</p></div>
            </div>
            <div class="sec4-im">
                <div class="sec4-imag"><img src={s4_2} alt=""/></div>
                <div class="sec3-para"><p>Native Smart Locks</p></div>
            </div>
            <div class="sec4-im">
                <div class="sec4-imag"><img src={seven7} alt=""/></div>
                <div class="sec3-para"><p>Home Paintings</p></div>
            </div>
            <div class="sec4-im">
                <div class="sec4-imag"><img src={eight} alt=""/></div>
                <div class="sec3-para"><p>Laser Hair Reduction</p></div>
            </div>
            <div class="sec4-im">
                <div class="sec4-imag"><img src={nine9} alt=""/></div>
                <div class="sec3-para"><p>Spa Ayurveda</p></div>
            </div>
            <div class="sec4-im">
                <div class="sec4-imag"><img src={s4_3} alt=""/></div>
                <div class="sec3-para"><p>Hair Studio for Women</p></div>
            </div>
            <div class="sec4-im">
                <div class="sec4-imag"><img src={ten10} alt=""/></div>
                <div class="sec3-para"><p>AC Repair & Services</p></div>
            </div>
        </div>
    </div>


    {/* section 5 */}
    <div class="section5">
        <div class="sec5-head"><h1>Most booked services</h1></div>
        <div class="sec5-im-div1">
            <div class="sec5-im1">
                <div class="sec5-imag"><img src={sec5_im1} alt=""/></div>
                <div class="sec5-para"><p>Top load (fully automatic) <br/>checkup</p></div>
                <div class="sec5-review">
                <div class="sec5-para-font"><i class="fa-solid fa-star"></i></div>
                <div class="sec5-para1"><p>4.78(110.4k)</p><p>&#X20B9 99</p></div></div>
            </div>
            
            <div class="sec5-im">
                <div class="sec5-imag"><img src={sec5_im2} alt=""/></div>
                <div class="sec5-para"><p>Sress relief swedish massage</p></div>
                <div class="sec5-review">
                <div class="sec5-para-font"><i class="fa-solid fa-star"></i></div>
                <div class="sec5-para1"><p>4.85(108.6k)</p><p>&#X20B9 1,299</p></div></div>
            </div>
            <div class="sec5-im">
                <div class="sec5-imag"><img src={sec5_im3} alt=""/></div>
                <div class="sec5-para"><p>Elysian British Rose predicure</p></div>
                <div class="sec5-review">
                <div class="sec5-para-font"><i class="fa-solid fa-star"></i></div>
                <div class="sec5-para1"><p>4.83(252.5k)</p><p>&#X20B9 759</p></div></div>
            </div>
            <div class="sec5-im">
                <div class="sec5-imag"><img src={sec5_im4} alt=""/></div>
                <div class="sec5-para"><p>Intense bathroom cleaning</p></div>
                <div class="sec5-review">
                <div class="sec5-para-font"><i class="fa-solid fa-star"></i></div>
                <div class="sec5-para1"><p>4.78(1.6M)</p><p>&#X20B9 499</p></div></div>
            </div>
            <div class="sec5-im">
                <div class="sec5-imag"><img src={sec5_im5} alt=""/></div>
                <div class="sec5-para"><p>Sofa cleaning</p></div>
                <div class="sec5-review">
                <div class="sec5-para-font"><i class="fa-solid fa-star"></i></div>
                <div class="sec5-para1"><p>4.86(148K)</p><p>&#X20B9 499</p></div></div>
            </div>
            <div class="sec5-im">
                <div class="sec5-imag"><img src={sec5_im6} alt=""/></div>
                <div class="sec5-para"><p>Hair cut for men</p></div>
                <div class="sec5-review">
                <div class="sec5-para-font"><i class="fa-solid fa-star"></i></div>
                <div class="sec5-para1"><p>4.89(525.9k)</p><p>&#X20B9 259</p></div></div>
            </div>
            <div class="sec5-im">
                <div class="sec5-imag"><img src={sec5_im7} alt=""/></div>
                <div class="sec5-para"><p>Foam Clean</p></div>
                <div class="sec5-review">
                <div class="sec5-para-font"><i class="fa-solid fa-star"></i></div>
                <div class="sec5-para1"><p>4.78(54.3k)</p><p>&#X20B9 399</p></div></div>
            </div>
            <div class="sec5-im">
                <div class="sec5-imag"><img src={sec5_im8} alt=""/></div>
                <div class="sec5-para"><p>AC Repair</p></div>
                <div class="sec5-review">
                <div class="sec5-para-font"><i class="fa-solid fa-star"></i></div>
                <div class="sec5-para1"><p>4.38(1.2M)</p><p>&#X20B9 699</p></div></div>
            </div>
        </div>
    </div>

    {/* section 6  */}

    <div class="sec6">
        <div class="sec6-im">
            <img src={sec6_im1} alt=""/>
        </div>
    </div>

    {/* section 7 */}

    <div class="section7">
        <div class="sec7-head"><h1>Salon for Women</h1></div>
        <div class="sec7-im-div1">
            <div class="sec7-im1">
                <div class="sec7-para"><p>Pedicute</p></div>
                <div class="sec7-imag"><img src={sec7_im1} alt=""/></div>
            </div>
            <div class="sec7-im">
                <div class="sec7-para"><p>Facial & Cleanup</p></div>
                <div class="sec7-imag"><img src={sec7_im2} alt=""/></div>
            </div>
            <div class="sec7-im">
                <div class="sec7-para"><p>Waxing</p></div>
                <div class="sec7-imag"><img src={sec7_im3} alt=""/></div>
            </div>
            <div class="sec7-im">
                <div class="sec7-para"><p>Manicure</p></div>
                <div class="sec7-imag"><img src={sec7_im4} alt=""/></div>
            </div>
            <div class="sec7-im">
                <div class="sec7-para"><p>Hair care</p></div>
                <div class="sec7-imag"><img src={sec7_im5} alt=""/></div>
            </div>
            <div class="sec7-im">
                <div class="sec7-para"><p>Bleach & Detan</p></div>
                <div class="sec7-imag"><img src={sec7_im6} alt=""/></div>
            </div>
            <div class="sec7-im">
                <div class="sec7-para"><p>Threading & Face waxing</p></div>
                <div class="sec7-imag"><img src={sec7_im7} alt=""/></div>
            </div>
        </div>
    </div>

    {/* section 8 */}

    <div class="section8">
        <div class="sec8-head"><h1>Spa for Women</h1></div>
        <div class="sec8-im-div1">
            <div class="sec8-im1">
                <div class="sec8-para"><p>Stress relief</p></div>
                <div class="sec8-imag"><img src={sec8_im1} alt=""/></div>
            </div>
            <div class="sec8-im">
                <div class="sec8-para"><p>Pain relief</p></div>
                <div class="sec8-imag"><img src={sec8_im2} alt=""/></div>
            </div>
            <div class="sec8-im">
                <div class="sec8-para"><p>Natural skincare</p></div>
                <div class="sec8-imag"><img src={sec8_im3} alt=""/></div>
            </div>
        </div>
    </div>

    {/* section-9 */}

    <div class="sec9">
        <div class="sec9-im">
            <img src={sec9_im1} alt=""/>
        </div>
    </div>

    {/* section 10 */}

    <div class="section10">
        <div class="sec10-head"><h1>Cleaning & pest control</h1></div>
        <div class="sec10-im-div1">
            <div class="sec10-im1">
                <div class="sec10-para"><p>Full Home Cleaning</p></div>
                <div class="sec10-imag"><img src={sec10_im1} alt=""/></div>
            </div>
            <div class="sec10-im">
                <div class="sec10-para"><p>Cockroach, Ant & <br/></p><p class ="nik1"> General Pest Control</p></div>
                <div class="sec10-imag"><img src={sec10_im2} alt=""/></div>
            </div>
            <div class="sec10-im">
                <div class="sec10-para"><p>Sofa & Carpet Cleaning</p></div>
                <div class="sec8-imag"><img src={sec10_im3} alt=""/></div>
            </div>
            <div class="sec10-im">
                <div class="sec10-para"><p>Bathroom Cleaning</p></div>
                <div class="sec10-imag"><img src={sec10_im4} alt=""/></div>
            </div>
            <div class="sec10-im">
                <div class="sec10-para"><p>Kitchen Cleaning</p></div>
                <div class="sec10-imag"><img src={sec10_im5} alt=""/></div>
            </div>
        </div>
    </div>

    {/* section 11  */}

    <div class="sec11">
        <div class="sec11-im">
            <img src={sec11_im1} alt=""/>
        </div>
    </div>

    {/* section 12 */}

    <div class="section12">
        <div class="sec12-head"><h1>AC & appliance repair</h1></div>
        <div class="sec12-im-div1">
            <div class="sec12-im1">
                <div class="sec12-para"><p>AC Service and Repair</p></div>
                <div class="sec12-imag"><img src={sec12_im1} alt=""/></div>
            </div>
            <div class="sec12-im">
                <div class="sec12-para"><p>Washing Machine Repair</p></div>
                <div class="sec12-imag"><img src={sec12_im2} alt=""/></div>
            </div>
            <div class="sec12-im">
                <div class="sec12-para"><p>Water Purifier Repair</p></div>
                <div class="sec12-imag"><img src={sec12_im3} alt=""/></div>
            </div>
            <div class="sec12-im">
                <div class="sec12-para"><p>Native Water Purifier</p></div>
                <div class="sec12-imag"><img src={sec12_im4} alt=""/></div>
            </div>
            <div class="sec12-im">
                <div class="sec12-para"><p>Chimney Repair</p></div>
                <div class="sec12-imag"><img src={sec12_im5} alt=""/></div>
            </div>
            <div class="sec12-im">
                <div class="sec12-para"><p>Geyser Repair</p></div>
                <div class="sec12-imag"><img src={sec12_im6} alt=""/></div>
            </div>
            <div class="sec12-im">
                <div class="sec12-para"><p>Refrigerator Repair</p></div>
                <div class="sec12-imag"><img src={sec12_im7} alt=""/></div>
            </div>
            <div class="sec12-im">
                <div class="sec12-para"><p>Television Repair</p></div>
                <div class="sec12-imag"><img src={sec12_im8} alt=""/></div>
            </div>
        </div>
    </div>

        {/* section 13 */}
        <div class="section13">
            <div class="sec13-head"><h1>Quick home repairs</h1></div>
            <div class="sec13-im-div1">
                <div class="sec13-im1">
                    <div class="sec13-imag"><img src={sec13_im1} alt=""/></div>
                    <div class="sec13-para"><p>Jet spray(installation / repair)</p></div>
                    <div class="sec13-review">
                    <div class="sec13-para-font"><i class="fa-solid fa-star"></i></div>
                    <div class="sec13-para1"><p>4.84(6.8k)</p><p>&#X20B9 89</p></div></div>
                </div>
                
                <div class="sec13-im">
                    <div class="sec13-imag"><img src={sec13_im2} alt=""/></div>
                    <div class="sec13-para"><p>Washbasin pipe leakage</p></div>
                    <div class="sec13-review">
                    <div class="sec13-para-font"><i class="fa-solid fa-star"></i></div>
                    <div class="sec13-para1"><p>4.82(2.9K)</p><p>&#X20B9 99</p></div></div>
                </div>
                <div class="sec13-im">
                    <div class="sec13-imag"><img src={sec13_im3} alt=""/></div>
                    <div class="sec13-para"><p>Flush tank repair (concealed)</p></div>
                    <div class="sec13-review">
                    <div class="sec13-para-font"><i class="fa-solid fa-star"></i></div>
                    <div class="sec13-para1"><p>4.78(1.4k)</p><p>&#X20B9 219</p></div></div>
                </div>
                <div class="sec13-im">
                    <div class="sec13-imag"><img src={sec13_im4} alt=""/></div>
                    <div class="sec13-para"><p>Cupboard hinge service (up to 2)</p></div>
                    <div class="sec13-review">
                    <div class="sec13-para-font"><i class="fa-solid fa-star"></i></div>
                    <div class="sec13-para1"><p>4.84(65K)</p><p>&#X20B9 129</p></div></div>
                </div>
                <div class="sec13-im">
                    <div class="sec13-imag"><img src={sec13_im5} alt=""/></div>
                    <div class="sec13-para"><p>Cartain rod installation (2 brackets)</p></div>
                    <div class="sec13-review">
                    <div class="sec13-para-font"><i class="fa-solid fa-star"></i></div>
                    <div class="sec13-para1"><p>4.85(47.9K)</p><p>&#X20B9 129</p></div></div>
                </div>
                <div class="sec13-im">
                    <div class="sec13-imag"><img src={sec13_im6} alt=""/></div>
                    <div class="sec13-para"><p>Sink (Drainage pipe, over the ground)</p></div>
                    <div class="sec13-review">
                    <div class="sec13-para-font"><i class="fa-solid fa-star"></i></div>
                    <div class="sec13-para1"><p>4.82(38.5k)</p><p>&#X20B9 99</p></div></div>
                </div>
                <div class="sec13-im">
                    <div class="sec13-imag"><img src={sec13_im7} alt=""/></div>
                    <div class="sec13-para"><p>Switchboarch/switchbox repair</p></div>
                    <div class="sec13-review">
                    <div class="sec13-para-font"><i class="fa-solid fa-star"></i></div>
                    <div class="sec13-para1"><p>4.86(86.5k)</p><p>&#X20B9 89</p></div></div>
                </div>
                <div class="sec13-im">
                    <div class="sec13-imag"><img src={sec13_im8} alt=""/></div>
                    <div class="sec13-para"><p>Door lock repair</p></div>
                    <div class="sec13-review">
                    <div class="sec13-para-font"><i class="fa-solid fa-star"></i></div>
                    <div class="sec13-para1"><p>4.85(40.9K)</p><p>&#X20B9 179</p></div></div>
                </div>
                <div class="sec13-im">
                    <div class="sec13-imag"><img src={sec13_im9} alt=""/></div>
                    <div class="sec13-para"><p>Drainage pipe (Underground)</p></div>
                    <div class="sec13-review">
                    <div class="sec13-para-font"><i class="fa-solid fa-star"></i></div>
                    <div class="sec13-para1"><p>4.79(44.8K)</p><p>&#X20B9 319</p></div></div>
                </div>
                <div class="sec13-im">
                    <div class="sec13-imag"><img src={sec13_im10} alt=""/></div>
                    <div class="sec13-para"><p>Tap Replacement</p></div>
                    <div class="sec13-review">
                    <div class="sec13-para-font"><i class="fa-solid fa-star"></i></div>
                    <div class="sec13-para1"><p>4.85(52.8K)</p><p>&#X20B9 89</p></div></div>
                </div>
            </div>
        </div>

            {/* section 14 */}

    <div class="section14">
        <div class="sec14-head"><h1>Massage for Men</h1></div>
        <div class="sec14-im-div1">
            <div class="sec14-im1">
                <div class="sec8-para"><p>Pain relief</p></div>
                <div class="sec8-imag"><img src={sec14_im1} alt=""/></div>
            </div>
            <div class="sec14-im">
                <div class="sec14-para"><p>Post workout</p></div>
                <div class="sec14-imag"><img src={sec14_im2} alt=""/></div>
            </div>
            <div class="sec14-im">
                <div class="sec14-para"><p>Stress relief</p></div>
                <div class="sec14-imag"><img src={sec14_im3} alt=""/></div>
            </div>
        </div>
    </div>

      {/* section-15  */}

      <div class="sec15">
        <div class="sec15-im">
            <img src={sec15_im1} alt=""/>
        </div>
    </div>

                {/* section 16 */}

                <div class="section16">
                    <div class="sec16-head"><h1>Salon for kids & Men</h1></div>
                    <div class="sec16-im-div1">
                        <div class="sec16-im1">
                            <div class="sec16-para"><p>Hair cut & Beard <br/> grooming shving</p></div>
                            <div class="sec16-imag"><img src="Image/sec16-im1.png" alt=""/></div>
                        </div>
                        <div class="sec16-im">
                            <div class="sec16-para"><p>Pedicure & Manicure</p></div>
                            <div class="sec16-imag"><img src="Image/sec16-im2.png" alt=""/></div>
                        </div>
                        <div class="sec16-im">
                            <div class="sec16-para"><p>Hairl cooler & Hair spa</p></div>
                            <div class="sec16-imag"><img src="Image/sec16-im3.png" alt=""/></div>
                        </div>
                        <div class="sec16-im">
                            <div class="sec16-para"><p>Facial & Cleanup</p></div>
                            <div class="sec16-imag"><img src="Image/sec16-im4.png" alt=""/></div>
                        </div>
                    </div>
                </div>

                <div class="sec17">
                    <div class="sec17-main">
                        <div class="sec17-im1">
                            <div class="sec17-im2"><img src="Image/logo.png" alt=""/></div>
                        </div>

                        <div class="sec17-main2">
                            <div class="company">
                                <h3>Company</h3>
                                <ul class="menu_option">
                                    <li>About us </li>
                                    <li>Terms & conditions </li>
                                    <li>Privacy policy </li>
                                    <li>Anti-discrimination policy </li>
                                    <li> UC impact</li>
                                    <li>Careers </li>
                                </ul>
                
                            </div>
                            <div class="customer">
                                <h3>For customer</h3>
                                <ul class="menu_option">
                                    <li>UC reviews </li>
                                    <li>Categories near you </li>
                                    <li>Blog</li>
                                    <li>Contact us </li>
                                </ul>
                            </div>
                            <div class="partner">
                                <h3>For partners</h3>
                                <ul class="menu_option">
                                    <li>Register as a professional </li>
                                </ul>
                            </div>
                            <div class="social-links">
                                <h3>Social  links</h3>
                                <ul class="sec17-icon">
                                    <li><i class="fa-brands fa-twitter"></i></li>
                                    <li><i class="fa-brands fa-facebook"></i></li>
                                    <li><i class="fa-brands fa-instagram"></i></li>
                                    <li><i class="fa-brands fa-linkedin"></i></li>
                                </ul>

                                <div class="social-links-im">
                                    <div class="sec17-im3">
                                        <img src="Image/sec17-im1.png" alt=""/>
                                    </div>
                                </div>
                                    <div class="social-links-im">
                                        <div class="sec17-im3">
                                            <img src="Image/sec17-im2.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="all_rights">
                            <p>
                                © Copyright 2024 Urban Company. 
                                All rights reserved. | CIN: U74140DL2014PTC274413
                            </p>
                        </div>
                    </div>
    </div>
  );
}

export default App;
