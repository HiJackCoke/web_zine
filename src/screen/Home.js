import React from 'react';
import Layout from "../components/layout/Layout";
import SliderMain from "../components/slider/SliderMain";
import MonthlySlide from "../components/slider/HomeSlide/MonthlySlide";
import InsideSlide from "../components/slider/HomeSlide/InsideSlide";
import SpecialSlide from "../components/slider/HomeSlide/SpecialSlide";
import EventSlide from "../components/slider/HomeSlide/EventSlide";

const Home = () => {
    return (
        <div
            style={{ backgroundColor: "#DDCDA1" }}
        >
            <Layout>
                <SliderMain
                    spaceBottomClass="space-mb--r100"
                />
                <MonthlySlide
                    spaceBottomClass="space-mb--r100"
                />
                <InsideSlide
                    spaceBottomClass="space-mb--r100"
                />
                <SpecialSlide
                    spaceBottomClass="space-mb--r100"
                />
                <EventSlide
                    spaceBottomClass="space-mb--r100"
                />
            </Layout>
        </div>
    );
};

export default Home;
