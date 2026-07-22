import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
          {mediaItems.map((item, index) => (
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
                  {/* Play Icon Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition">
                    <PlayCircle size={48} className="text-white" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Culture Page Link */}
      <div className="mt-8 text-lg text-gray-700">
        <p>
          For more, explore our culture. Visit our{" "}
          <a href="/culture" className="text-red-500 underline">
            Culture Page
          </a>
          .
        </p>
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
