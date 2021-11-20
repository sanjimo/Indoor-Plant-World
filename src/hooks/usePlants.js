import {useEffect,useState} from 'react';

const usePlants = ()=>{
    const [plants, setPlants] = useState([]);
    const [loading, setLoading] =useState(true);


    useEffect(() => {
        fetch('https://murmuring-earth-87145.herokuapp.com/plants')
       .then(res => res.json())
       .then(result => {
         setPlants(result.plants)
         setLoading(false);
       });
     }, [plants,loading]);

    return [ plants, loading ];

}

export default usePlants;