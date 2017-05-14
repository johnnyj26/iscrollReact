var React = require("react");
var ReactDom = require("react-dom");
var Iscroll = require("../common/iscrollReact");
var Swiper = require("../common/swiperReact");
var style = require("./main.css");

var Main = React.createClass({
  render: function() {
    return (
      <div className={style.container}>

        <div className={style.header}>宝宝是头部</div>
        <Iscroll height={"500px"}>
          {
            // ========== 想要放入滚动区域的代码 放在这中间 ==========
          }
          <Swiper params={{
            pagination: '.swiper-pagination',
            paginationClickable: true,
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: 2500,
            autoplayDisableOnInteraction: false,
            loop: true
          }}>
            <div className={"swiper-slide"} style={{height:"100px"}}>宝宝是1</div>
            <div className={"swiper-slide"} style={{height:"100px"}}>宝宝是2</div>
          </Swiper>
          <div className={style.box}></div>
          <div className={style.box}></div>
          <div className={style.box}></div>
          <div className={style.box}></div>
          {
            // ========== 想要放入滚动区域的代码 放在这中间 ==========
          }
        </Iscroll>
        <div className={style.footer}>宝宝是底部</div>
        
      </div>
    )
  }
});

ReactDom.render(
  <Main />,
  document.getElementById("root"));