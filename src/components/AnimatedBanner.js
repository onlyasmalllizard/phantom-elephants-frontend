import BannerAnim from "rc-banner-anim";
import QueueAnim from "rc-queue-anim";
import TweenOne from "rc-tween-one";
import React from "react";
import ReactDOM from "react-dom";
import "./assets/index.less";
import "../assets/index.less";

const { Element } = BannerAnim;
const BgElement = Element.BgElement;
export default function Demo() {
  return (
    <BannerAnim autoPlay>
      <Element key="aaa" prefixCls="banner-user-elem">
        <BgElement
          key="bg"
          className="bg"
          style={{
            backgroundImage:
              "url(https://os.alipayobjects.com/rmsportal/IhCNTqPpLeTNnwr.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <QueueAnim name="QueueAnim">
          <h1 key="h1">Ant Motion Demo</h1>
          <p key="p">
            Ant Motion Demo.Ant Motion Demo.Ant Motion Demo.Ant Motion Demo
          </p>
        </QueueAnim>
        <TweenOne
          animation={{ y: 50, opacity: 0, type: "from", delay: 200 }}
          name="TweenOne"
        >
          Ant Motion Demo.Ant Motion Demo
        </TweenOne>
      </Element>
      <Element key="bbb" prefixCls="banner-user-elem">
        <BgElement
          key="bg"
          className="bg"
          style={{
            backgroundImage:
              "url(https://os.alipayobjects.com/rmsportal/uaQVvDrCwryVlbb.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <QueueAnim name="QueueAnim">
          <h1 key="h1">Ant Motion Demo</h1>
          <p key="p">
            Ant Motion Demo.Ant Motion Demo.Ant Motion Demo.Ant Motion Demo
          </p>
        </QueueAnim>
        <TweenOne
          animation={{ y: 50, opacity: 0, type: "from", delay: 200 }}
          name="TweenOne"
        >
          Ant Motion Demo.Ant Motion Demo
        </TweenOne>
      </Element>
    </BannerAnim>
  );
}

ReactDOM.render(<Demo />, document.getElementById("__react-content"));
