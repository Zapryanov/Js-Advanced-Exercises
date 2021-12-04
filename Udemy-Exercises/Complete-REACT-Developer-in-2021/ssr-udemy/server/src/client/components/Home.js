import React from "react";

const Home = () => {
    function pressMe() {
        console.log("You pressed me");
    }
    return (
        <div>
            <div>This is THE BEST Home Component I've ever heard!</div>
            <button onClick={pressMe}>Press me</button>
        </div>
    )
}

export default Home;