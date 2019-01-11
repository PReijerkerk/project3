import React from "react"
import "./Carousel.css"
// CODE PAIRING 1
// import Glide from '@glidejs/glide'

// new Glide('.glide').mount()
// CODE PAIRING 1

// CODE PAIRING 2
// import Glide, { Controls, Breakpoints } from '@glidejs/glide/dist/glide.modular.esm'

// new Glide('.glide').mount({ Controls, Breakpoints })
// CODE PAIRING 2

// AUTO PLAY FEATURE
// var input = document.querySelector('#options-autoplay-input')

// var glide = new Glide('#options-autoplay', {
//   autoplay: input.value,
//   hoverpause: false,
//   perView: 3
// })

// input.addEventListener('input', function (event) {
//   glide.update({
//     autoplay: (event.target.value != 0) ? event.target.value : false
//   })
// })

// glide.mount()
// AUTO PLAY FEATURE

// Go here for slide options https://glidejs.com/docs/options/ and more information
function Carousel() {
    return (
        <div class="glide">
            <div data-glide-el="track" class="glide__track">
                <ul class="glide__slides">
                <li class="glide__slide">
                    <img src="https://www.denverpost.com/wp-content/uploads/2016/05/20100924__20100925_D12_FE25IOGARAGEp1.jpg" alt="Coins" />
                </li>
                <li class="glide__slide">
                    <img src="https://www.telegraph.co.uk/content/dam/technology/2017/12/08/f0carf_trans_NvBQzQNjv4Bqx5egiJ9MQyAqq6uO2mksLQE0DV1F1xkRVV3-RtCrx1o.jpg" alt="Beanie Babies" />
                </li>
                <li class="glide__slide">
                    <img src="https://i2.wp.com/www.buffaloscoop.com/wp-content/uploads/2018/07/Sports-Cards.jpg?w=556" alt="Sports Cards" />
                </li>
                </ul>
            </div>
            <div class="glide__arrows" data-glide-el="controls">
                <button class="glide__arrow glide__arrow--left" data-glide-dir="<">Prev</button>
                <button class="glide__arrow glide__arrow--right" data-glide-dir=">">Next</button>
            </div>
        </div>
        )
    }
    
    export default Carousel
        // <div className="carouselContainer">
        //     <div className="row blog">
        //         <div className="col-md-12">
        //             <div id="blogCarousel" className="carousel slide" data-ride="carousel">

        //                 <ol className="carousel-indicators">
        //                     <li data-target="#blogCarousel" data-slide-to="0" className="active"></li>
        //                     <li data-target="#blogCarousel" data-slide-to="1"></li>
        //                 </ol>
        //                 <div className="carousel-inner">

        //                     <div className="carousel-item active">
        //                         <div className="row">
        //                             <div className="carouselImg col-md-3">
        //                                     <img src="https://www.denverpost.com/wp-content/uploads/2016/05/20100924__20100925_D12_FE25IOGARAGEp1.jpg" alt="Coins" />
        //                             </div>
        //                             <div className="carouselImg col-md-3">
        //                                     <img src="https://www.telegraph.co.uk/content/dam/technology/2017/12/08/f0carf_trans_NvBQzQNjv4Bqx5egiJ9MQyAqq6uO2mksLQE0DV1F1xkRVV3-RtCrx1o.jpg" alt="Beanie Babies" />
        //                             </div>
        //                             <div className="carouselImg col-md-3">
        //                                     <img src="https://p1.liveauctioneers.com/525/24890/9073696_1_x.jpg?version=1&width=512&format=pjpg&auto=webp&quality=50" alt="Civil War Memorabilia" />
        //                             </div>
        //                             <div className="carouselImg col-md-3">
        //                                     <img src="https://i2.wp.com/www.buffaloscoop.com/wp-content/uploads/2018/07/Sports-Cards.jpg?w=556" alt="Sports Cards" />
        //                             </div>
        //                         </div>
                               
        //                     </div>
                         

        //                     <div className="carousel-item">
        //                         <div className="row">
        //                             <div className="col-md-3">
        //                                     <img src="http://placehold.it/250x250" alt="item1" />
        //                             </div>
        //                             <div className="col-md-3">
        //                                     <img src="http://placehold.it/250x250" alt="item2" />
        //                             </div>
        //                             <div className="col-md-3">
        //                                     <img src="http://placehold.it/250x250" alt="item3" />
        //                             </div>
        //                             <div className="col-md-3">
        //                                     <img src="http://placehold.it/250x250" alt="item4" />
        //                             </div>
        //                         </div>
                                
        //                     </div>
                            
        //                 </div>
                        
        //             </div>
                   

        //         </div>
        //     </div>
        // </div>
