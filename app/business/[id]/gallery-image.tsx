// components/GalleryImage.tsx
interface GalleryImageProps {
  src: string;
  alt: string;
}

const GalleryImage: React.FC<GalleryImageProps> = ({ src, alt }) => {
  return (
    <div className="relative">
      <img
        src={src}
        alt={alt}
        className="w-full h-64 object-cover"
      />
    </div>
  );
};

export default GalleryImage;
