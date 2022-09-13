import React,{ useState } from 'react'
import "./TinderCards.css";
import TinderCard from "react-tinder-card";


function TinderCards() {
    const [people,setPeople] = useState([
        {
            name:'Elon Musk',
            url:"https://rb.gy/uzmvtz"
        },
        {
            name:'Jeff Bezos',
            url:"https://rb.gy/vjxiju"
        },
        {
            name:'Ellen',
            url:"https://imageio.forbes.com/specials-images/imageserve/5ed560d07fe4060006bbce1e/0x0.jpg?format=jpg&crop=878,879,x422,y0,safe&height=416&width=416&fit=bounds"
        }
    ]);

const Swiped = (direction, nameToDelete) => {
    console.log("remmoving:" + nameToDelete );
}

const outOfFrame = (name) => {
    console.log(name + "left the screen");
}


  return (
    <div className='tinderCards'>
        <div className='tinderCards__cardContainer'>

            {people.map((person) => (
                <TinderCard
                    className="swipe"
                    key={person.name}
                    preventSwipe={["up","down"]}
                    onSwipe ={(dir) => Swiped(dir,person.name)}
                    onCardLeftScreen = {() => outOfFrame(person.name)}
                >
                <div 
                    style={{backgroundImage : `url(${person.url})` }}
                    className = "card"
                >
                    <h3>{person.name}</h3>
                </div>

                </TinderCard>
            ))}
    </div>
    </div>
  )
}

export default TinderCards