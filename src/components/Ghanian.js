import React from "react";

function Ghanian() {

    return (
    <>
            <div className="foodcontainer">
                <div className="left-side">
                    <div className="cards">
                    

                <main>
                    <FoodBox imgSrc={cards} title={"Ghanian 1"} price={"$12"} />
                    <FoodBox imgSrc={cards} title={"Ghanian 2"} price={"$12"} />
                    <FoodBox imgSrc={cards} title={"Ghanian 3"} price={"$20"} />
                    <FoodBox imgSrc={cards} title={"Ghanian 4"} price={"$12"} />
                    <FoodBox imgSrc={cards} title={"Ghanian 5"} price={"$17"} />

                </main>
            </div>
         </div>

    </div>
    </>
    );
}


export default Ghanian;