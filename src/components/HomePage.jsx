// import { ImageWithFallback } from './figma/ImageWithFallback';
// import { ArrowRight } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const HomePage = () => {
//   const featuredWorks = [
//     {
//       id: 1,
//       title: 'Portrait Sessions',
//       category: 'Portraits',
//       image: 'https://images.unsplash.com/photo-1594171549465-a28ba0220a1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc1NTU5ODc1Mnww&ixlib=rb-4.1.0&q=80&w=1080',
//     },
//     {
//       id: 2,
//       title: 'Wedding Photography',
//       category: 'Weddings',
//       image: 'https://images.unsplash.com/photo-1722872112546-936593441be8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaHklMjBlbGVnYW50fGVufDF8fHx8MTc1NTU3Mjk2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
//     },
//     {
//       id: 3,
//       title: 'Fashion Photography',
//       category: 'Fashion',
//       image: 'https://images.unsplash.com/photo-1721003080968-9923474ad739?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcGhvdG9ncmFwaHklMjBzdHVkaW98ZW58MXx8fHwxNzU1NTcyOTY3fDA&ixlib=rb-4.1.0&q=80&w=1080',
//     },
//   ];

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <section className="relative h-screen flex items-center justify-center bg-black">
//         <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
//         <img
//           src="https://images.unsplash.com/photo-1594171549465-a28ba0220a1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc1NTU5ODc1Mnww&ixlib=rb-4.1.0&q=80&w=1080"
//           alt="Professional Photography"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//         <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
//           <h1 className="text-5xl md:text-7xl mb-6 tracking-wider">
//             CAPTURING
//             <span className="block text-[#c89f73]">MOMENTS</span>
//           </h1>
//           <p className="text-xl md:text-2xl mb-8 tracking-wide opacity-90">
//             Professional Photography that tells your story
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link
//               to='/galleries'
//               className="bg-[#c89f73] hover:bg-[#b8941f] text-black px-8 py-3 text-lg tracking-wide"
//             >
//               View Galleries
//               <ArrowRight className="ml-2 h-5 w-5" />
//             </Link>
//             <Link
//               to='/contact'
//               variant="outline"
//               className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg tracking-wide"
//             >
//               Get in Touch
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Featured Work Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl mb-6 tracking-wider">
//               FEATURED WORK
//             </h2>
//             <div className="w-24 h-1 bg-[#c89f73] mx-auto mb-6"></div>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto tracking-wide">
//               Explore my passion for photography through these carefully selected pieces
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {featuredWorks.map((work) => (
//               <Link
//                 key={work.id}
//                 className="group cursor-pointer overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300"
//                 to='/galleries'
//               >
//                 <div className="relative overflow-hidden">
//                   <ImageWithFallback
//                     src={work.image}
//                     alt={work.title}
//                     className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
//                   />
//                   <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
//                 </div>
//                 <div className="p-6">
//                   <p className="text-[#c89f73] text-sm tracking-wider mb-2">
//                     {work.category}
//                   </p>
//                   <h3 className="text-xl tracking-wide">
//                     {work.title}
//                   </h3>
//                 </div>
//               </Link>
//             ))}
//           </div>

//           <div className="text-center mt-12">
//             <Link
//               to='/galleries'
//               variant="outline"
//               className="border-black text-black hover:bg-black hover:text-white px-8 py-3 text-lg tracking-wide"
//             >
//               View All Galleries
//               <ArrowRight className="ml-2 h-5 w-5" />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action Section */}
//       <section className="py-20 bg-black text-white">
//         <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
//           <h2 className="text-4xl md:text-5xl mb-6 tracking-wider">
//             LET'S CREATE SOMETHING
//             <span className="block text-[#c89f73]">BEAUTIFUL</span>
//           </h2>
//           <p className="text-xl mb-8 opacity-90 tracking-wide">
//             Ready to capture your special moments? Let's discuss your vision.
//           </p>
//           <Link
//             to='/contact'
//             className="bg-[#c89f73] hover:bg-[#b8941f] text-black px-8 py-3 text-lg tracking-wide"
//           >
//             Start Your Project
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HomePage;

import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const featuredWorks = [
    {
      id: 1,
      title: "Portrait Sessions",
      category: "Portraits",
      image:
        "https://images.unsplash.com/photo-1594171549465-a28ba0220a1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
      id: 2,
      title: "Wedding Photography",
      category: "Weddings",
      image:
        "https://images.unsplash.com/photo-1722872112546-936593441be8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
    {
      id: 3,
      title: "Fashion Photography",
      category: "Fashion",
      image:
        "https://images.unsplash.com/photo-1721003080968-9923474ad739?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    },
  ];

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <img
          src="https://images.unsplash.com/photo-1594171549465-a28ba0220a1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
          alt="Professional Photography"
          className="hero-image"
        />
        <div className="hero-content">
          <h1 className="hero-title">
            CAPTURING <span className="highlight">MOMENTS</span>
          </h1>
          <p className="hero-subtitle">
            Professional Photography that tells your story
          </p>
          <div className="hero-buttons">
            <Link to="/galleries" className="btn primary-btn">
              View Galleries →
            </Link>
            <Link to="/contact" className="btn outline-btn">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="featured">
        <div className="section-header">
          <h2 className="section-title">FEATURED WORK</h2>
          <div className="divider"></div>
          <p className="section-text">
            Explore my passion for photography through these carefully selected
            pieces
          </p>
        </div>

        <div className="featured-grid">
          {featuredWorks.map((work) => (
            <Link key={work.id} className="work-card" to="/galleries">
              <div className="work-image-wrapper">
                <img src={work.image} alt={work.title} className="work-image" />
                <div className="work-overlay"></div>
              </div>
              <div className="work-content">
                <p className="work-category">{work.category}</p>
                <h3 className="work-title">{work.title}</h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="button-center">
          <Link to="/galleries" className="btn outline-btn">
            View All Galleries →
          </Link>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta">
        <h2 className="cta-title">
          LET'S CREATE SOMETHING{" "}
          <span className="highlight">BEAUTIFUL</span>
        </h2>
        <p className="cta-text">
          Ready to capture your special moments? Let's discuss your vision.
        </p>
        <Link to="/contact" className="btn primary-btn">
          Start Your Project
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
