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
                                Restro  
                            </div>
                            <div className="content" >
                                <div >
                                    <h3>Angular Application</h3>
                                    <p>This is a single page Restaurant application.</p>
                                    <a href="https://github.com/RituSin/Angular_Restaurant_app" target="_blank">Read More</a>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="topic_overlay">
                                <div className="shadow"></div>
                                Funder.ai
                            </div>
                            <div className="content">
                                <div>
                                    <h3>Funder.ai</h3>
                                    <p >This is an invoicing factoring firm that offers loans against pending invoices.</p>
                                    {/* <a href="#">Read More</a> */}
                                </div>
                            </div>
                        </div>  
                </div>
            </div>
        </div>
    )
}

export default Portfolio;