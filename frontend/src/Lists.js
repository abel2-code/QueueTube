import React, { useState, useEffect } from 'react';

const Lists = () => {
    const [lists, setLists] = useState([]);
    useEffect(() => {
      fetch('http://localhost:3000/lists', {
        credentials: 'include'
      })
      .then(res => res.json())
      .then(lists => setLists(lists))
    }, []);
    return (
        <div>
            <div>{lists.map(list => <h3>{list.title}</h3>)}</div>
        </div>
    );
}

export default Lists;
