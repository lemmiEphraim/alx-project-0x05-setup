import ImageCard from "@/components/common/ImageCard";
import { ImageProps } from "@/interfaces";
import { useState } from "react";

const Home: React.FC = () => {
  const [prompt, setPrompt] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [generatedImages, setGeneratedImages] = useState<ImageProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleGenerateImage = async () => {
    console.log("Generating Image");
    console.log(process.env.NEXT_PUBLIC_GPT_API_KEY);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      {/* ... rest of your component code remains the same ... */}
    </div>
  );
};

export default Home;
