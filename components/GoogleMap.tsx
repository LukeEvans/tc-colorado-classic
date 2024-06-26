import React from "react";

interface GoogleMapProps {
  address: string;
}

export default function GoogleMap({ address }: GoogleMapProps) {
  const encodedAddress = encodeURIComponent(address);
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${encodedAddress}`;

  return (
    <iframe
      width="100%"
      height="400"
      style={{ border: 0 }}
      src={mapSrc}
      allowFullScreen
    ></iframe>
  );
}
