var React = require('react');
var style = require("./index.css");
var Swiper = require("./swiper");

var SwiperComp = React.createClass({
  render: function() {
    return (
      <div className={"swiper-container"}>
        <div className={"swiper-wrapper"}>
          {
            this.props.children
          }
        </div>
        <div className={"swiper-pagination"} />
      </div>
    );
  },
  componentDidMount: function() {
    var swiper = new Swiper('.swiper-container', this.props.params);
  }

});

module.exports = SwiperComp;