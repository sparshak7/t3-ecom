import { index } from "drizzle-orm/mysql-core";
// import Image from "next/image";
import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, {desc}) => desc(model.id),
  })
  return (
    <main>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {images.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt={image.name}/>
            <h1>{image.name}</h1>
          </div>
        ))}
      </div>
    </main>
  );
}
