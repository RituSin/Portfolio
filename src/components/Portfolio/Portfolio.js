import'./Portfolio.css';

const Portfolio = () => 
{
    return(
        <div className="container">
            <h1 className="title">Portfolio</h1>
            <div className="overlay portfolio_page">
                <div className="portfolio_section">
                        <div className="card">
                            <div className="topic_overlay">
                                <div className="shadow"></div>
                                Topic 1 
                            </div>
                            <div className="content">
                                <div >
                                    <h3>Project 1</h3>
                                    <p>Decription about the project.</p>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="topic_overlay">
                                <div className="shadow"></div>
                                Topic 2
                            </div>
                            <div className="content">
                                <div>
                                    <h3>Project 2</h3>
                                    <p>Decription about the project.</p>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>   

                         <div className="card">
                            <div className="topic_overlay">
                                <div className="shadow"></div>
                                Topic 3
                            </div>
                            <div className="content">
                                <div>
                                    <h3>Project 3</h3>
                                    <p>Decription about the project.</p>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>   

                         <div className="card">
                            <div className="topic_overlay">
                                <div className="shadow"></div>
                                Topic 4
                            </div>
                            <div className="content">
                                <div>
                                    <h3>Project 4</h3>
                                    <p>Decription about the project.</p>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>   

                         {/* <div className="card">
                            <div className="topic_overlay">
                                <div className="shadow"></div>
                                Topic
                            </div>
                            <div className="content">
                                <div>
                                    <h3>sdasdad</h3>
                                    <p>nsbdnbdns asdsaaaaaaaaaaaaa hjdshd ds aisuuuuuuu ddddddddddddddddddddddddddddddddddd</p>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>   
                        <div className="card">
                            <div className="topic_overlay" data-text="Design">Topic</div>
                            <div className="content">
                                <div>
                                    <h3>sdasdad</h3>
                                    <p>nsbdnbdns asdsaaaaaaaaaaaaa hjdshd ds aisuuuuuuu ddddddddddddddddddddddddddddddddddd</p>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>          */}
                        
                
                </div>
            </div>
        </div>
    )
}

export default Portfolio;