import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Sentiment = () => {
  return (
    <div className="sentiment">
      <div className="innerSentiment">
        <div className="sentimentTitle">
          <span className="sentimentTitleWord">Sentiment</span>
        </div>
        <br />

        <div className="keyEvents">
          <div className="keyEventsTitle">Key Events</div>
          <div className="keyEventsImage">
            <img src="/sentimentsKeyEvents.png" alt="Key Events" />
          </div>
        </div>
        <br />

        {/* Carousel for sentimentsContent */}
        <div className="sentimentsContent">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
          >
            <SwiperSlide>
              <div className="sentimentsSlide">
                <div className="sentimentsContentLeft">
                  <div className="sentimentsData">Left Content: Lorem Ipsum Dolor Sit Amet</div>
                </div>
                <div className="sentimentsContentRight">
                  <div className="sentimentsData">Right Content: Lorem Ipsum Dolor Sit Amet</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="sentimentsSlide">
                <div className="sentimentsContentLeft">
                  <div className="sentimentsData">Left Content: Another Slide Content</div>
                </div>
                <div className="sentimentsContentRight">
                  <div className="sentimentsData">Right Content: Another Slide Content</div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <br />

        <div className="analystEstimates">
          <div className="analystEstimatesTitle">
            <span className="analystTitle">Analyst Estimates</span>
            <div className="keyEventsImage">
              <img src="/sentimentsKeyEvents.png" alt="Key Events" />
            </div>
          </div>
          <br />
          <div className="analystChart">
            <div className="analystPercentage">
              <img src="/analystPercentage.png" alt="percent" />
            </div>
            <div className="buyHoldSell">
              <span className="buyHoldSellTabs">
                <span className="buyTitle">Buy</span>{' '}
                <br />
                <span>
                  <img src="/linearBar.png" className="linearBarImage" alt="bar" />
                </span>
                76%
              </span>
              <span className="buyHoldSellTabs">
                <span className="buyTitle">Hold</span>{' '}
                <span>
                  <img src="/holdBar.png" className="holdBarImage" alt="bar" />
                </span>
                8%
              </span>
              <span className="buyHoldSellTabs">
                <span className="buyTitle">Sell</span>{' '}
                <span>
                  <img src="/sellBar.png" className="sellBarImage" alt="bar" />
                </span>
                16%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sentiment;
