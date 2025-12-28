import { MetadataRoute } from "next";
import { SITEMAP_QUERY } from "../../sanity/lib/queries";
import { client } from "../sanity/client";

type ChangeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

export const revalidate = 0;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const paths =
      await client.fetch<{ href: string; _updatedAt: string }[]>(SITEMAP_QUERY);

    const baseUrl =
      process.env.VERCEL && process.env.VERCEL_ENV === "production"
        ? "https://auradiagnostics.co.in/"
        : process.env.VERCEL_URL
          ? `https://${process.env.VERCEL_URL}`
          : "http://localhost:3000";

    const dynamicPaths: MetadataRoute.Sitemap = paths.map((path) => ({
      url: new URL(path.href, baseUrl).toString(),
      lastModified: new Date(path._updatedAt),
      changeFrequency: "weekly" as ChangeFrequency,
      priority: 1,
    }));

    const staticUrls = [
      "/",

      "/3d-follicle-monitoring-with-doppler-in-girinagar-bangalore",

      "/3d-baseline-scan-in-girinagar-bangalore",

      "/3d-follicle-monitoring-with-doppler-in-girinagar-bangalore",

      "/3d-pelvis-scan-in-girinagar-bangalore",
      "/about-us",
      "/advanced-usg-test-in-girinagar-bangalore",
      "/amniocentesis-ultrasound-test-in-girinagar-bangalore",
      "/biochemistry-blood-tests-in-girinagar-bangalore-with-free-home-visit",
      "/blog",
      "/blood-tests-in-girinagar-bangalore-with-free-home-visit",
      "/body-fluid-aspiration-test-in-girinagar-bangalore",
      "/cardiology-consultation-in-girinagar-bangalore",
      "/carotid-doppler-scan-in-girinagar-bangalore",
      "/contact-us",
      "/doppler-scan-in-girinagar-bangalore",
      "/fatty-liver-quantification-scan-in-girinagar-bangalore",
      "/fetal-echo-test-in-girinagar-bangalore",
      "/fetal-urosonogram-test-in-girinagar-bangalore",
      "/fnac-test-in-girinagar-bangalore",
      "/growth-scan-with-doppler-in-girinagar-bangalore",
      "/hematology-blood-tests-in-girinagar-bangalore-with-free-home-visit",
      "/infertility-scan-test-in-girinagar-bangalore",
      "/liver-elastography-scan-in-girinagar-bangalore",
      "/luteal-phase-scan-in-girinagar-bangalore",
      "/microbiology-blood-tests-in-girinagar-bangalore-with-free-home-visit",
      "/musculoskeletal-scan-in-girinagar-bangalore",
      "/nephrology-consultation-in-girinagar-bangalore",
      "/obstetrics-scan-in-girinagar-bangalore",
      "/pregnancy-3d-and-4d-fetal-scans-in-girinagar-bangalore",
      "/pregnancy-anomaly-scan-in-girinagar-bangalore",
      "/pregnancy-dating-scan-in-girinagar-bangalore",
      "/pregnancy-nt-scan-in-girinagar-bangalore",
      "/pregnancy-scans-in-girinagar-bangalore",
      "/renal-doppler-scan-in-girinagar-bangalore",
      "/saline-infusion-sonohysterosalpingography-test-in-girinagar-bangalore",
      "/serology-blood-tests-in-girinagar-bangalore-with-free-home-visit",
      "/soft-tissue-scans-in-girinagar-bangalore",
      "/tumor-markers-blood-tests-in-girinagar-bangalore-with-free-home-visit",
      "/upper-and-lower-limb-doppler-scan-in-girinagar-bangalore",
      "/urology-consultation-in-girinagar-bangalore",
      "/usg-guided-procedure-in-girinagar-bangalore",
      "/uterine-biophysical-profile-scan-in-girinagar-bangalore",
      "/whole-body-doppler-scan-in-girinagar-bangalore",

      "/other-services",
    ].map((path) => ({
      url: new URL(path, baseUrl).toString(),
      lastModified: new Date(),
      changeFrequency: "weekly" as ChangeFrequency,
      priority: 0.8,
    }));

    return [...dynamicPaths, ...staticUrls];
  } catch (error) {
    console.error("Failed to generate sitemap:", error);
    return [];
  }
}
