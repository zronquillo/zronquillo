// Add each profile's URL below when it is ready. Entries with an empty `url` are not
// rendered anywhere on the site, so nothing appears until a real link is provided.
// Do not guess URLs.

export type SocialLink = {
  platform: string;
  label: string;
  url: string;
};

export const socialLinks: SocialLink[] = [
  { platform: "LinkedIn", label: "LinkedIn", url: "" },
  { platform: "Facebook", label: "Facebook", url: "" },
  { platform: "Instagram", label: "Instagram", url: "" },
  { platform: "TikTok", label: "TikTok", url: "" },
  // The GitHub profile already exists (this repository's owner).
  { platform: "GitHub", label: "GitHub", url: "https://github.com/zronquillo" },
];

export const activeSocialLinks = socialLinks.filter((s) => s.url.trim() !== "");
