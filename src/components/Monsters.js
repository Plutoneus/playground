import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Description = (props) => {
    const [showResults, setShowResults] = useState(false) // Setting a bool

    const onDetailsClick = () => setShowResults(!showResults)

    return (
        <div>
            <input type="submit" value={showResults ? "-" : "+"} onClick={onDetailsClick} />
            { showResults ? <Results desc={props.desc}/> : null }
        </div>
    );
}

// Can I clean this?
const Results = (props) => (
    <div id="results" className="monster-desc">
        {props.desc}
    </div>
)

const Monsters = () => {

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]); // Setting an empty array

    const fetchItems = async () => {
        const data = await fetch('https://mhw-db.com/monsters');

        const items = await data.json();
        console.log(items);
        setItems(items);
    };

    return (
        <div>
            {items.map(item => (
                <div>
                    <h1>{item.name}</h1>
                    <Description desc={item.description}/>
                </div>
            ))}
        </div>
    );
}

export default Monsters;
