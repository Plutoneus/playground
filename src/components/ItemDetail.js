import React, {useState, useEffect} from 'react';
import '../index.css';

const Item = () => {

    useEffect(() => {
    }, []);

    const [items, setItems] = useState({}); // Setting an empty array

    return (
        <div>
            <h1>Unused</h1>
        </div>
    );
}

export default Item;
