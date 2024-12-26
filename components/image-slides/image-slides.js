"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import classes from "./image-slides.module.css";

import theSubstance from "@/assets/the-substance.png";
import alien from "@/assets/alien.jpg";
import deadpoolWolverine from "@/assets/deadpool-wolverine.jpg";
import maxine from "@/assets/maxine.jpg";
import nightSwim from "@/assets/night-swim.jpg";
import wolfs from "@/assets/wolfs.jpg";

const images = [
  { image: theSubstance, alt: "The Substance movie poster" },
  { image: alien, alt: "Alien movie poster" },
  { image: deadpoolWolverine, alt: "Deadpool vs Wolverine movie poster" },
  { image: maxine, alt: "Maxine movie poster" },
  { image: nightSwim, alt: "Night Swim movie poster" },
  { image: wolfs, alt: "Wolfs movie poster" },
];

function ImageSlides() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? [classes.active] : ""}
          alt={image.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      ))}
    </div>
  );
}

export default ImageSlides;
