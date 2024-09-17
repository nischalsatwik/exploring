/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Carousel from 'react-bootstrap/Carousel';
import Info from './Info';
import Workexp from './Workexp';
import Achievement from './Achievements';
import All from "./All";
function Phone(props) {
   const inputname=props.inputname;
    return (
      <Carousel>
        <Carousel.Item>
          <All inputname={inputname}></All>
        </Carousel.Item>
        <Carousel.Item>
          <Info></Info>
        </Carousel.Item>
        <Carousel.Item>
          <Workexp></Workexp>
        </Carousel.Item>
        <Carousel.Item>
          <Achievement></Achievement>
        </Carousel.Item>
      </Carousel>
    );
  }
export default Phone;