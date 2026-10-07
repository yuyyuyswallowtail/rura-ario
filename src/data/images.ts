import type { ImageAsset } from "./types";

// Central, deterministic image config. Photographer metadata is unknown,
// so every credit reads "Photo via Unsplash". Swap an id here to change an image everywhere.
const url = (id: string, w: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;
const CREDIT = "Photo via Unsplash";
const mk = (
  id: string,
  alt: string,
  caption: string,
  w = 1800,
): ImageAsset => ({
  src: url(id, w),
  alt,
  caption,
  credit: CREDIT,
});
const person = (id: string): ImageAsset =>
  mk(
    id,
    "Stock portrait used as a fictional team member",
    "Fictional team member, stock portrait",
    900,
  );

export const IMG = {
  hero: mk(
    "photo-1668198991378-59ee7fdd264a",
    "Researcher working at an instrument",
    "Instrument calibration",
    900,
  ),
  worker: mk(
    "photo-1504917595217-d4dc5ebe6122",
    "Industrial worker in protective gear",
    "Operations on an industrial line",
  ),
  power: mk(
    "photo-1473341304170-971dccb5ac1e",
    "Electricity pylons across a landscape",
    "Power transmission",
  ),
  lab: mk(
    "photo-1581092160562-40aa08e78837",
    "Engineers working with equipment in a laboratory",
    "Engineering laboratory",
  ),
  lab2: mk(
    "photo-1581094794329-c8112a89af12",
    "Laboratory bench with analytical equipment",
    "Analytical bench work",
  ),
  lab3: mk(
    "photo-1532094349884-543bc11b234d",
    "Glassware and samples in a laboratory",
    "Sample preparation",
  ),
  concrete: mk(
    "photo-1590069261209-f8e9b8642343",
    "Concrete infrastructure structure",
    "Concrete infrastructure",
  ),
  plant: mk(
    "photo-1513828583688-c52646db42da",
    "Industrial processing plant under open sky",
    "Industrial demonstration facility",
  ),
  wind: mk(
    "photo-1466611653911-95081537e5b7",
    "Wind turbines on a hillside",
    "Wind energy",
  ),
  solar: mk(
    "photo-1509391366360-2e959784a276",
    "Solar panels in a field",
    "Renewable generation",
  ),
  factory: mk(
    "photo-1565008447742-97f6f38c985c",
    "Interior of a heavy-industry manufacturing hall",
    "Industrial manufacturing floor",
  ),
  construction: mk(
    "photo-1541888946425-d81bb19240f5",
    "Construction site with structural frame",
    "Construction and infrastructure",
  ),
  crane: mk(
    "photo-1621905251189-08b45d6a269e",
    "Cranes at a construction site",
    "Heavy construction",
  ),
  tower: mk(
    "photo-1486406146926-c627a92ad1ab",
    "Modern concrete and glass building",
    "Built environment",
  ),
  site: mk(
    "photo-1504328345606-18bbc8c9d7d1",
    "Building site with materials and machinery",
    "Materials on site",
  ),
  builder: mk(
    "photo-1587293852726-70cdb56c2866",
    "Construction worker on site",
    "Work on site",
  ),
  p: [
    "photo-1494790108377-be9c29b29330",
    "photo-1500648767791-00dcc994a43e",
    "photo-1438761681033-6461ffad8d80",
    "photo-1507003211169-0a1dd7228f2d",
    "photo-1472099645785-5658abf4ff4e",
    "photo-1534528741775-53994a69daeb",
    "photo-1506794778202-cad84cf45f1d",
    "photo-1544005313-94ddf0286df2",
    "photo-1531427186611-ecfd6d936c79",
    "photo-1489424731084-a5d8b219a5bb",
    "photo-1463453091185-61582044d556",
    "photo-1519085360753-af0119f7cbe7",
    "photo-1580489944761-15a19d654956",
    "photo-1573496359142-b8d87734a5a2",
    "photo-1560250097-0b93528c311a",
    "photo-1557862921-37829c790f19",
    "photo-1521119989659-a83eee488004",
    "photo-1524504388940-b1c1722653e1",
  ].map(person),
};
