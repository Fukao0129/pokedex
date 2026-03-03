import { useState } from "react";
import fallbackImage from "../assets/images/pokeball.png";

const DEFAULT_FALLBACK_IMAGE = fallbackImage;

interface BaseImageProps {
  src: string | null;
  alt: string;
  className?: string;
  width?: string | number;
  height?: string | number;
  onClick?: () => void;
}

export default function BaseImage({
  src,
  alt,
  className,
  onClick,
  width,
  height,
  ...props
}: BaseImageProps) {
  const [hasError, setHasError] = useState(false);

  /** 読み込みエラー時 */
  const handleError = () => {
    setHasError(true);
  };

  const imageSource = !src || hasError ? DEFAULT_FALLBACK_IMAGE : src;

  return (
    <img
      src={imageSource}
      alt={alt}
      onError={handleError}
      className={className}
      onClick={onClick}
      width={width}
      height={height}
      {...props}
    />
  );
}
