import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import Navigation from '../components/Navigation';
import Footers from '../components/Footers';
import Accordeon from "../components/Accordeon"
import Slideshow from "../components/Slideshow ";
import RatingStars from "../components/RatingStar";
import Logement from '../logements.json';
import "../styles/pages/_mainLogement.scss";

const HousingSheet = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const idLieu = Logement.find((lieu) => lieu.id === id);
        !idLieu && navigate("/page404");
    });

    const { id } = useParams();

    const destination = Logement.filter((lieu) => lieu.id === id);

    const nbPictures = destination.length > 0 && destination[0].pictures.length;

    const equipement = destination.length > 0 && destination[0].equipments;

    const tags = destination.length > 0 && destination[0].tags;

    return (


        <>


            <Navigation />

            <div className='mainlogement'>

                <div className='miseenavant'>
                    {destination.length > 0 &&
                        <Slideshow nbPictures={nbPictures} destination={destination.length > 0 && destination[0]} />
                    }
                </div>

                <section className="section1">

                    <article className="article1">

                        <h2 className="droite">{destination.length > 0 && destination[0].title}</h2>

                        <p>{destination.length > 0 && destination[0].location}</p>

                        <span className="filtre">
                            {tags && tags.map((detail, index) => {
                                return (
                                    <div key={destination.length > 0 && destination[0].id + index}>
                                        <p>{detail}</p>
                                    </div>
                                )
                            })}
                        </span>

                    </article>

                    <article className="article2">
                        <span>
                            <div className="name">
                                <p>{destination.length > 0 && destination[0].host.name}</p>
                            </div>
                            <div>
                                <img src={destination.length > 0 ? destination[0].host.picture : null} className="avatar" alt="avatar" />
                            </div>
                        </span>
                        <RatingStars props={destination.length > 0 && destination[0].rating} />
                    </article>

                </section>

                <section className="section2">
                    <article>
                        <Accordeon title="Description" content={destination.length > 0 && destination[0].description} i={destination.length > 0 && destination[0].description} />
                    </article>
                    <article>
                        <Accordeon title="Équipements" content={equipement && equipement.map((detail, index) => {
                            return (
                                <p key={index + 'Z'}>{detail}</p>
                            )
                        })} i={destination.length > 0 && destination[0].description} />
                    </article>
                </section>

            </div>

            <Footers />

        </>
    );
};

export default HousingSheet;