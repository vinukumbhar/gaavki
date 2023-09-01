import React, {useState} from "react";

const Dispatcher = ({sync}) => {
    const [id, setId] = useState('');
    const dispatch = () => {
        fetch(`http://localhost:3001/mark-despatched/${id}`, {
            method: 'GET'
        })
        sync();
    }
    return(
        <div className="form-container">
            <input type="number" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} />
            <button onClick={dispatch}>Dispatch</button>
        </div>
    );
}

export default Dispatcher;