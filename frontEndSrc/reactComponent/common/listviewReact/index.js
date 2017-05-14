var React = require("react");
var style = require("./index.css");
var IScroll = require("./iscroll-probe");

function isPassive() {
  var supportsPassiveOption = false;
  try {
    addEventListener("test", null, Object.defineProperty({}, 'passive', {
      get: function() {
        supportsPassiveOption = true;
      }
    }));
  } catch (e) {}
  return supportsPassiveOption;
}

var Main = React.createClass({
  getInitialState: function() {
    return {
      content: ""
    }
  },
  render: function() {
    return (
      <div>
        <div className={style.container} style={{height:this.props.height}}>
          <div id="wrapper" className={style.wrapper}>
            <div id="scroller" className={style.scroller}>
              <div id = "pullDown" className={style.pullDownMsg}>
                下拉刷新
              </div>
              <div id="iLoadingTop" className={style.iLoadingTop}>加载中...</div>
              {this.props.children}
              <div id = "pullUp" className={style.pullUpMsg}>
                上拉加载更多...
              </div>
              <div id="iLoadingBottom" className={style.iLoadingBottom}>加载中下面...</div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  componentDidMount: function() {
    var myScroll = new IScroll('#wrapper', {
      probeType: 3,
      mouseWheel: true,
    });

    document.addEventListener('touchmove', function(e) {
      e.preventDefault();
    }, isPassive() ? {
      capture: false,
      passive: false
    } : false);

    var pullDown = document.querySelector("#pullDown"),
      pullUp = document.querySelector("#pullUp"),
      loadingTop = document.querySelector("#iLoadingTop"),
      loadingBottom = document.querySelector("#iLoadingBottom"),
      isPulled = 0; // 拉动标记

    var pullDownFunc = function() {

    }

    myScroll.on('scroll', function() {
      if (isPulled != 8) {
        var height = this.y,
          bottomHeight = this.maxScrollY - height;

        // 控制下拉显示
        if (height >= 40) {
          pullDown.style.display = "block";
          isPulled = 1;
          return;
        } else if (height < 40 && height >= 0) {
          return;
        }

        // 控制上拉显示
        if (bottomHeight >= 40) {
          pullUp.style.display = "block";
          isPulled = 2;
          return;
        } else if (bottomHeight < 40 && bottomHeight >= 0) {
          pullUp.style.display = "none";
          return;
        }
      }
    })

    myScroll.on('scrollEnd', function() { // 滚动结束
      if (isPulled == 1) { // 下拉触发
        isPulled = 8;
        pullDown.style.display = "none";
        loadingTop.style.display = "block";
        setTimeout(function() {
          console.log("下拉触发");
          isPulled = 0;
          loadingTop.style.display = "none";
          myScroll.refresh();
        }, 1000);
      } else if (isPulled == 2) { // 上拉触发
        isPulled = 8;
        loadingBottom.style.display = "block";
        myScroll.scrollBy(0, -40);
        setTimeout(function() {
          console.log("下拉触发");
          isPulled = 0;
          loadingBottom.style.display = "none";
          myScroll.refresh();
        }, 1000);
      }
    });

  }
});

module.exports = Main;