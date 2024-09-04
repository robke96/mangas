"use client";
import React, { useState } from 'react'
import Image from 'next/image';
import ReactCardFlip from 'react-card-flip';

interface FlipCardProps {
    imageClassName?: string | undefined
}

const FlipCard = ({ imageClassName }: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  }

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <Image priority onClick={flipCard} className={imageClassName} src="/img/profile_pic.webp" alt="Mangas Profile picture" height={200} width={200} />
        <Image onClick={flipCard} className={imageClassName} src="/img/mango.webp" alt="Mangas Profile picture" height={200} width={200} />
  </ReactCardFlip>
  )
}

export default FlipCard