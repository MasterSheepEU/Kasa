import React from "react";
import staractive from '../assets/img/star-active.png';
import starinactive from '../assets/img/star-inactive.png';

function RatingStars(props) {
    const rating = props.props;
    return (<span className="star">
        <img src={staractive} alt="star" />
        <img src={rating >= 2 ? staractive : starinactive} alt="star" />
        <img src={rating >= 3 ? staractive : starinactive} alt="star" />
        <img src={rating >= 4 ? staractive : starinactive} alt="star" />
        <img src={rating >= 5 ? staractive : starinactive} alt="star" />
    </span>)
}

export default RatingStars;