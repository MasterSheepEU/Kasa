
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const LeaseCard = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('./logements.json');
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.log('Une erreur s\'est produite lors de la récupération du fichier JSON:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            {data && (
                <div className='lease-cards'>
                    {data.map(item => (

                        <Link to={`/housingsheet/${item.id}`}>
                            <div key={item.id} className='single-card' data-id={item.id}>
                                <img src={item.cover} alt={item.title} />
                                <h2>{item.title}</h2>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </>
    );
};

export default LeaseCard;