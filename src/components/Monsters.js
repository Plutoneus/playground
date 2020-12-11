import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Description = (props) => {
    const [showResults, setShowResults] = useState(false) // Setting a bool

    const onDetailsClick = () => setShowResults(!showResults)

    useEffect(() => {
        setShowResults();
    }, []);

    return (
        <div>
            <input type="submit" value={showResults ? "-" : "+"} onClick={onDetailsClick} />
            {
                showResults ?
                <Results desc={props.desc}/> :
                <Results style={{display: 'none'}}/>
            }
        </div>
    );
}

const Results = (props) => (
    <div id="results">
        {props.desc}
    </div>
);

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
            <header className="section-header">
                <h1>Monsters</h1>
            </header>
            <div className="monster-section">
                {items.map(item => (
                    <div style={{
                        backgroundImage:
                        `url(https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/gthumbnails/mhw-${item.name.toLowerCase().replace(/ /g,'_')}_icon.png)`
                    }}
                    className="monster-card">
                        <h1>{item.name}</h1>
                        <Description desc={item.description}/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Monsters;
