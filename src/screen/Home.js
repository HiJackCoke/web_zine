import React from 'react';
import Layout from "../components/layout/Layout";
import SliderMain from "../components/slider/SliderMain";
import MonthlySlide from "../components/slider/HomeSlide/MonthlySlide";
import SubSlide from "../components/slider/HomeSlide/SubSlide";
import SpecialSlide from "../components/slider/HomeSlide/SpecialSlide";
import SubSlideTwo from "../components/slider/HomeSlide/SubSlideTwo";

// #FFD1E8

const Home = () => {
    return (
        <div
            style={{ backgroundColor: "#FFD1E8" }}
        >
            <Layout>
                <SliderMain
                    spaceBottomClass="space-mb--r100"
                />
                <MonthlySlide
                    spaceBottomClass="space-mb--r100"
                />
                <SubSlide
                    spaceBottomClass="space-mb--r100"
                />
                {/*<SubSlideTwo*/}
                {/*    spaceBottomClass="space-mb--r100"*/}
                {/*/>*/}

                <SpecialSlide
                    spaceBottomClass="space-mb--r100"
                />
            </Layout>
        </div>
    );
};

export default Home;
