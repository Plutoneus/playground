import React, {useState, useEffect} from 'react';

const Shop = () => {

    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]); // Setting an empty array

    const fetchItems = async () => {
        const data = await fetch('https://mhw-db.com/monsters');

        const items = await data.json();
        console.log(items);
        setItems(items);
    }

    return (
        <div>
            {items.map(item => (
                <div>
                    <h1>{item.name}</h1>
                        <h3>Found in: {item.locations.map(loc => (
                                <p>{loc.name}</p>
                            ))}
                        </h3>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    );
}

export default Shop;
