// src/app/plants/[id]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import Plants from "@/app/constants";

interface Plant {
  id: string;
  plantName: string;
  plantImage: string;
  occasion: string;
  description: string;
  suitableWeatherType: string;
  careInstructions: string;
  price: string;
}

interface Params {
  id: string;
}

const fetchPlant = (id: string): Plant | undefined => {
  const allPlants = Object.values(Plants).flat();
  return allPlants.find((plant) => plant.id === id);
};

export async function generateStaticParams() {
  const allPlants = Object.values(Plants).flat();
  return allPlants.map((plant) => ({ id: plant.id }));
}

interface PlantDetailProps {
  params: Params;
}

export default function PlantDetail({ params }: PlantDetailProps) {
  const { id } = params;
  const plant = fetchPlant(id);

  if (!plant) {
    return notFound();
  }

  return (
    <div>
      <h1>{plant.plantName}</h1>
      <Image
        src={plant.plantImage}
        alt={plant.plantName}
        width={500}
        height={500}
      />
      <p>
        <strong>Occasion:</strong> {plant.occasion}
      </p>
      <p>
        <strong>Description:</strong> {plant.description}
      </p>
      <p>
        <strong>Suitable Weather:</strong> {plant.suitableWeatherType}
      </p>
      <p>
        <strong>Care Instructions:</strong> {plant.careInstructions}
      </p>
      <p>
        <strong>Price:</strong> {plant.price}
      </p>
    </div>
  );
}
