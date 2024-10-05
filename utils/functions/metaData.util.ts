import type { Metadata } from "next";
import {
  DEFAULT_OG_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  DEFAULT_OG_TITLE,
} from "../constants/metaData.const";
import { BASE_URL } from "../constants/url.const";

interface generateMetadataProps {
  title?: string;
  description?: string;
  asPath?: string;
  ogImage?: string;
}

export const getMetadata = (metadataProps?: generateMetadataProps) => {
  const { title, description, asPath, ogImage } = metadataProps || {};

  const TITLE = title ?? DEFAULT_OG_TITLE;
  const DESCRIPTION = description ?? DEFAULT_OG_DESCRIPTION;
  const PAGE_URL = asPath ? BASE_URL + asPath : BASE_URL;
  const OG_IMAGE = ogImage ?? DEFAULT_OG_IMAGE;

  const metadata: Metadata = {
    metadataBase: new URL(BASE_URL),
    title: TITLE,
    description: DESCRIPTION,
    openGraph: {
      title: TITLE,
      description: DESCRIPTION,
      siteName: "너 진짜 T야?",
      locale: "ko_KR",
      type: "website",
      url: PAGE_URL,
      images: {
        url: OG_IMAGE,
      },
    },
  };

  return metadata;
};
