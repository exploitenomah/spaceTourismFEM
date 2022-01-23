import fs from "fs";
import path from "path";

const pagesDirectory = path.join(process.cwd(), "/pages"),
     pagesPath = '/';

export function getPagesData() {
  const fileNames = fs.readdirSync(pagesDirectory);
  let allNames = fileNames.filter((fileName) => {
        return fileName !== "index.js" && fileName !== "_app.js";
      });

  const allLinksData = allNames.map((fileName) => {
    const id = fileName.replace(/\.js$/, "");
    const filePath = path.join(pagesPath, id);
    const fullPath = filePath.replace(/\\/g, "/");
    return {
      id,
      fullPath,
    };
  });

  let firstTwoLinks = allLinksData.filter(link => {
  return link.id === 'destinations' || link.id === 'crew'
  }),
   reversedFirstTwoLinks = firstTwoLinks.reverse()
   let rest = allLinksData.filter((link, idx) => {
      return link.id !== "destinations" && link.id !== "crew";
    });
  return [...reversedFirstTwoLinks, ...rest];
}
