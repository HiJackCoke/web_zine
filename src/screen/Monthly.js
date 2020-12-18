import React from 'react';
import Layout from "../components/layout/Layout";
import MonthlyOne from "../components/monthly/MonthlyOne";

const Monthly = () => {
    return (
        <div
            style={{ backgroundColor: "#DDCDA1" }}
        >
            <Layout>
                <MonthlyOne/>
            </Layout>
        </div>
    );
};

export default Monthly;
