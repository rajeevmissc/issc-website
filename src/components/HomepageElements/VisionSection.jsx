import React from "react";
import { ArrowRight } from "lucide-react";
import image_vision from "../../Assets/Images/image_vision.webp";
import image_goal from "../../Assets/Images/image_goal.webp";
import { Heading4, Heading2, BodyText} from "../../utils/Typography";
const VisionSection = () => {
  return (
    <div>
    <div className="max-w-7xl mx-auto px-8 py-0 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      {/* Left Side - Text Content */}
      <div>
        <Heading4 className="text-blue-500 font-bold text-lg">OUR VISION</Heading4>
        <Heading2 className="mt-2">
          To upscale your business to the next level
        </Heading2>
        <BodyText className="mt-4">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore.
        </BodyText>
        
        <div className="mt-6 space-y-4">
          {visionPoints.map((point, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className="bg-red-400 text-white p-2 rounded-full">
                <ArrowRight size={20} />
              </div>
              <BodyText>{point}</BodyText>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - Image */}
      <div>
        <img 
          src={image_vision}
          alt="Vision Image" 
          className="w-full rounded-lg shadow-lg"
        />
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      {/* Left Side - Text Content */}
      <div>
        <img 
          src={image_goal} 
          alt="Vision Image" 
          className="w-full rounded-lg shadow-lg"
        />
      </div>
      {/* Right Side - Image */}
      <div>
        <Heading4 className="text-blue-500 font-bold text-lg">OUR VISION</Heading4>
        <Heading2 className="mt-2">
          To upscale your business to the next level
        </Heading2>
        <BodyText className="mt-4">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore.
        </BodyText>
        
        <div className="mt-6 space-y-4">
          {visionPoints.map((point, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className="bg-red-400 text-white p-2 rounded-full">
                <ArrowRight size={20} />
              </div>
              <BodyText>{point}</BodyText>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

const visionPoints = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
];

export default VisionSection;
