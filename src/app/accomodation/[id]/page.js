"use client";  // Ensure the component runs on the client side

import Header from '@/app/components/Header';  // Reuse Header component
import HeroSection from '@/app/components/HeroSection';  // Reuse HeroSection component
import AccommodationHotelsSection from '@/app/components/AccomodationsHotelsSection';  // New component for hotels
import AccommodationFAQ from '@/app/components/AccommodationFAQ';  // New FAQ component
import InquiryForm from '@/app/components/InquiryForm';  // Reuse Inquiry Form
import Footer from '@/app/components/Footer';  // Reuse Footer component
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useParams } from 'next/navigation';  // Dynamic routing
import AccommodationHero from '@/app/components/AccommodationHero';
import BookingModal from '@/app/components/BookingModal';
import { useState } from 'react';
import axios from 'axios';
import TripAdvisorSection from '@/app/components/TripAdvisorSection';

export default function AccommodationPage() {

 // Define the isBookingModalOpen state to control the modal visibility
 const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const { id } = useParams();

  // Dynamic data for different hotel categories
  const accommodationData = {
    serengeti: {
      title: "Luxurious Hotels in Serengeti",
      subtitle: "Experience the Serengeti like never before with the best accommodations.",
      heroImage: "/images/serengeti-safari-lodge.png",
      hotels: [
        {
          id: "serengeti-serena-lodge",
          title: "Serengeti Serena Safari Lodge",
          image: "/images/serengeti-safari-lodge.png",
          description: "This award-winning lodge offers incredible views of the Serengeti plains and luxurious rooms.",
          tripAdvisorUrl: "https://www.tripadvisor.com/Hotel_Review-g297912-d305336-Reviews-Serengeti_Serena_Safari_Lodge-Serengeti_National_Park.html",
          website: "https://www.serenahotels.com/serengeti"
        },
        {
          id: "four-seasons-serengeti",
          title: "Four Seasons Safari Lodge Serengeti",
          image: "/images/four-seasons.png",
          description: "An oasis of comfort with poolside views of elephants at the waterhole.",
          tripAdvisorUrl: "https://www.tripadvisor.com/Hotel_Review-g297912-d4067587-Reviews-Four_Seasons_Safari_Lodge_Serengeti-Serengeti_National_Park.html",
          website: "https://www.fourseasons.com/serengeti"
        },
        {
          id: "singita-serengeti-house",
          title: "Singita Serengeti House",
          image: "/images/singita-serengeti.png",
          description: "Private and luxurious, perfect for small groups seeking exclusivity and stunning scenery.",
          tripAdvisorUrl: "https://www.tripadvisor.com/Hotel_Review-g293751-d2070262-Reviews-Singita_Serengeti_House-Serengeti_National_Park.html",
          website: "https://singita.com/serengeti-house"
        },
        {
          id: "melia-serengeti-lodge",
          title: "Melia Serengeti Lodge",
          image: "/images/melia-serengeti.png",
          description: "Melia offers unmatched luxury with panoramic views over the Serengeti plains.",
          tripAdvisorUrl: "https://www.tripadvisor.com/Hotel_Review-g293751-d12565871-Reviews-Melia_Serengeti_Lodge-Serengeti_National_Park.html",
          website: "https://www.melia.com/serengeti"
        },
        {
  id: "kirawira-serengeti-camp",
  title: "Kirawira Serena Camp",
  image: "/images/kirawira-serena-camp.jpg",
  description: "A luxury tented camp that offers a classic safari experience with an elegant Edwardian ambiance.",
  tripAdvisorUrl: "https://www.tripadvisor.com/Hotel_Review-g293751-d523818-Reviews-Kirawira_Serena_Camp-Serengeti_National_Park.html",
  website: "https://www.serenahotels.com/kirawira"
},
{
  id: "andbeyond-grumeti-serengeti",
  title: "&Beyond Grumeti Serengeti Tented Camp",
  image: "/images/andbeyond-grumeti.png",
  description: "A chic, secluded retreat in the Western Serengeti offering luxury and exclusivity.",
  tripAdvisorUrl: "https://www.tripadvisor.com/Hotel_Review-g293751-d469549-Reviews-Grumeti_Serengeti_Tented_Camp-Serengeti_National_Park.html",
  website: "https://www.andbeyond.com/grumeti"
},

{
  id: "ronjo-camp",
  title: "Ronjo Camp",
  image: "/images/ronjo-camp.jpg",
  description: "An intimate tented camp with a focus on sustainability and an authentic Serengeti experience.",
  tripAdvisorUrl: "https://www.tripadvisor.com/Hotel_Review-g293751-d1234567-Reviews-Ronjo_Camp-Serengeti_National_Park.html",
  website: "https://ronjocamp.com"
},

        {
          id: "kubu-kubu-lodge",
          title: "Kubu Kubu Tented Lodge",
          image: "/images/kubu-kubu-lodge.png",
          description: "Authentic safari experience with modern luxuries, located in central Serengeti.",
          tripAdvisorUrl: "https://www.tripadvisor.com/Hotel_Review-g293751-d7933303-Reviews-Kubu_Kubu_Tented_Lodge-Serengeti_National_Park.html",
          website: "https://kubukubutentedcamp.com"
        }
      ]
    },
    kilimanjaro: {
      title: "Luxury Hotels Near Mount Kilimanjaro",
      subtitle: "Discover the best stays near Africa’s highest peak.",
      heroImage: "/images/Mount-Kilimanjaro.jpg",
      hotels: [
        {
          id: "kilimanjaro-mountain-resort",
          title: "Kilimanjaro Mountain Resort",
          image: "/images/Mount-Kilimanjaro.jpg",
          description: "An exclusive resort offering views of Mount Kilimanjaro and guided treks.",
          tripAdvisorUrl: "https://www.tripadvisor.com/Hotel_Review-g317084-d459315-Reviews-Kilimanjaro_Mountain_Resort-Kilimanjaro_Region.html",
          website: "https://www.kilimanjaroresort.com"
        },
        {
          id: "aishi-machame-hotel",
          title: "Aishi Machame Hotel",
          image: "/images/aishi-hotel.jpg",
          description: "Nestled in the foothills of Kilimanjaro, offering cozy accommodations and local experiences.",
          tripAdvisorUrl: "https://www.tripadvisor.com/Hotel_Review-g317084-d6504429-Reviews-Aishi_Machame_Hotel-Kilimanjaro_Region.html",
          website: "https://www.aishihotel.com"
        }
      ]
    }
  };

  const accommodation = accommodationData[id];

  if (!accommodation) {
    return <p>Accommodation category not found</p>;
  }

 const handleBookingSubmit = async (formData) => {
   try {
     const response = await axios.post("/api/bookings", formData);

     if (response.status === 200) {
       console.log("Booking submitted successfully:", formData);
       // You can also show a success message to the user here using something like SweetAlert
     } else {
       console.error("Error submitting booking:", response.data);
     }
   } catch (error) {
     console.error("Booking submission failed:", error);
     // You can display an error message here
   }
 };

  return (
    <div>
      <Header />
      
      <AccommodationHero
        title={accommodation.title}
        subtitle={accommodation.subtitle}
        image={accommodation.heroImage}
        buttonText="Book Your Adventure"
        onButtonClick={() => setIsBookingModalOpen(true)}
      />


      <AccommodationHotelsSection hotels={accommodation.hotels} />

      <TripAdvisorSection hotels={accommodation.hotels} />

      <AccommodationFAQ />  {/* New FAQ section */}
      <InquiryForm />  {/* Reuse Inquiry Form */}
      <Footer />

{/* Booking Modal */}
<BookingModal
        open={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        onSubmit={handleBookingSubmit}
      />

    </div>
  );
}
