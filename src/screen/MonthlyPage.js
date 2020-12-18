import React from 'react';
import Layout from "../components/layout/Layout";
import Monthly from "../components/monthly/Monthly";

import monthlyData from '../components/data/monthly/monthlyData.json'

const MonthlyPage = ({match}) => {

    const monthly = monthlyData.find((p) => p.id === match.params.id)

    console.log(monthly)

    // const [monthly, setMonthly] = useState({})
    //
    // const {id} = useParams();
    //
    // const getData = async () => {
    //     const {data} = await axios.get(`/one.json/${id}`)
    //     setMonthly(data)
    //
    //
    //     console.log(monthly)
    // }
    //
    // useEffect(() => {
    //     getData()
    // })




    return (
        <div
            style={{ backgroundColor: "#DDCDA1" }}
        >
            <Layout>
                <Monthly Monthly={monthly}/>
            </Layout>
        </div>
    );
};

export default MonthlyPage;
