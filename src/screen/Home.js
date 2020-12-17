import React from 'react';
import Layout from "../components/layout/Layout";
import SliderMain from "../components/slider/SliderMain";
import SlideOne from "../components/slider/HomeSlide/SlideOne";
import SlideTwo from "../components/slider/HomeSlide/SlideTwo";
import SlideThree from "../components/slider/HomeSlide/SlideThree";
import SlideFour from "../components/slider/HomeSlide/SlideFour";
import SlideFive from "../components/slider/HomeSlide/SlideFIve";

const Home = () => {
    return (
        <div
            style={{ backgroundColor: "#DDCDA1" }}
        >
            <Layout>
                <SliderMain
                    spaceBottomClass="space-mb--r100"
                />
                <SlideOne
                    spaceBottomClass="space-mb--r100"
                />
                <SlideTwo
                    spaceBottomClass="space-mb--r100"
                />
                <SlideThree
                    spaceBottomClass="space-mb--r100"
                />
                <SlideFour
                    spaceBottomClass="space-mb--r100"
                />
                <SlideFive
                    spaceBottomClass="space-mb--r100"
                />
            </Layout>
        </div>
    );
};

export default Home;
