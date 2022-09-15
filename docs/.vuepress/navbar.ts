import type { NavbarConfig } from "@vuepress/theme-default";


type Texts = {
  flight_manual: {
    text: string,
    link: string,
  };
  our_packages: {
    text: string,
    link: string,
  };
  packages_repo: {
    text: string, 
    link: string,
  };
  about: {
    text: string,
    link: string,
  };
};

export const navbar_en = define_navbar({
  flight_manual: {
    text: "User Guide",
    link: "/user_guide/index.md"
  },
  our_packages: {
    text: "Packages Wiki",
    link: "/packages_wiki/index.md"
  },
  packages_repo: {
    text: "Community Packages",
    link: "/community_packages/index.md"
  },
  about: {
    text: "About Us",
    link: "/about/index.md"
  }
});

function define_navbar(t: Texts): NavbarConfig {
  return [
    {
      text: t.flight_manual.text,
      link: t.flight_manual.link,
    },
    {
      text: t.our_packages.text,
      link: t.our_packages.link,
    },
    {
      text: t.packages_repo.text,
      link: t.packages_repo.link,
    },
    {
      text: t.about.text,
      link: t.about.link,
    }
  ];
}
