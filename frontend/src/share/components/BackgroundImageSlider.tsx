import { getImagesAndPaths } from "@/utils/getImagesAndPaths";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Img = {
  name: number;
  path: string;
};

type BackgroundImageSliderProps = {
  fhotoCount: number;
  fileName: string;
  fileExtension: string;
  slideSwitchingSpeed: number;
};

export const BackgroundImageSlider = ({
  fhotoCount,
  fileName,
  fileExtension,
  slideSwitchingSpeed,
}: BackgroundImageSliderProps) => {
  const images = getImagesAndPaths(fhotoCount, fileName, fileExtension);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [image, setImage] = useState<Img>(images[currentImageIndex]);
  const fhotoCountRef = useRef(fhotoCount);

  const { name, path } = image;

  useEffect(() => {
    const interval = setInterval(() => {
      fhotoCountRef.current <= 7 ? fhotoCountRef.current : (fhotoCountRef.current = 1);

      setCurrentImageIndex(currentIndex => (currentIndex + 1) % images.length);
      setImage(images[currentImageIndex]);
    }, slideSwitchingSpeed);

    return () => clearInterval(interval);
  }, [currentImageIndex, image, images, slideSwitchingSpeed]);

  return (
    <>
      <Image
        priority
        fill
        quality={75}
        style={{ objectFit: "cover", opacity: 0.55 }}
        src={path}
        alt={`${name}`}
      />
    </>
  );
};
