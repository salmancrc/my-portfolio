import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@salmancrc",
    icon: Icons.gitHub,
    link: "https://github.com/salmancrc",
  },
  {
    name: "LinkedIn",
    username: "Salman Ahmad",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/salmanahmad123/",
  },
  {
    name: "Twitter",
    username: "@salmancrc",
    icon: Icons.twitter,
    link: "https://twitter.com",
  },
  {
    name: "Gmail",
    username: "Muhammad salman",
    icon: Icons.gmail,
    link: "mailto:msahmad9876@gmail.com",
  },
];
