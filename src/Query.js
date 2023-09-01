import React, { useState } from 'react';
import './Query.css';

const Query = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3001/search/${query}`);
      const data = await response.json();

      setSearchResults(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form-container" style={{borderBottom: 'none', borderBottomLeftRadius: '0px', borderBottomRightRadius: '0px'}}>
        
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder='Query'
          />
        <button type="submit">Search</button>
        
      </form>

      <div className='form-container' style={{borderTop: 'none', borderTopLeftRadius: '0px', borderTopRightRadius: '0px'}}>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Days Before</th>
            <th>Dispatched</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.map((result) => (
            <tr key={result.id}>
              <td>{result.id}</td>
              <td>{result.name}</td>
              <td>{result.days_before}</td>
              <td>{result.despatched ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </>
  );
}

export default Query;
