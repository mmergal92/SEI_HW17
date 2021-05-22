import React, {useState} from 'react';

const Stocks = (props) =>{
    const apikey = "e32b726172015a608ff03e7d393b148e"
    //Currency symbol from URL param
    const symbol = props.match.params.symbol;
    const url = `https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=${apikey}`;
    //STATE
    const [stock, setStock] = useState('null');
    //fetch stock data
    const getStock = async() =>{
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        setStock(data);
    }
    //useEffect
    React.useEffect(() => {
        getStock();
    }, [])

    const loaded = () =>{
        for (let i=0; i<stock.length; i++){
            return(
                <div>
                    <h1>{stock[i].companyName}</h1>
                    <h2>{stock[i].price}</h2>
                </div>
            )
        }

    }
    const loading =()=>{
        return <h1>Loading ...</h1>
    }
    return stock ? loaded(): loading();
}
export default Stocks;