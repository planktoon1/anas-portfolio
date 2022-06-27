import type { NextPage } from "next";
import Image from "next/image";
import { Test } from "../components/shared/Test";
import { PageGrid } from "../components/layout/PageGrid/PageGrid";
import { Txt, TxtVariant } from "../components/shared/Text";
import { useTranslation } from "react-i18next";
import { ImagePreview } from "../components/shared/ImagePreview";
import Link from "next/link";

const Home: NextPage = () => {
  const { t } = useTranslation();

  return (
    <PageGrid className="!my-0 !pt-0">
      <div className="relative h-64 col-span-4 -mx-4">
        <Image
          src="/landingbanner.png"
          alt="Profile banner picture"
          layout="fill"
          objectFit="cover"
        />
        <div className="bg-gradient-to-tr from-background-1 absolute inset-0" />
        <div className="absolute inset-0 p-4 flex justify-end flex-col">
          <Txt variant={TxtVariant.H1} className="text-text">
            {t("about.bannerTitle")}
          </Txt>
          <Txt variant={TxtVariant.H3} className="text-text">
            {t("about.bannerSubtitle")}
          </Txt>
        </div>
      </div>
      <Txt variant={TxtVariant.H2} className="mt-8">
        {t("Hello")}!
      </Txt>
      <Txt className="col-span-4">{t("about.intro")}</Txt>
      <Txt className="col-span-4">
        {t("about.checkoutMyWork") + " "}
        <Link href={"/projects"}>
          <a>
            <Txt variant={TxtVariant.Anchor}>{t("here")}</Txt>
          </a>
        </Link>{" "}
        {t("about.conctactMe") + " "}
        <Link href={"/contact"}>
          <a>
            <Txt variant={TxtVariant.Anchor}>{t("here")}</Txt>
          </a>
        </Link>
        .
      </Txt>
    </PageGrid>
  );
};

export default Home;
