import { useEffect, useState } from 'react';
import API from "../../utils/API";
import Row from "../../components/Row/Row"

const Main = () => {
const [dataState, setDataState] = useState([])

// useEffect(() => {
//     API.getAll()
//     .then(response => {
//         setDataState(response.data)
//         console.log(response.data);
//         console.log(JSON.parse(response.data.scores));
//     })
//     .catch(err => console.log(err));
// }, [])


    return(
        <div>
            <h1>Hello World!!!</h1>
            <Row />
        </div>
    )
}

export default Main
