// A generic image import for events that don't have a specific one.
import genericImage from "/keyboardwire.png";

export const allEvents = [
    // --- Technical Events ---
    {
        id: 1,
        title: "OverClocked",
        category: "technical",
        description: "OverClocked is a 24-hour Capture the Flag challenge where students battle through puzzles in cybersecurity, coding, and problem-solving.",
        date: "Oct 14th 2025",
        venue: "New Canteen",
        timings: "5:30PM",
        price: "449 per person",
        imageUrl: "/TechEvents/Overclocked.jpg",
        registrationUrl: "https://konfhub.com/overclocked-e6b06481"
    },
    {
        id: 2,
        title: "Roborazz - Line Edition",
        category: "technical",
        description: "Roborazz Line Edition is a robotics challenge where teams design and program autonomous robots to race along a black-line track with speed and precision.",
        date: "Oct 15, 2025",
        venue: "Pareeksha Bhavan-5",
        timings: "8:30PM",
        price: "FREE ENTRY",
        imageUrl: "/TechEvents/ROBORAZZ.jpg",
        registrationUrl: "https://konfhub.com/roborazz-line-edition-2dc4ecae"
    },
    {
        id: 3,
        title: "Blind Build 2.0",
        category: "technical",
        description: "A fun-filled technical event where students build logic gates under a blindfold challenge, testing teamwork, accuracy, and problem-solving",
        date: "Oct 15, 2025",
        venue: "LCD LAB",
        timings: "2PM",
        price: "150 per team",
        imageUrl: "/TechEvents/BLIND BUILD.jpg",
        registrationUrl: "https://konfhub.com/blind-build-20"
    },
    {
        id: 4,
        title: "Promptify me!",
        category: "technical",
        description: "An essential training and competition focused on mastering the art of Prompt Engineering to maximize output and effectiveness from generative AI models",
        date: "Oct 15, 2025",
        venue: "ARC Lab",
        timings: "8:30AM",
        price: "65 per person",
        imageUrl: "/TechEvents/Promptify Me.jpg",
        registrationUrl: "https://konfhub.com/promptify-me"
    },
    {
        id: 5,
        title: "Circuit Trails- Arduino Hackathon",
        category: "technical",
        description: "A Squid Game style, timed sprint challenging teams to rapidly code and demonstrate mini-Arduino projects (e.g., sensor tasks) sequentially.",
        date: "Oct 15, 2025",
        venue: "Virtual Instrumentation Lab",
        timings: "8.30AM",
        price: "150 per team",
        imageUrl: "/TechEvents/CIRCUIT.jpg",
        registrationUrl: "https://konfhub.com/circuit-trails-arduino-hackathon-sprint"
    },
    {
        id: 6,
        title: "Code Quest",
        category: "technical",
        description: "A unique campus-wide race where teams use custom Arduino circuits to decode Morse code clues at fixed checkpoints. It's a high-energy challenge that merges electronics, cryptography, and teamwork.",
        date: "Oct 15, 2025",
        venue: "Classroom-LH 5",
        timings: "8.30AM",
        price: "150 per team",
        imageUrl: "/TechEvents/CodeQuest.jpg", // Corrected Path
        registrationUrl: "https://konfhub.com/code-quest-e82ed0f0"
    },
    {
        id: 7,
        title: "Agents 101",
        category: "technical",
        description: "Hands-on workshop introducing students to agentic AI and machine learning, guiding them from beginner to intermediate level to build their first showcase-worthy project.",
        date: "Oct 15, 2025",
        venue: "Zuse Lab",
        timings: "9.00AM",
        price: "100 per person",
        imageUrl: "/TechEvents/AGENTS 101.jpg", // Corrected Path
        registrationUrl: "https://konfhub.com/agents-101-12f9e488"
    },
    {
        id: 8,
        title: "Cloud & Careers: Navigating the Tech Landscape",
        category: "technical",
        description: "A technical talk session led by industry experts, guiding students through emerging opportunities in cloud technologies and modern tech careers",
        date: "Oct 15, 2025",
        venue: "MULTIMEDIA HALL",
        timings: "9.00AM",
        price: "50 per person",
        imageUrl: "/TechEvents/Cloud & Careers.jpg",
        registrationUrl: "https://konfhub.com/cloud-careers-navigating-the-tech-landscape"
    },
    {
        id: 9,
        title: "Vibe night",
        category: "technical",
        description: "VibeNight is a 12-hour coding hackathon where creativity, caffeine, and code collide",
        date: "Oct 14, 2025",
        venue: "Gallery Hall",
        timings: "5.30PM",
        price: "249 per person",
        imageUrl: "/TechEvents/Vibe Night.jpg",
        registrationUrl: "https://konfhub.com/vibe-night"
    },

    // --- Non-Technical Events ---
    {
        id: 12,
        title: "DecibelZ: Inter-college Band competition",
        category: "non-technical",
        description: "Brings college bands to the stage to show their talent and energy. It’s not just a contest—it’s a celebration of music and youth.",
        date: "Oct 15, 2025",
        venue: "Chavara Hall",
        timings: null,
        price: "1000 per team",
        imageUrl: "/NonTechEvents/Dciblz.jpg",
        registrationUrl: "https://konfhub.com/decibelz"
    },
    {
        id: 13,
        title: "CRICKONOMICS: IPL Auction",
        category: "non-technical",
        description: "Lets students act as IPL team owners in a fast-paced auction, bidding for players and building dream teams.",
        date: "Oct 15, 2025",
        venue: "Gallery Hall",
        timings: "9:00AM to 12:00PM",
        price: "75 per person",
        imageUrl: "/NonTechEvents/CRICKONOMICS.jpg",
        registrationUrl: "https://konfhub.com/crickonomics"
    },
    {
        id: 14,
        title: "Red Code: Women’s Safety",
        category: "non-technical",
        description: "Spreads awareness about women’s health in a creative way, featuring expert talks and a period-pain simulator.",
        date: "Oct 15, 2025",
        venue: "Seminar Hall (KE BLOCK 4th Floor)",
        timings: "10:00AM to 12:00PM",
        price: "Free Entry",
        imageUrl: "/NonTechEvents/Red Code.jpg",
        registrationUrl: "https://konfhub.com/redcode"
    },
    {
        id: 15,
        title: "Among Us",
        category: "non-technical",
        description: "Turns the campus into a fun mystery game where players solve clues, complete tasks, and find the ‘imposter’.",
        date: "Oct 15, 2025",
        venue: "All Around Campus",
        timings: "09:00AM to 04:00PM",
        price: "120 per person",
        imageUrl: "/NonTechEvents/Among Us.jpg",
        registrationUrl: "https://konfhub.com/among-us-1951881c"
    },
];

export default allEvents;
