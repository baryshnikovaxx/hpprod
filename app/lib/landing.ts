export type LandingService = "webinar" | "conference";
export type LandingRegion = "all" | "moscow" | "spb" | "turkey";
export type LandingVariant = "no_price" | "from_price";
export function landingOptions(params: Record<string, string | string[] | undefined>) {
  const region: LandingRegion = ["moscow", "spb", "turkey"].includes(String(params.region)) ? params.region as LandingRegion : "all";
  const variant: LandingVariant = params.price === "from" ? "from_price" : "no_price";
  return { region, variant };
}
export const landingRegions: Record<LandingRegion, string> = {
  all: "Москва · Санкт-Петербург · Турция",
  moscow: "Москва и Московская область",
  spb: "Санкт-Петербург и Ленинградская область",
  turkey: "Турция · общаемся на русском",
};
