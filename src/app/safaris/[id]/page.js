"use client";  // Ensure the component runs on the client side

import React, { useState } from "react";
import { useParams } from 'next/navigation';  // Get the dynamic route params
import SafariHero from '../../components/SafariHero';  // Reuse SafariHero component
import BookingModal from "../../components/BookingModal";
import SafariAbout from '../../components/SafariAbout';  // Reuse SafariAbout component
import SafariItinerary from '../../components/SafariItinerary';  // Reuse SafariItinerary component
import SafariFAQ from '../../components/SafariFAQ';  // Reuse SafariFAQ component
import Header from '@/app/components/Header';
import SafariIncludesExcludes from '@/app/components/SafariIncludesExcludes';
import InquiryForm from '@/app/components/InquiryForm';  // Import InquiryForm
import Footer from '@/app/components/Footer';

export default function SafariPage() {
  const { id } = useParams();

  // State to manage the booking modal
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  // Safari data for two example safaris
  const safariData = {
    "discover-the-peaks": {
      title: "Discover the Peaks",
      subtitle: "Conquer the heights of Kilimanjaro",
      heroImage: "/images/mount-kilimanjaro.jpg",
      overview:
        "This thrilling 8-day adventure will take you through the stunning landscapes of Kilimanjaro...",
      highlights: [
        "Scenic Drive through the Tanzanian countryside.",
        "Tropical Rainforest hike with vibrant flora and fauna.",
        "Cultural Insights about the Chagga people.",
        "Acclimatisation for future climbs.",
        "Nature and Wildlife spotting, including monkeys and birds.",
      ],
      priceDetails: { price: 180 },
      itinerary: [
        {
          day: 1,
          description: "Arrival and acclimatization",
          details:
            "Your safari adventure begins as you touch down at Kilimanjaro International Airport (JRO). Our team will be there to warmly welcome you...",
          time: "1 hour",
          meal: "Dinner",
        },
        {
          day: 2,
          description: "Hiking through the Shira Plateau",
          details: "Explore the scenic Shira Plateau...",
          time: "6 hours",
          meal: "Breakfast, Lunch",
        },
        {
          day: 3,
          description: "More Adventure",
          details: "Enjoy more scenic hikes...",
        },
        // Add more days as needed
      ],
      faq: [
        {
          question: "What should I pack?",
          answer: "Bring layers for cold weather...",
        },
        {
          question: "What is the altitude?",
          answer: "The highest point is 5,895 meters.",
        },
      ],
      includes: [
        "Airport pick-up and drop-off",
        "2 nights' hotel accommodation, before & after safari on bed and breakfast basis",
        "1 night full board accommodation whilst on safari",
        "Exclusive use of 4*4 safari jeep, with pop-up roof and wide windows",
        "Professional English speaking driver guide",
        "All Park fees and Crater fees",
        "Complimentary lunch on day 1",
        "Game drives as indicated in the itinerary",
        "Bottled mineral water while on game drives",
      ],
      excludes: [
        "Drinks of choice on the Itinerary",
        "Extra excursions / services available at safari lodges",
        "Items of a personal nature, such as laundry, phone calls & snacks",
        "Deviation from the safari itinerary provided",
        "Maasai boma visit – USD 100 per vehicle",
        "Tips to your safari guide ($25 per vehicle per day)",
      ],
    },

    "luxury-safaris": {
      title: "Luxury Safaris",
      subtitle: "Indulge in the finest safari experience",
      heroImage: "/images/luxury-safaris.jpg",
      overview:
        "Explore the wilderness of Tanzania in absolute luxury with a 7-day safari across Serengeti, Mikumi, and Tarangire. Experience exquisite accommodations, gourmet meals, and personalized service while witnessing Tanzania's majestic wildlife.",
      highlights: [
        "Luxury lodges in the heart of the Serengeti.",
        "Private game drives with expert guides.",
        "Exclusive access to the wildlife of Mikumi and Tarangire.",
        "Tailored dining experiences in the wild.",
        "Sundowners with views of Tanzania's stunning landscapes.",
      ],
      priceDetails: { price: 600 },
      itinerary: [
        {
          day: 1,
          description: "Arrival at Arusha",
          details:
            "Arrival and transfer to a luxury lodge in Arusha. Relax and prepare for the journey ahead.",
          time: "1 hour",
          meal: "Dinner",
        },
        {
          day: 2,
          description: "Serengeti National Park",
          details:
            "Fly to Serengeti and embark on your first luxury game drive. Overnight at a luxury lodge.",
          time: "3 hours",
          meal: "Breakfast, Lunch, Dinner",
        },
        {
          day: 3,
          description: "Serengeti Game Drive",
          details:
            "Full-day luxury safari in Serengeti with gourmet picnic lunch.",
          time: "6 hours",
          meal: "Breakfast, Lunch, Dinner",
        },
        {
          day: 4,
          description: "Mikumi National Park",
          details:
            "Fly to Mikumi National Park for a game drive and overnight stay at a luxury camp.",
          time: "5 hours",
          meal: "Breakfast, Lunch, Dinner",
        },
        {
          day: 5,
          description: "Tarangire National Park",
          details:
            "Drive to Tarangire for an exclusive safari experience and stay at a private lodge.",
          time: "4 hours",
          meal: "Breakfast, Lunch, Dinner",
        },
        {
          day: 6,
          description: "Luxury Safari Experience",
          details:
            "Relax at the lodge with optional spa treatments or take part in an additional game drive.",
          time: "N/A",
          meal: "Breakfast, Lunch, Dinner",
        },
        {
          day: 7,
          description: "Departure",
          details: "Return to Arusha for your onward journey.",
          time: "1 hour",
          meal: "Breakfast",
        },
      ],
      faq: [
        {
          question: "What should I pack?",
          answer:
            "Pack comfortable clothing, sun protection, and some warm layers for cooler evenings.",
        },
        {
          question: "Is the safari child-friendly?",
          answer:
            "Yes, luxury safaris are family-friendly, with tailored experiences for children.",
        },
      ],
      includes: [
        "Airport pick-up and drop-off",
        "Luxury lodge accommodation throughout",
        "All meals and beverages",
        "Private game drives with expert guides",
        "All park fees and conservation fees",
        "Sundowner experiences",
        "Complimentary spa treatments (where available)",
      ],
      excludes: [
        "International flights",
        "Travel insurance",
        "Personal expenses such as laundry and souvenirs",
        "Gratuities for guides and staff",
      ],
    },

"photography-safaris": {
  title: "Photography Safaris",
  subtitle: "Capture the Beauty of African Wildlife",
  heroImage: "/images/photographer-savannah.jpg",
  overview: "Embark on a 7-day photographic journey through Tanzania's most picturesque landscapes. Ideal for both amateur and professional photographers, this safari offers unparalleled opportunities to capture Africa's diverse wildlife and stunning sceneries.",
  highlights: [
    "Guided by professional wildlife photographers",
    "Specially modified vehicles for optimal camera positioning",
    "Golden hour drives in Serengeti and Ngorongoro",
    "Workshops on wildlife photography techniques",
    "Opportunity to photograph the Great Migration",
  ],
  priceDetails: { price: 3200 },
  itinerary: [
    {
      day: 1,
      description: "Arrival in Arusha",
      details: "Welcome meeting and equipment check. Overnight at a lodge.",
      time: "2 hours",
      meal: "Dinner"
    },
    {
      day: 2,
      description: "Tarangire National Park",
      details: "Full day photographing elephants and baobab landscapes.",
      time: "8 hours",
      meal: "Breakfast, Lunch, Dinner"
    },
    {
      day: 3,
      description: "Serengeti National Park",
      details: "Drive to Serengeti. Afternoon game drive and sunset shoot.",
      time: "6 hours",
      meal: "Breakfast, Lunch, Dinner"
    },
    {
      day: 4,
      description: "Serengeti Photography",
      details: "Full day in Serengeti with dawn and dusk shoots.",
      time: "12 hours",
      meal: "Breakfast, Lunch, Dinner"
    },
    {
      day: 5,
      description: "Ngorongoro Crater",
      details: "Early morning descent into the crater for unique shots.",
      time: "10 hours",
      meal: "Breakfast, Lunch, Dinner"
    },
    {
      day: 6,
      description: "Lake Manyara",
      details: "Bird photography and tree-climbing lions.",
      time: "8 hours",
      meal: "Breakfast, Lunch, Dinner"
    },
    {
      day: 7,
      description: "Departure",
      details: "Final image review and return to Arusha.",
      time: "3 hours",
      meal: "Breakfast"
    }
  ],
  faq: [
    {
      question: "What camera equipment should I bring?",
      answer: "We recommend a DSLR or mirrorless camera with a variety of lenses, including a telephoto lens (at least 300mm). A tripod is also useful."
    },
    {
      question: "Is this safari suitable for beginners?",
      answer: "Yes, our experienced guides can cater to all skill levels, from beginners to professionals."
    }
  ],
  includes: [
    "Professional photography guide",
    "Modified safari vehicles for photographers",
    "All park fees and game drives",
    "Accommodation in lodges and tented camps",
    "All meals and drinks while on safari",
    "Daily photography workshops and image reviews"
  ],
  excludes: [
    "International flights",
    "Camera equipment and accessories",
    "Personal travel insurance",
    "Gratuities for guides and staff"
  ]
},

"elephant-herd": {
  title: "Elephant Herd Safari",
  subtitle: "Journey with the Giants of Africa",
  heroImage: "/images/elephantloyani3.jpg",
  overview: "Experience a unique 6-day safari focused on observing and understanding elephant behavior. Witness large herds in their natural habitat and learn about conservation efforts.",
  highlights: [
    "Close encounters with elephant herds in Tarangire and Amboseli",
    "Visit to an elephant research center",
    "Guided bush walks to observe elephant behavior",
    "Night drives to see nocturnal elephant activities",
    "Contribute to elephant conservation projects"
  ],
  priceDetails: { price: 2800 },
  itinerary: [
    {
      day: 1,
      description: "Arrival in Arusha",
      details: "Transfer to lodge. Evening presentation on elephant ecology.",
      time: "3 hours",
      meal: "Dinner"
    },
    {
      day: 2,
      description: "Tarangire National Park",
      details: "Full day observing large elephant herds around Tarangire River.",
      time: "10 hours",
      meal: "Breakfast, Lunch, Dinner"
    },
    {
      day: 3,
      description: "Tarangire Research",
      details: "Visit elephant research center. Afternoon game drive.",
      time: "8 hours",
      meal: "Breakfast, Lunch, Dinner"
    },
    {
      day: 4,
      description: "Amboseli National Park",
      details: "Transfer to Amboseli. Evening game drive to spot elephants.",
      time: "6 hours",
      meal: "Breakfast, Lunch, Dinner"
    },
    {
      day: 5,
      description: "Amboseli Elephant Watching",
      details: "Full day in Amboseli observing elephants against Mt. Kilimanjaro backdrop.",
      time: "12 hours",
      meal: "Breakfast, Lunch, Dinner"
    },
    {
      day: 6,
      description: "Departure",
      details: "Morning bush walk. Transfer back to Arusha.",
      time: "4 hours",
      meal: "Breakfast"
    }
  ],
  faq: [
    {
      question: "How close will we get to the elephants?",
      answer: "We maintain a safe distance, but you'll be close enough for excellent viewing and photography. Safety is our priority."
    },
    {
      question: "Is this safari suitable for children?",
      answer: "Yes, it's educational and exciting for children aged 8 and above."
    }
  ],
  includes: [
    "Specialized elephant behavior guide",
    "All park fees and game drives",
    "Accommodation in lodges and luxury tented camps",
    "All meals and drinks while on safari",
    "Contribution to elephant conservation projects"
  ],
  excludes: [
    "International flights",
    "Personal travel insurance",
    "Souvenirs and personal expenses",
    "Gratuities for guides and staff"
  ]
},

"sleeping-lions": {
  title: "Sleeping Lions Safari",
  subtitle: "Witness the Kings of the Savannah at Rest",
  heroImage: "/images/sleeping-lion.jpg",
  overview: "Join this unique 5-day safari focused on observing lion behavior, including their famous daytime resting periods. Perfect for big cat enthusiasts and wildlife photographers.",
  highlights: [
    "Extended observation of lion prides in Serengeti",
    "Night drives to see active lions",
    "Visit to lion research and conservation projects",
    "Opportunity to see other big cats like cheetahs and leopards",
    "Learn about lion behavior from expert guides"
  ],
  priceDetails: { price: 2600 },
  itinerary: [
    {
      day: 1,
      description: "Arrival in Arusha",
      details: "Transfer to lodge. Evening briefing on lion ecology.",
      time: "2 hours",
      meal: "Dinner"
    },
    {
      day: 2,
      description: "Serengeti National Park",
      details: "Drive to Serengeti. Afternoon game drive to locate lion prides.",
      time: "6 hours",
      meal: "Breakfast, Lunch, Dinner"
    },
    {
      day: 3,
      description: "Serengeti Lion Watching",
      details: "Full day observing lion behavior, including famous tree-climbing lions.",
      time: "12 hours",
      meal: "Breakfast, Lunch, Dinner"
    },
    {
      day: 4,
      description: "Night and Dawn Drives",
      details: "Early morning and night drives to see active lions. Midday rest.",
      time: "10 hours",
      meal: "Breakfast, Lunch, Dinner"
    },
    {
      day: 5,
      description: "Departure",
      details: "Final morning game drive. Return to Arusha for departure.",
      time: "4 hours",
      meal: "Breakfast"
    }
  ],
  faq: [
    {
      question: "Will we definitely see lions on this safari?",
      answer: "While wildlife sightings can never be guaranteed, our expert guides know the best locations for lion sightings, maximizing your chances."
    },
    {
      question: "Is it safe to be around lions?",
      answer: "Yes, we always maintain a safe distance and observe from the safety of our vehicles. Your safety is our top priority."
    }
  ],
  includes: [
    "Expert lion behavior guide",
    "All park fees and game drives",
    "Accommodation in lodges and tented camps",
    "All meals and drinks while on safari",
    "Night drive permits",
    "Contribution to lion conservation projects"
  ],
  excludes: [
    "International flights",
    "Personal travel insurance",
    "Souvenirs and personal expenses",
    "Gratuities for guides and staff"
  ]
},

    "adventure-safaris": {
      title: "Adventure Safaris",
      subtitle: "Thrilling Adventures in the Wild",
      heroImage: "/images/balloon-elephant.jpg",
      overview:
        "Join us for a 5-day thrilling adventure in Tanzania's most iconic parks. Perfect for adrenaline seekers, these safaris cover Serengeti, Mikumi, Tarangire, and more.",
      highlights: [
        "Exciting game drives through Serengeti, Mikumi, and Tarangire.",
        "Walking safaris led by experienced rangers.",
        "Camping under the stars in the wilderness.",
        "Encounter with the 'Big Five'.",
        "Opportunities for night game drives and bird watching.",
      ],
      priceDetails: { price: 450 },
      itinerary: [
        {
          day: 1,
          description: "Arrival at Arusha",
          details: "Arrive and transfer to a lodge for a briefing and rest.",
          time: "1 hour",
          meal: "Dinner",
        },
        {
          day: 2,
          description: "Serengeti Game Drive",
          details: "Drive through Serengeti for a full-day safari and camping.",
          time: "6 hours",
          meal: "Breakfast, Lunch, Dinner",
        },
        {
          day: 3,
          description: "Mikumi Adventure",
          details:
            "Transfer to Mikumi for an adventurous day of walking safaris and overnight camping.",
          time: "5 hours",
          meal: "Breakfast, Lunch, Dinner",
        },
        {
          day: 4,
          description: "Tarangire National Park",
          details: "Experience the vast herds of Tarangire and camp overnight.",
          time: "4 hours",
          meal: "Breakfast, Lunch, Dinner",
        },
        {
          day: 5,
          description: "Departure",
          details: "Return to Arusha for your departure.",
          time: "1 hour",
          meal: "Breakfast",
        },
      ],
      faq: [
        {
          question: "Is this safari suitable for families?",
          answer:
            "This safari is suited for adventurous families. Children should be comfortable with outdoor camping.",
        },
        {
          question: "Are night drives available?",
          answer:
            "Yes, night game drives are available in some parks, including Tarangire.",
        },
      ],
      includes: [
        "Airport transfers",
        "Camping gear and accommodations",
        "Meals and drinks while on safari",
        "All game drives and park fees",
        "Professional safari guide",
        "Walking safaris",
      ],
      excludes: [
        "Personal expenses and souvenirs",
        "Travel insurance",
        "Optional excursions",
        "Gratuities for guides and staff",
      ],
    },

    "cultural-safaris": {
      title: "Cultural Safaris",
      subtitle: "Immerse in the Cultural History of Tanzania",
      heroImage: "/images/savanna.jpg",
      overview:
        "Discover Tanzania's rich cultural heritage on this 5-day journey through its museums, historical sites, and cultural villages.",
      highlights: [
        "Explore the National Museum in Dar es Salaam.",
        "Visit the Olduvai Gorge, the cradle of humankind.",
        "Meet the Maasai people and learn about their traditions.",
        "Tour the ancient rock paintings in Kondoa.",
        "Experience the local markets and crafts of Arusha.",
      ],
      priceDetails: { price: 300 },
      itinerary: [
        {
          day: 1,
          description: "Arrival and National Museum",
          details: "Arrive in Dar es Salaam and visit the National Museum.",
          time: "3 hours",
          meal: "Dinner",
        },
        {
          day: 2,
          description: "Olduvai Gorge",
          details: "Fly to the Ngorongoro area and visit the Olduvai Gorge.",
          time: "5 hours",
          meal: "Breakfast, Lunch, Dinner",
        },
        {
          day: 3,
          description: "Maasai Cultural Village",
          details:
            "Spend the day with the Maasai, learning about their way of life.",
          time: "4 hours",
          meal: "Breakfast, Lunch, Dinner",
        },
        {
          day: 4,
          description: "Kondoa Rock Art",
          details:
            "Explore the ancient rock art of Kondoa, a UNESCO World Heritage site.",
          time: "6 hours",
          meal: "Breakfast, Lunch, Dinner",
        },
        {
          day: 5,
          description: "Local Crafts and Departure",
          details: "Visit local markets in Arusha before departure.",
          time: "3 hours",
          meal: "Breakfast",
        },
      ],
      faq: [
        {
          question: "What language is spoken during the cultural tours?",
          answer:
            "All tours are conducted in English, with guides fluent in Swahili and Maasai languages.",
        },
        {
          question: "Are the cultural safaris family-friendly?",
          answer: "Yes, the tours are suitable for families with children.",
        },
      ],
      includes: [
        "Airport transfers and transport",
        "Guided tours of all cultural sites",
        "Accommodation in cultural lodges",
        "All meals and beverages",
        "Park fees and entrance fees to cultural sites",
      ],
      excludes: [
        "International flights",
        "Travel insurance",
        "Personal expenses and souvenirs",
        "Gratuities for guides",
      ],
    },

    "lions-of-serengeti": {
      title: "Lions of Serengeti",
      subtitle: "Witness the King of the Jungle in the Wild",
      heroImage: "/images/lions-of-serengeti.jpeg",
      overview:
        "Experience the thrill of observing lions in their natural habitat in Serengeti on this 3-day safari. Get up close with the pride and witness their majestic presence.",
      highlights: [
        "Game drives in the Serengeti's lion territories.",
        "Professional guides who specialize in lion behavior.",
        "Close encounters with lions, observing their social interactions.",
        "Stunning sunsets over the Serengeti.",
        "Optional balloon safari to witness lions from above.",
      ],
      priceDetails: { price: 350 },
      itinerary: [
        {
          day: 1,
          description: "Arrival and Serengeti Game Drive",
          details:
            "Arrive in Serengeti and embark on your first game drive to spot lions.",
          time: "3 hours",
          meal: "Lunch, Dinner",
        },
        {
          day: 2,
          description: "Full-Day Lion Tracking",
          details:
            "Spend the day tracking and observing lions with expert guides.",
          time: "6 hours",
          meal: "Breakfast, Lunch, Dinner",
        },
        {
          day: 3,
          description: "Morning Game Drive and Departure",
          details:
            "Take a final morning game drive to see lions in the early hours before departure.",
          time: "2 hours",
          meal: "Breakfast",
        },
      ],
      faq: [
        {
          question: "What should I bring for a lion safari?",
          answer:
            "Bring binoculars, camera, sunscreen, and neutral-colored clothing.",
        },
        {
          question: "Is this safari suitable for children?",
          answer:
            "Children are welcome, but they must be supervised during game drives.",
        },
      ],
      includes: [
        "Airport pick-up and drop-off",
        "Accommodation in a safari lodge",
        "All meals and drinks",
        "Game drives with a professional guide",
        "Park fees and conservation fees",
      ],
      excludes: [
        "Personal expenses",
        "Optional balloon safari",
        "Tips to guides and staff",
      ],
    },

    "cheetahs-in-action": {
      title: "Cheetahs in Action",
      subtitle: "Witness the Speed of Cheetahs",
      heroImage: "/images/cheetahs-in-action.png",
      overview:
        "Experience the breathtaking speed of cheetahs in action on this 4-day safari across the Serengeti and Maasai Mara. Get ready for thrilling game drives to see these magnificent creatures at their peak.",
      highlights: [
        "Game drives focused on cheetah sightings.",
        "Learn about cheetah conservation efforts.",
        "Witness cheetahs hunting in the wild.",
        "Photography opportunities with professional guides.",
        "Visit cheetah conservation centers in the Maasai Mara.",
      ],
      priceDetails: { price: 400 },
      itinerary: [
        {
          day: 1,
          description: "Arrival and Serengeti Game Drive",
          details:
            "Arrive in Serengeti and begin your safari, focusing on cheetah sightings.",
          time: "3 hours",
          meal: "Lunch, Dinner",
        },
        {
          day: 2,
          description: "Serengeti Cheetah Safari",
          details:
            "Spend the day in the Serengeti, tracking cheetahs with expert guides.",
          time: "6 hours",
          meal: "Breakfast, Lunch, Dinner",
        },
        {
          day: 3,
          description: "Transfer to Maasai Mara",
          details:
            "Drive to Maasai Mara for more cheetah sightings and conservation visits.",
          time: "5 hours",
          meal: "Breakfast, Lunch, Dinner",
        },
        {
          day: 4,
          description: "Final Game Drive and Departure",
          details: "Enjoy one last game drive before returning to Arusha.",
          time: "2 hours",
          meal: "Breakfast",
        },
      ],
      faq: [
        {
          question: "Are cheetah sightings guaranteed?",
          answer:
            "While sightings are likely, cheetah activity can vary depending on the time of year.",
        },
        {
          question: "Is this safari suitable for photographers?",
          answer:
            "Yes, this safari offers excellent opportunities for wildlife photography.",
        },
      ],
      includes: [
        "Airport transfers",
        "Accommodation at safari lodges",
        "All meals and beverages",
        "Game drives and guided tours",
        "Park and conservation fees",
      ],
      excludes: [
        "Personal expenses",
        "International flights",
        "Gratuities for guides",
      ],
    },

    "flamingos-in-paradise": {
      title: "Flamingos in Paradise",
      subtitle: "A Spectacle of Flamingos at Lake Manyara",
      heroImage: "/images/flamingos-in-paradise.jpg",
      overview:
        "Join us for a 3-day journey to Lake Manyara, where thousands of flamingos gather to create a stunning visual display. Experience the beauty of these pink birds amidst the lush landscapes of Tanzania.",
      highlights: [
        "Thousands of flamingos at Lake Manyara.",
        "Photography opportunities with a stunning backdrop.",
        "Bird-watching tours with professional guides.",
        "Close encounters with other wildlife, including hippos and elephants.",
        "Stay at luxury lodges near the lake.",
      ],
      priceDetails: { price: 350 },
      itinerary: [
        {
          day: 1,
          description: "Arrival and Lake Manyara",
          details:
            "Arrive at Lake Manyara and witness the spectacle of flamingos.",
          time: "3 hours",
          meal: "Lunch, Dinner",
        },
        {
          day: 2,
          description: "Full-Day Bird Watching",
          details:
            "Spend the day observing flamingos and other bird species with expert guides.",
          time: "6 hours",
          meal: "Breakfast, Lunch, Dinner",
        },
        {
          day: 3,
          description: "Morning Game Drive and Departure",
          details: "Enjoy a morning game drive before heading back to Arusha.",
          time: "2 hours",
          meal: "Breakfast",
        },
      ],
      faq: [
        {
          question: "When is the best time to see flamingos?",
          answer:
            "Flamingos are present at Lake Manyara year-round, but the best time is during the dry season.",
        },
        {
          question: "Is this safari suitable for bird-watchers?",
          answer:
            "Yes, this safari is perfect for bird-watchers and photographers.",
        },
      ],
      includes: [
        "Airport transfers",
        "Accommodation at luxury lodges",
        "Meals and beverages",
        "Guided bird-watching tours",
        "Park fees and conservation fees",
      ],
      excludes: [
        "Personal expenses",
        "Optional excursions",
        "Gratuities for guides",
      ],
    },

    "graceful-giraffes": {
      title: "Graceful Giraffes",
      subtitle: "Witness the Elegance of Giraffes in Tanzania",
      heroImage: "/images/giraffes.jpg",
      overview:
        "Explore Tanzania’s most beautiful parks on this 6-day safari, focused on the elegant giraffes of Mikumi, Ngorongoro, Tarangire, and Serengeti. Marvel at their grace as you travel through Tanzania’s stunning landscapes.",
      highlights: [
        "Up-close encounters with giraffes in their natural habitat.",
        "Game drives in Mikumi, Ngorongoro, and Serengeti.",
        "Photographic opportunities with towering giraffes.",
        "Guided tours with giraffe conservation experts.",
        "Enjoy luxury lodges surrounded by wildlife.",
      ],
      priceDetails: { price: 500 },
      itinerary: [
        {
          day: 1,
          description: "Arrival at Arusha",
          details: "Arrive in Arusha and relax at a nearby lodge.",
          time: "1 hour",
          meal: "Dinner",
        },
        {
          day: 2,
          description: "Mikumi National Park",
          details:
            "Head to Mikumi for a day of giraffe sightings and overnight at a luxury camp.",
          time: "6 hours",
          meal: "Breakfast, Lunch, Dinner",
        },
        {
          day: 3,
          description: "Ngorongoro Conservation Area",
          details:
            "Visit Ngorongoro for a thrilling day of game drives and giraffe encounters.",
          time: "5 hours",
          meal: "Breakfast, Lunch, Dinner",
        },
        {
          day: 4,
          description: "Tarangire National Park",
          details:
            "Enjoy a full-day game drive in Tarangire, known for its large elephant and giraffe populations.",
          time: "4 hours",
          meal: "Breakfast, Lunch, Dinner",
        },
        {
          day: 5,
          description: "Serengeti National Park",
          details:
            "Travel to Serengeti for more giraffe sightings and stay at a luxury lodge.",
          time: "6 hours",
          meal: "Breakfast, Lunch, Dinner",
        },
        {
          day: 6,
          description: "Departure",
          details: "Return to Arusha for your departure.",
          time: "1 hour",
          meal: "Breakfast",
        },
      ],
      faq: [
        {
          question: "Are giraffes common in these areas?",
          answer:
            "Yes, all parks visited on this safari have large populations of giraffes.",
        },
        {
          question: "What is the best time of year to see giraffes?",
          answer:
            "Giraffes are visible year-round, though the dry season offers the best visibility.",
        },
      ],
      includes: [
        "Airport transfers and accommodations",
        "Game drives in all parks",
        "All meals and drinks",
        "Luxury lodges and tented camps",
        "Professional safari guide",
        "Park fees and conservation fees",
      ],
      excludes: [
        "International flights",
        "Personal expenses",
        "Optional excursions",
        "Gratuities for guides",
      ],
    },

    "unparalleled-adventures": {
      title: "Unparalleled Adventures",
      subtitle: "Step into the heart of Africa with thrilling adventures",
      heroImage: "/images/cheetah-walking.jpg",
      overview:
        "Join us for a 7-day adventure in the heart of Africa, where the wilderness awaits...",
      highlights: [
        "Explore the African savannah.",
        "Experience the wildlife up close.",
        "Enjoy expert-guided tours.",
        "Discover the beauty of nature in its raw form.",
      ],
      priceDetails: { price: 250 },
      itinerary: [
        {
          day: 1,
          description: "Explore the savannah",
          details: "A thrilling day of safari in the savannah...",
          time: "6 hours",
          meal: "Breakfast, Lunch",
        },
        {
          day: 2,
          description: "Meet the majestic elephants",
          details: "Get up close and personal with Africa's elephants...",
          time: "5 hours",
          meal: "Breakfast, Lunch",
        },
        // Add more days as needed
      ],
      faq: [
        {
          question: "What is included?",
          answer: "Meals, accommodation, and guided tours are all included.",
        },
        {
          question: "How do I prepare?",
          answer: "We will provide you with a comprehensive guide.",
        },
      ],
      includes: [
        "Exclusive safari experience with expert guides",
        "Airport transfers and transportation during the safari",
        "Full board meals and drinks during the safari",
        "Game drives and national park entrance fees",
        "Comfortable accommodation throughout the tour",
        "Bottled water and beverages during game drives",
      ],
      excludes: [
        "Personal expenses such as souvenirs",
        "International flights and visa fees",
        "Travel insurance and medical expenses",
        "Optional activities not included in the itinerary",
        "Gratuities for the safari guide",
        "Alcoholic beverages and drinks not included in meals",
      ],
    },
  };
  const safari = safariData[id];
  if (!safari) return <p>Safari not found</p>;

  // Handle the booking form submission
  const handleBookingSubmit = async (formData) => {
    try {
      const response = await axios.post("/api/bookings", formData);
      if (response.status === 200) {
        console.log("Booking submitted successfully:", formData);
        // Display success message if needed
      } else {
        console.error("Error submitting booking:", response.data);
      }
    } catch (error) {
      console.error("Booking submission failed:", error);
      // Display error message if needed
    }
  };
  return (
    <div>
      <Header />
      <SafariHero
        title={safari.title}
        subtitle={safari.subtitle}
        image={safari.heroImage}
        buttonText="Book Now"
        onButtonClick={() => setIsBookingModalOpen(true)} // Trigger modal on click
      />
      {/* Booking Modal */}
      <BookingModal
        open={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        onSubmit={handleBookingSubmit}
      />
      <SafariAbout
        overview={safari.overview}
        highlights={safari.highlights}
        priceDetails={safari.priceDetails}
      />
      <SafariItinerary itinerary={safari.itinerary} />
      <SafariIncludesExcludes
        includes={safari.includes}
        excludes={safari.excludes}
      />
      <SafariFAQ faqList={safari.faq} />
      <InquiryForm safariName={safari.title} /> {/* Adding Inquiry Form */}
      <Footer />
    </div>
  );
}
