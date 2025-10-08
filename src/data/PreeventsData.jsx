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
        description: "An exciting online typing tournament conducted in knockout rounds, where participants compete in one-minute typing challenges that grow progressively tougher with each stage. The competition tests both speed and accuracy, pushing participants to stay sharp and consistent as they advance.", 
        date: "13 October", 
        venue: "Sycamore Lab", 
        timings:"7:00PM to 7:30",
        price:"100 per person" ,
        imageUrl: image,
        registrationUrl: "https://konfhub.com/ai-robotics-expo" // Your specific event URL
    },
     { 
        id: 2, 
        title: "REELNAISSANCE", 
        category: "preevents", 
        description: "A reel-making competition designed to promote Abhiyanthriki 2025, our college’s tech fest. It’s a group event. Teams are invited to create engaging, innovative, and impactful short videos that capture the excitement, energy, and essence of the fest — serving as creative promotional content to boost its online presence and reach.", 
        date: "8th to 13th October", 
        venue: "Sycamore Lab", 
        timings:"9:00AM to 6:00PM",
        price:"150 per team" ,
        imageUrl: image,
        registrationUrl: "https://konfhub.com/ai-robotics-expo" // Your specific event URL
    },
     { 
        id: 3, 
        title: "LENZURA", 
        category: "preevents", 
        description: "A campus-based photography competition dedicated to capturing the smiles that light up our college. Participants are invited to click candid moments of students, teachers, and staff within the campus premises, highlighting genuine expressions and joyful interactions that reflect the warmth of our community.", 
        date: "8th to 13th October", 
        venue: "Sycamore Lab", 
        timings:"9:00AM to 6:00PM",
        price:"100 per person" ,
        imageUrl: image,
        registrationUrl: "https://konfhub.com/ai-robotics-expo" // Your specific event URL
    },
     
];
export default preEvents;