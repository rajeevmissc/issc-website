// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const categories = ["All", "Everyday", "Workshops", "Entertainment"];

// const images = [
//   { src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0", category: "Everyday" },
//   { src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3", category: "Entertainment" },
//   { src: "https://images.unsplash.com/photo-1590650516494-0c8f89e4d4b5", category: "Workshops" },
//   { src: "https://images.unsplash.com/photo-1522205408827-9d67a360c87f", category: "Everyday" },
//   { src: "https://images.unsplash.com/photo-1581905764498-9069b7daafd3", category: "Entertainment" },
//   { src: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5", category: "Workshops" },
//   { src: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe", category: "Everyday" },
//   { src: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6", category: "Entertainment" },
//   { src: "https://images.unsplash.com/photo-1515168810366-3a40ba821f54", category: "Workshops" },
//   { src: "https://images.unsplash.com/photo-1505245208761-ba872912fac0", category: "Everyday" },
//   { src: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1", category: "Entertainment" },
//   { src: "https://images.unsplash.com/photo-1513377881919-97e7eb8ec377", category: "Workshops" },
//   { src: "https://images.unsplash.com/photo-1496346651079-6ca5cb67f42f", category: "Everyday" },
//   { src: "https://images.unsplash.com/photo-1531988042231-d39a9cc12a9a", category: "Entertainment" },
//   { src: "https://images.unsplash.com/photo-1521165949600-1a3c6106b6f9", category: "Workshops" },
//   { src: "https://images.unsplash.com/photo-1497366858526-0766cadbe8fa", category: "Everyday" },
//   { src: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e", category: "Entertainment" },
//   { src: "https://images.unsplash.com/photo-1544717305-2782549b5136", category: "Workshops" },
//   { src: "https://images.unsplash.com/photo-1507744923504-0e2829f5e6ac", category: "Everyday" },
//   { src: "https://images.unsplash.com/photo-1518546305927-5a555bb702c3", category: "Entertainment" },
//   { src: "https://images.unsplash.com/photo-1518770660439-4636190af475", category: "Workshops" },
//   { src: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2", category: "Everyday" },
//   { src: "https://images.unsplash.com/photo-1513775192371-0e25c12a6771", category: "Entertainment" },
//   { src: "https://images.unsplash.com/photo-1522202222205-88c1e4a3e17e", category: "Workshops" },
//   { src: "https://images.unsplash.com/photo-1508138221679-760a23a2285b", category: "Everyday" },
//   { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4", category: "Entertainment" },
//   { src: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e", category: "Workshops" },
//   { src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e", category: "Everyday" },
//   { src: "https://images.unsplash.com/photo-1521119989659-a83eee488004", category: "Entertainment" },
//   { src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2", category: "Workshops" },
//   { src: "https://images.unsplash.com/photo-1541558869434-28442bb47e92", category: "Everyday" },
//   { src: "https://images.unsplash.com/photo-1473187983305-f615310e7e91", category: "Entertainment" },
//   { src: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2", category: "Workshops" },
//   { src: "https://images.unsplash.com/photo-1531415074968-036ba1b575da", category: "Everyday" },
//   { src: "https://images.unsplash.com/photo-1495562569060-2eec283d3391", category: "Entertainment" },
//   { src: "https://images.unsplash.com/photo-1536253495911-2f1084277a7d", category: "Workshops" },
//   { src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438", category: "Everyday" },
// ];




// export default function Gallery() {
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [selectedImage, setSelectedImage] = useState(null);
//   const navigate = useNavigate();

//   const filteredImages =
//     selectedCategory === "All"
//       ? images
//       : images.filter((img) => img.category === selectedCategory);

//   return (
//     <div className="mx-auto p-6 bg-gray-100 text-center py-12">
//       <h2 className="text-3xl font-bold text-center mb-6">Life at ISSC</h2>

//       {/* Category Filters */}
//       <div className="flex justify-center space-x-6 mb-6 border-b pb-2">
//         {categories.map((category) => (
//           <button
//             key={category}
//             onClick={() => setSelectedCategory(category)}
//             className={`${
//               selectedCategory === category
//                 ? "text-red-500 border-b-2 border-red-500"
//                 : "text-gray-600"
//             } px-3 py-1 text-lg`}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       {/* Image Grid */}
//       <div className="flex justify-center">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl">
//           {filteredImages.slice(0, 6).map((img, index) => (
//             <div
//               key={index}
//               className="overflow-hidden rounded-lg shadow-lg cursor-pointer"
//               onClick={() => setSelectedImage(img.src)}
//             >
//               <img
//                 src={img.src}
//                 alt={`Gallery ${index}`}
//                 className="w-full h-60 object-cover transition-transform duration-200 hover:scale-105"
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Show More Button */}
//       <div className="mt-6">
//         <button
//           onClick={() => navigate(`/gallery/${selectedCategory}`)}
//            className="w-64 h-12  border border-red-500 font-bold bg-red-500 text-white rounded-md hover:bg-gray-200 hover:text-gray-900 transition transform hover:scale-105 shadow-md"
//         >
//           Show More
//         </button>
//       </div>

//       {/* Culture Page Link */}
//       <div className="mt-8 text-lg text-gray-700">
//         <p>
//           For more, explore our culture. Visit our{" "}
//           <a href="/culture" className="text-red-500 underline">
//             Culture Page
//           </a>
//           .
//         </p>
//       </div>

//       {/* Modal for Enlarged Image */}
//       {selectedImage && (
//         <div
//           className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
//           onClick={() => setSelectedImage(null)}
//         >
//           <div className="relative p-4">
//             <button
//               className="absolute top-4 right-4 bg-white text-black px-2 py-1 rounded-full"
//               onClick={() => setSelectedImage(null)}
//             >
//               ✕
//             </button>
//             <img
//               src={selectedImage}
//               alt="Enlarged"
//               className="max-w-full max-h-[90vh] rounded-lg shadow-xl"
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }








import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { PlayCircle } from "lucide-react";

// ---- Gallery Items ----
const mediaItems = [
  { type: "image", src: "https://prodevstorage01.blob.core.windows.net/isscwebsite/daily1.jpg" },
  { type: "image", src: "https://prodevstorage01.blob.core.windows.net/isscwebsite/image1.jpeg" },
  { type: "image", src: "https://prodevstorage01.blob.core.windows.net/isscwebsite/image2.jpeg" },
  { type: "image", src: "https://prodevstorage01.blob.core.windows.net/isscwebsite/image3.jpeg" },
  { type: "image", src: "https://prodevstorage01.blob.core.windows.net/isscwebsite/offsite1.jpeg" },
  { type: "image", src: "https://prodevstorage01.blob.core.windows.net/isscwebsite/offsite2.jpeg" },
  { type: "image", src: "https://prodevstorage01.blob.core.windows.net/isscwebsite/offsite3.jpeg" },
  { type: "image", src: "https://prodevstorage01.blob.core.windows.net/isscwebsite/offsite4.jpeg" },
  { type: "image", src: "https://prodevstorage01.blob.core.windows.net/isscwebsite/offsite5.jpeg" },
  { type: "image", src: "https://prodevstorage01.blob.core.windows.net/isscwebsite/offsite6.jpeg" },
  { type: "video", src: "https://prodevstorage01.blob.core.windows.net/isscwebsite/dailyv1.MOV" },
  { type: "video", src: "https://prodevstorage01.blob.core.windows.net/isscwebsite/dailyv2.MOV" },
  { type: "video", src: "https://prodevstorage01.blob.core.windows.net/isscwebsite/dailyv3.MOV" },
  { type: "video", src: "https://prodevstorage01.blob.core.windows.net/isscwebsite/dailyv4.MOV" },
  { type: "video", src: "https://prodevstorage01.blob.core.windows.net/isscwebsite/dailyv5.MOV" },
  { type: "video", src: "https://prodevstorage01.blob.core.windows.net/isscwebsite/dailyv6.MOV" },
  { type: "video", src: "https://prodevstorage01.blob.core.windows.net/isscwebsite/dailyv7.MOV" },
  { type: "video", src: "https://prodevstorage01.blob.core.windows.net/isscwebsite/dailyv9.MOV" },
  { type: "video", src: "https://prodevstorage01.blob.core.windows.net/isscwebsite/dailyv10.MOV" },
  { type: "video", src: "https://prodevstorage01.blob.core.windows.net/isscwebsite/dailyv11.mp4" },
];

export default function Gallery() {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="mx-auto p-6 bg-gray-100 text-center py-12">
      <h2 className="text-3xl font-bold text-center mb-6">Life at ISSC</h2>

      {/* Media Grid */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl">
          {mediaItems.slice(0, 9).map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group"
              onClick={() => setSelectedMedia(item)}
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={`Gallery ${index}`}
                  className="w-full h-60 object-cover transition-transform duration-200 group-hover:scale-105"
                />
              ) : (
                <div className="relative w-full h-60">
                  <video
                    src={item.src}
                    className="w-full h-full object-cover rounded-lg"
                    muted
                    loop
                    playsInline
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition">
                    <PlayCircle size={48} className="text-white" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Show More Button */}
      <div className="mt-6">
        <button
          onClick={() => navigate("/gallery")}
          className="w-64 h-12 border border-red-500 font-bold bg-red-500 text-white rounded-md hover:bg-gray-200 hover:text-gray-900 transition transform hover:scale-105 shadow-md"
        >
          Show More
        </button>
      </div>

      {/* Modal for Enlarged Media */}
      {selectedMedia && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
          onClick={() => setSelectedMedia(null)}
        >
          <div className="relative p-4">
            <button
              className="absolute top-4 right-4 bg-white text-black px-2 py-1 rounded-full"
              onClick={() => setSelectedMedia(null)}
            >
              ✕
            </button>
            {selectedMedia.type === "image" ? (
              <img
                src={selectedMedia.src}
                alt="Enlarged"
                className="max-w-full max-h-[90vh] rounded-lg shadow-xl"
              />
            ) : (
              <video
                src={selectedMedia.src}
                controls
                autoPlay
                className="max-w-full max-h-[90vh] rounded-lg shadow-xl"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
