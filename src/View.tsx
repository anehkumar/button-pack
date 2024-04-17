import React from "react";

import Header from "./components/Header";
import Banner from "./components/Banner";
import PriceQuote from "./components/PriceQuote";

export function View() {

    return (
        <>
            <Header />
            <Banner />
            <PriceQuote onClick={() => alert("Helo")} />
        </>
    )
}
