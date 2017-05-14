var React = require("react");
var ReactDom = require("react-dom");
var ListviewReact = require("../common/listviewReact");
var style = require("./main.css");

var Main = React.createClass({
  render: function() {
    return (
      <div className={style.container}>

        <ListviewReact height={"500px"}>
          {
            // ========== 想要放入滚动区域的代码 放在这中间 ==========
          }
          <div className={style.box}></div>
          <div className={style.box}></div>
          <div className={style.box}></div>
          <div className={style.box}></div>
          {
            // ========== 想要放入滚动区域的代码 放在这中间 ==========
          }
        </ListviewReact>
        
      </div>
    )
  }
});

ReactDom.render(
  <Main />,
  document.getElementById("root"));