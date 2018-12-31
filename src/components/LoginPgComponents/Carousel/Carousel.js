import React from "react"
import "./Carousel.css"
function Carousel() {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src="https://www.denverpost.com/wp-content/uploads/2016/05/20100924__20100925_D12_FE25IOGARAGEp1.jpg" alt="Coins"/>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="https://www.telegraph.co.uk/content/dam/technology/2017/12/08/f0carf_trans_NvBQzQNjv4Bqx5egiJ9MQyAqq6uO2mksLQE0DV1F1xkRVV3-RtCrx1o.jpg" alt="Beanie Babies"/>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="https://p1.liveauctioneers.com/525/24890/9073696_1_x.jpg?version=1&width=512&format=pjpg&auto=webp&quality=50" alt="Civil War Memorabilia"/>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="https://www.californiasportscards.com/images/catbb_1948_1959.jpg" alt="Sports Cards"/>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="https://c.76.my/Malaysia/antique-telephone-king-snoopyson777-1805-31-snoopyson777@12.jpg" alt="Antique Phone"/>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}

export default Carousel