import { index } from "drizzle-orm/mysql-core";
// import Image from "next/image";
import Link from "next/link";

const images = [
  "https://utfs.io/f/1ed71567-623f-46e2-8a69-2b9e7672cd0d-jlo1ag.jpeg",
  "https://utfs.io/f/3507ff43-2537-456f-9abd-ca9851609593-heaxjd.jpg",
  "https://utfs.io/f/54680781-ffa4-4024-8816-df1e6e0dd8c0-5tq1je.jpg",
  "https://utfs.io/f/c75ecfe8-1f0f-4a4e-b1df-673c4373202a-aqv8wg._AC_UL400_.jpg",
];

const dummyImages = images.map((url, index) => ({
  id: index+1,
  url,
}))

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {dummyImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt={image.url}/>
          </div>
        ))}
      </div>
    </main>
  );
}
