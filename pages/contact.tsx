import { useTranslation } from "react-i18next";
import { PageGrid } from "../components/layout/PageGrid/PageGrid";
import { Txt, TxtVariant } from "../components/shared/Text";

function Contact() {
  const { t } = useTranslation();

  return (
    <PageGrid>
      <Txt variant={TxtVariant.H1} className="mb-4  ">
        {t("contact.title")}
      </Txt>
      <div className="col-span-4">
        <Txt variant={TxtVariant.Span}>{t("contact.email")}: </Txt>
        <Txt variant={TxtVariant.Anchor}>
          <a
            href="mailto: aanaluaraujo@gmail.com"
            rel="noreferrer"
            target="_blank"
          >
            {t("contact.anasEmail")}
          </a>
        </Txt>
      </div>
      <div className="col-span-4 mt-2">
        <Txt variant={TxtVariant.Span}>{t("contact.linkedIn")}: </Txt>
        <Txt variant={TxtVariant.Anchor}>
          <a
            href="https://www.linkedin.com/in/ana-luisa-ara%C3%BAjo-17a40310b/"
            rel="noreferrer"
            target="_blank"
          >
            {t("contact.anasLinkedIn")}
          </a>
        </Txt>
      </div>
    </PageGrid>
  );
}

export default Contact;
