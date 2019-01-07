import React from "react"
import "./Carousel.css"

function Carousel() {
    return (
        <div className="carouselContainer">
            <div className="row blog">
                <div className="col-md-12">
                    <div id="blogCarousel" className="carousel slide" data-ride="carousel">

                        <ol className="carousel-indicators">
                            <li data-target="#blogCarousel" data-slide-to="0" className="active"></li>
                            <li data-target="#blogCarousel" data-slide-to="1"></li>
                        </ol>
                        <div className="carousel-inner">

                            <div className="carousel-item active">
                                <div className="row">
                                    <div className="carouselImg col-md-3">
                                            <img src="https://www.denverpost.com/wp-content/uploads/2016/05/20100924__20100925_D12_FE25IOGARAGEp1.jpg" alt="Coins" />
                                    </div>
                                    <div className="carouselImg col-md-3">
                                            <img src="https://www.telegraph.co.uk/content/dam/technology/2017/12/08/f0carf_trans_NvBQzQNjv4Bqx5egiJ9MQyAqq6uO2mksLQE0DV1F1xkRVV3-RtCrx1o.jpg" alt="Beanie Babies" />
                                    </div>
                                    <div className="carouselImg col-md-3">
                                            <img src="https://p1.liveauctioneers.com/525/24890/9073696_1_x.jpg?version=1&width=512&format=pjpg&auto=webp&quality=50" alt="Civil War Memorabilia" />
                                    </div>
                                    <div className="carouselImg col-md-3">
                                            <img src="https://i2.wp.com/www.buffaloscoop.com/wp-content/uploads/2018/07/Sports-Cards.jpg?w=556" alt="Sports Cards" />
                                    </div>
                                </div>
                               
                            </div>
                         

                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-md-3">
                                            <img src="http://placehold.it/250x250" alt="Image" />
                                    </div>
                                    <div className="col-md-3">
                                            <img src="http://placehold.it/250x250" alt="Image" />
                                    </div>
                                    <div className="col-md-3">
                                            <img src="http://placehold.it/250x250" alt="Image" />
                                    </div>
                                    <div className="col-md-3">
                                            <img src="http://placehold.it/250x250" alt="Image" />
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                        
                    </div>
                   

                </div>
            </div>
        </div>
    )
}

export default Carousel