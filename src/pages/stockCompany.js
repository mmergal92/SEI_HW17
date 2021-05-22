import React from 'react';
import { Link } from 'react-router-dom';

const stockCompanies = (props) =>{
    const stockCos = [
        { name: "Apple", symbol: "AAPL"},
        { name: "Microsoft", symbol: "MSFT"},
        { name: "Google", symbol: "GOOGL"},
        { name: "Facebook", symbol: "FB"},
        { name: "Oracle", symbol: "ORCL"},
        { name: "Intel", symbol: "INTL"},
    ]
return(
    <div className="currencies">
        {stockCos.map((symbolLetters) => {
            const {name, symbol} = symbolLetters;
            return (
                <Link to={`/stocks/${symbol}`}>
                    <h2>{name}</h2>
                </Link>
            );
        })}
    </div>
    ); 
};
export default stockCompanies;