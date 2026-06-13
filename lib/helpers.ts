// lib/helpers.ts

type MetafieldEdge = {
  node?: {
    key?: string;
    value?: string;
  };
};

type Metafields = {
  edges: MetafieldEdge[];
};

type MetafieldData = {
  metafields?: Metafields;
};

export const metafield = (data: MetafieldData | null | undefined, key: string) => {
  const jsonResponse = data?.metafields?.edges?.find(
    (item) => item?.node?.key === key
  )?.node?.value;

  if (!jsonResponse) return undefined;

  try {
    const convert: unknown = JSON.parse(jsonResponse);

    // safe extraction
    const value =
      (convert as any)?.children?.[0]?.children?.[0]?.value;

    return typeof value === "string" ? value : undefined;
  } catch {
    return undefined;
  }
};

type StrapiImageAttributes = {
  url?: string;
};

type StrapiImage = {
  attributes?: StrapiImageAttributes;
  data?: {
    attributes?: StrapiImageAttributes;
  };
};

export function showImage(item: StrapiImage | null | undefined, loop?: boolean) {
  if (!item) return "";

  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";

  const url = loop
    ? item?.attributes?.url
    : item?.data?.attributes?.url;

  return url ? `${baseUrl}${url}` : "";
}

export const toFixed = (num: number | string) => {
  return Number(num).toFixed(2);
};
