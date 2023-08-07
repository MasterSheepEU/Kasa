import React from "react";
import { useState } from "react";
import flecheD from '../assets/img/ArrowR.png';
import flecheG from '../assets/img/ArrowL.png';

function Slideshow(props) {

    const [index, setIndex] = useState(0);

    const goToPrevious = () => {
        const firstImage = index === 0;
        const newIndex = firstImage ? props.nbPictures - 1 : index - 1;
        setIndex(newIndex);
    }

    const goToNext = () => {
        const lastImage = index === props.nbPictures - 1;
        const newIndex = lastImage ? 0 : index + 1;
        setIndex(newIndex);
    }

    return (
        <>

            <img src={props.destination.pictures[index]} className="lieu1" alt="lieu1" />
            {(props.nbPictures > 1) ?

                <>

                    <div className="counter">{index + 1} / {props.nbPictures}</div>
                    <img src={flecheG} alt="flèche gauche" className="arrow arrow_left" onClick={goToPrevious} />
                    <img src={flecheD} alt="flèche droite" className="arrow arrow_right" onClick={goToNext} />
                    {/* Sinon si il n'y a qu'une seule image, ne pas afficher les flèches. */}

                </>

                : null}

        </>
    )
}

export default Slideshow;