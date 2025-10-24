import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://royalfleet.in"

  const routes = [
    "",
    "/booking",
    "/fleet",
    "/contact",
    "/about",
    "/terms",
    "/privacy",
  ]

  // Example: dynamic pages (if you have blog posts or cars fetched from API)
  // const cars = await fetch(`${baseUrl}/api/cars`).then(res => res.json())
  // const carRoutes = cars.map((car) => ({
  //   url: `${baseUrl}/cars/${car.slug}`,
  //   lastModified: new Date(car.updatedAt),
  // }))

  const staticRoutes = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }))

  return [...staticRoutes]
}
