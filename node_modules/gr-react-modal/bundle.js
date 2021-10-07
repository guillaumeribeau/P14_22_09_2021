"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("prop-types"),o=require("styled-components");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=n(e),l=n(t),i=n(o);const d=o.keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`,u=i.default.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  animation: ${d} ${e=>e.fadeDuration}ms both;
  ${e=>e.customStyle}
`,r=i.default.div`
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  margin: 200px auto;
  max-width: 500px;
  background: #fff;
  padding: 15px;
  align-items: center;
  border-radius: 5px;
  animation: ${d} ${e=>e.fadeDuration}ms ${e=>e.fadeDelay}ms both;
  ${e=>e.customStyle}
`,s=i.default.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  color: #FFF;
  width: 100px;
  padding: 5px;
  border-radius: 5px;
  ${e=>e.customStyle}
`,f=i.default.button`
  position: absolute;
  top: -15px;
  right: -15px;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: bold;
  background: #000;
  color: #FFF;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 300px;
  ${e=>e.customStyle}
`;function c({buttonContent:t,close:o,escape:n,fadeDelay:l,fadeDuration:i,modalContent:d,open:c,outside:p,showClose:y,styleButton:m,styleButtonX:b,styleContainer:x,styleContent:g}){if(!c)return null;e.useEffect((()=>{c&&n&&window.addEventListener("keydown",(e=>{"Escape"===e.key&&(o(),window.removeEventListener("keydown",o()))}))}),[c]);return a.default.createElement(u,{id:"container",onClick:e=>(e=>{p&&"container"===e.target.id&&o()})(e),customStyle:x,fadeDuration:i},a.default.createElement(r,{id:"content",fadeDuration:i-i*l,fadeDelay:l*i,customStyle:g},d,a.default.createElement(s,{onClick:o,customStyle:m},t),y&&a.default.createElement(f,{onClick:o,customStyle:b},"x")))}c.propTypes={buttonContent:l.default.string,close:l.default.func.isRequired,escape:l.default.bool,fadeDelay:l.default.number,fadeDuration:l.default.number,modalContent:l.default.string,open:l.default.bool.isRequired,outside:l.default.bool,showClose:l.default.bool,styleButton:l.default.object,styleButtonX:l.default.object,styleContainer:l.default.object,styleContent:l.default.object},c.defaultProps={buttonContent:"Close",escape:!0,fadeDelay:null,fadeDuration:null,modalContent:"React modal is open!",open:!1,outside:!0,showClose:!1,styleButton:{},styleButtonX:{},styleContainer:{},styleContent:{}},exports.Modal=c;
