// lib/constants.ts

export interface EventProps {
    title: string;
    image: string;
    slug: string;
    location: string;
    date: string;
    time: string;
}

export const events: EventProps[] = [
    {
        title: "Next.js Conf India 2026",
        image: "/images/event1.png",
        slug: "nextjs-conf-india-2026",
        location: "Bengaluru, India",
        date: "March 21, 2026",
        time: "9:00 AM – 6:00 PM",
    },
    {
        title: "Hack the Future – AI & Web Hackathon",
        image: "/images/event2.png",
        slug: "hack-the-future-ai-web",
        location: "Hyderabad, India",
        date: "April 5–6, 2026",
        time: "10:00 AM – 10:00 PM",
    },
    {
        title: "Cloud & DevOps Summit",
        image: "/images/event3.png",
        slug: "cloud-devops-summit-2026",
        location: "Pune, India",
        date: "May 12, 2026",
        time: "9:30 AM – 5:30 PM",
    },
    {
        title: "Open Source Meetup Night",
        image: "/images/event4.png",
        slug: "open-source-meetup-night",
        location: "Delhi, India",
        date: "June 8, 2026",
        time: "6:00 PM – 9:30 PM",
    },
    {
        title: "TechnoRave – EDM Night for Developers",
        image: "/images/event5.png",
        slug: "technorave-edm-night",
        location: "Mumbai, India",
        date: "July 19, 2026",
        time: "8:00 PM – 1:00 AM",
    },
    {
        title: "Full Stack Fridays Meetup",
        image: "/images/event6.png",
        slug: "fullstack-fridays-meetup",
        location: "Chandigarh, India",
        date: "August 2, 2026",
        time: "5:00 PM – 8:00 PM",
    },
];
