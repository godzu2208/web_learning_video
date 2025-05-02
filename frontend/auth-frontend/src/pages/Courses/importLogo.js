// const requireLogo = require.context("./logo', false, /.png$|.jpg$/)");
const requireLogo = require.context("./logo", false, /\.(png|jpg)$/);
const logos = {};

requireLogo.keys().forEach((fileName) => {
  const logoName = fileName.replace("./", "").replace(/\.(png|jpg)$/, "");
  logos[logoName] = requireLogo(fileName);
});

export default logos;
