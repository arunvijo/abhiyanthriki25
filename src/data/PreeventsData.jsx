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
        title: "Bid 2 Code", 
        category: "preevents", 
        description: "It's a technical event which include biding and technical question answer round ", 
        date: "Oct 13, 2025", 
        venue: "Sycamore Lab", 
        imageUrl: image,
        registrationUrl: "https://konfhub.com/ai-robotics-expo" // Your specific event URL
    },
    { 
        id: 2, 
        title: "Kickstart Beats", 
        category: "preevents", 
        description: "Performance by our 3 band team ( malhaar)", 
        date: "Oct 14, 2025", 
        venue: "Chavara Hall", 
        imageUrl: image,
        registrationUrl: "https://konfhub.com/" // Demo URL
    },
    { 
        id: 3, 
        title: "AR Creator Lab", 
        category: "preevents", 
        description: "AR Creator Lab", 
        date: "Oct 13, 2025", 
        venue: "Heisenberg Lab", 
        imageUrl: image,
        registrationUrl: "https://konfhub.com/" // Demo URL
    },
    { 
        id: 4, 
        title: "A3K CTF", 
        category: "preevents", 
        description: "Hackathon ", 
        date: "Oct 10, 2025", 
        venue: "Sycamore Lab", 
        imageUrl: image,
        registrationUrl: "https://konfhub.com/" // Demo URL
    },
    { 
        id: 5, 
        title: "Type Rush", 
        category: "preevents", 
        description: "Typing competition ", 
        date: "Oct 13, 2025", 
        venue: "Online", 
        imageUrl: image,
        registrationUrl: "https://konfhub.com/" // Demo URL
    },
    { 
        id: 6, 
        title: "LENZURA: Catch Their Smile", 
        category: "preevents", 
        description: "Photography competition", 
        date: "Oct 10 - 14, 2025", 
        venue: "Online", 
        imageUrl: image,
        registrationUrl: "https://konfhub.com/" // Demo URL
    },
    { 
        id: 7, 
        title: "Vibe night ", 
        category: "preevents", 
        description: "12 hour vibe coding hackathon", 
        date: "Oct 22, 2025", 
        venue: "Unknown", 
        imageUrl: image,
        registrationUrl: "https://konfhub.com/" // Demo URL
    },
    { 
        id: 8, 
        title: "REELNAISSANCE", 
        category: "preevents", 
        description: "Reel competition", 
        date: "Oct 7 - 14, 2025", 
        venue: "Online", 
        imageUrl: image,
        registrationUrl: "https://konfhub.com/" // Demo URL
    },
];
export default preEvents;