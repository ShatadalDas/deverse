import cryptr from "cryptr";

const cryptrObj = new cryptr(process.env.CRYPTR_SECRET, {
  pbkdf2Iterations: 100000,
});

export default cryptrObj;
