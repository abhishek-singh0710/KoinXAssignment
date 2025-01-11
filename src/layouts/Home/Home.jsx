// import React from 'react'
// import GetStartedFreeBox from '../../components/getStartedFreeBox/GetStartedFreeBox';
// import TrendingCoins from '../../components/trendingCoins/TrendingCoins';
// import "./home.css";
// const Home = () => {
//     return (
//         <div className='home'>
//             <div className="left">

//             </div>
//             <div className="right">
//                 <GetStartedFreeBox />
//                 <TrendingCoins />
//             </div>

//         </div>
//     )
// }

// export default Home

import Team from "../../components/Team/Team";
import GetStartedFreeBox from "../../components/getStartedFreeBox/GetStartedFreeBox";
import TrendingCoins from "../../components/trendingCoins/TrendingCoins";
import TradingViewWidget from "../../assets/TradingViewWidget";
import Performance from "../../components/Performance/Performance";
import "./home.css";
// import Sentiment from "../../components/Sentiments/Sentiments";
const Home = () => {

    // const tabs = Array(5).fill(null);

    return (
        <>
            <div className="outerMain">
                <div className="leftMain">
                    <div className="chart">
                        <div className="chartImage">
                            <TradingViewWidget />
                        </div>
                        {/* <TradingViewWidget /> */}
                    </div>

                    <div className="buttonsList">
                        <span className="innerButtons">Overview</span>
                        <span className="innerButtons">Fundamentals</span>
                        <span className="innerButtons">Sentiments</span>
                        <span className="innerButtons">Team</span>
                        <span className="innerButtons">Technicals</span>
                        <span className="innerButtons">Tokenomics</span>
                    </div>
                    <Performance />
                     


                    <div className="sentiment">
                        <div className="innerSentiment">
                            <div className="sentimentTitle">
                                <span className="sentimentTitleWord">Sentiment</span>
                            </div>
                            <br></br>

                            <div className="keyEvents">
                                <div className="keyEventsTitle">Key Events</div>
                                <div className="keyEventsImage">
                                <img src="/sentimentsKeyEvents.png"></img>
                                </div>
                            </div>
                            <br></br>

                            <div className="sentimentsContent">
                                <div className="sentimentsContentLeft">
                                    <div className="sentimentsData">Lorem Ipsum Dolor Sit Amet</div>
                                </div>

                                <div className="sentimentsContentRight">
                                <div className="sentimentsData">Lorem Ipsum Dolor Sit Amet</div>
                                </div>
                            </div>
                            <br></br>

                            <div className="analystEstimates">
                                <div className="analystEstimatesTitle">
                                    <span className="analystTitle">Analyst Estimates</span>
                                    <div className="keyEventsImage">
                                    <img src="/sentimentsKeyEvents.png"></img>
                                    </div>
                                </div>
                                <br></br>
                                <div className="analystChart">
                                    <div className="analystPercentage">
                                        <img src="/analystPercentage.png" alt="percent"></img>
                                    </div>
                                    <div className="buyHoldSell">
                                        <span className="buyHoldSellTabs"><span className="buyTitle">Buy</span> <span><img src="/linearBar.png" className="linearBarImage"></img></span>76%</span>
                                        <span className="buyHoldSellTabs"><span className="buyTitle">Hold</span> <span><img src="/holdBar.png" className="holdBarImage"></img></span>8%</span>
                                        <span className="buyHoldSellTabs"><span className="buyTitle">Sell</span> <span><img src="/sellBar.png" className="sellBarImage"></img></span>16%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <Sentiment /> */}

                    <div className="aboutBitcoin">
                        {/* <div className="aboutBitcoinInside"> */}
                            <div className="aboutBitcoinTitle">
                                <span className="name">About Bitcoin</span>
                            </div>

                        {/* </div> */}

                        <div className="bitcoinDetails">
                                <div className="whatIsBitcoin">
                                    <span className="question">What Is Bitcoin?</span>
                                    <span className="details">Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day 
                                    all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.</span>
                                </div>

                                <div className="moreDetails">
                                        <span className="heading">Lorem Ipsum Dolor Sit Amet</span>
                                        <span className="lowerDetails">Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. 
                                        Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. <br></br><br></br>
                                        Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Diam praesent massa dapibus magna aliquam a dictumst volutpat. 
                                        Egestas vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus felis pellentesque interdum. 
                                        Odio cursus phasellus velit in senectus enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet magna eget eros donec cursus nunc. <br></br><br></br>
                                        Mauris faucibus diam mi nunc praesent massa turpis a. Integer dignissim augue viverra nulla et quis lobortis phasellus. Integer pellentesque enim convallis ultricies at. Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. 
                                        Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui</span>
                                </div>

                                <div className="alreadyHoldingBitcoin">
                                    <span className="heading">
                                        <span className="headingTitle">Already Holding Bitcoin?</span>
                                    </span>
                                    <div className="holdingImages">
                                        <div className="imageLeft"><img src="/holdingImageLeft.png"></img></div>
                                        <div className="imageRight"><img src="/holdingImageRight.png"></img></div>
                                    </div>
                                    <div className="holdingDetails">
                                    <br></br>
                                        <span className="details">
                                            Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. 
                                            Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui.
                                        </span>
                                    </div>
                                </div>
                        </div>

                    </div>

                    <div className="tokenomics">
                        <div className="heading">
                            <span className="headingLetters">Tokenomics</span>
                        </div>

                        <div className="tokenomicsDetails">
                            <div className="initialDistribution">
                                <div className="headingContainer"> <span className="heading">Initial Distribution</span>
                                </div>

                                <div className="graph">
                                    <span className="pieChart"><img src="/pieChart.png"></img></span>
                                    <div className="legend">
                                        <span className="legend1">
                                            <span className="dot1Container"><span className="dot1"></span></span>
                                            <span className="text">Crowdsale Investors:</span>
                                            <span className="percent">80%</span>
                                        </span>
                                        <span className="legend2">
                                            <span className="dot1Container"><span className="dot2"></span></span>
                                            <span className="text">Foundation:</span>
                                            <span className="percent">20%</span>
                                        </span>
                                    </div>
                                </div>
                                <br></br>
                                <div className="details">
                                    <span className="detailsText">
                                    Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel consequat. 
                                    Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus eu fusce adipiscing. 
                                    Volutpat ultrices nibh sodales massa habitasse urna felis augue. Gravida aliquam fermentum augue eu. 
                                    Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at curabitur sem posuere facilisis vitae. 
                                    Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Team />
                </div>

                <div className="rightMain">
                    <div className="rightMainImage">
                       <GetStartedFreeBox />
                    
                    </div>
                    <div className="trendingCoins">
                    <TrendingCoins />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home