var React = require("react");
var style = require("./index.css");
var IScroll = require("./iscroll");

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
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    )
  },
  componentDidMount: function() {
    new IScroll('#wrapper', {
      mouseWheel: true
    });
    document.addEventListener('touchmove', function(e) {
      e.preventDefault();
    }, isPassive() ? {
      capture: false,
      passive: false
    } : false);
  }
});

module.exports = Main;