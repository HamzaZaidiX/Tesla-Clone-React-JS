import React from "react";
import Button from "./Button";
import "./Item.css";
import Fade from 'react-reveal/Fade';

const Item = ({
  title,
  desc,
  backgroundImage,
  leftBtnTxt,
  leftBtnlink,
  rightBtnTxt,
  rightBtnlink,
  twoButtons,
  first,
}) => {
  return (
    <div
      className="item"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      
      <div className="item_container">
        <Fade bottom>
        <div className="item_text">
          <p>{title}</p>
          <div className="item_textDesc">
            <p>{desc}</p>
          </div>
        </div>
        </Fade>
        <div className="item_LowerThird">
          <Fade bottom>
          <div className="item_buttons">
            <Button imp="primary" text={leftBtnTxt} link={leftBtnlink} />
            {twoButtons && (
              <Button imp="secondary" text={rightBtnTxt} link={rightBtnlink} />
            )}
          </div>
          </Fade>
          {first && (
            <div className="item_expand">
              <svg className="MuiSvgIcon expand_icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Item;
