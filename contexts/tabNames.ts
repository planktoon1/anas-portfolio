const TABNAMES: Record<string, string> = {
  "/": "About",
  "/projects": "Projects",
  "/projects/first-semester": "First semester",
  "/projects/second-semester": "Second semester",
  "/projects/third-semester": "Third semester",
  "/projects/fourth-semester": "Fourth semester",
  "/projects/fifth-semester": "Fifth semester",
  "/projects/sixth-semester": "Sixth semester",
  "/projects/seventh-semester": "Seventh semester",
  "/contact": "Contact me",
  "/resume": "Resume",
  "/skills": "Skills",
};

// TODO: Make something smart here
// function getTabNames(t:any) {
//   return {
//     "/": t("About"),
//     "/projects": t("Projects"),
//     "/projects/first-semester": t("First semester"),
//     "/projects/second-semester": t("Second semester"),
//     "/projects/third-semester": t("Third semester"),
//     "/contact": t("Contact me"),
//     "/resume": t("Resume"),
//     "/skills": t("Skills"),
//   };
// }
export default TABNAMES;
