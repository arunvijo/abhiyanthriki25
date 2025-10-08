// --- IMAGE IMPORTS ---
// It's good practice to keep image imports with the data that uses them.
import image1 from "../assets/figma/1.png";
import image2 from "../assets/figma/2.png";
import image3 from "../assets/figma/3.png";
import image4 from "../assets/figma/4.png";
import image5 from "../assets/figma/5.png";
import image6 from "../assets/figma/6.png";
import image7 from "../assets/figma/7.png";
import image8 from "../assets/figma/8.png";

import image from "/public/keyboardwire.png";
// --- EVENT DATA ARRAY ---
// Each event now has a 'registrationUrl' property.
export const preEvents = [
    { 
        id: 1, 
        title: "Type Rush", 
        category: "preevents", 
        description: ".. ", 
        date: "13 October", 
        venue: "Sycamore Lab", 
        timings:"7:00PM to 7:30",
        price:"???" ,
        imageUrl: image,
        registrationUrl: "https://konfhub.com/ai-robotics-expo" // Your specific event URL
    },
     { 
        id: 2, 
        title: "REELNAISSANCE", 
        category: "preevents", 
        description: ".. ", 
        date: "8th to 13th October", 
        venue: "Sycamore Lab", 
        timings:"9:00AM to 6:00PM",
        price:"???" ,
        imageUrl: image,
        registrationUrl: "https://konfhub.com/ai-robotics-expo" // Your specific event URL
    },
     { 
        id: 3, 
        title: "LENZURA", 
        category: "preevents", 
        description: ".. ", 
        date: "8th to 13th October", 
        venue: "Sycamore Lab", 
        timings:"9:00AM to 6:00PM",
        price:"???" ,
        imageUrl: image,
        registrationUrl: "https://konfhub.com/ai-robotics-expo" // Your specific event URL
    },
     
];
export default preEvents;