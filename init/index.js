const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const { sampleListings } = require("./data.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}


const initDB = async () => {
  await Listing.deleteMany({});
  const listingsWithOwner = sampleListings.map((obj) => ({
  ...obj,
  owner: "693f95d08b6cd6d93e86d0ea",
}));


await Listing.insertMany(listingsWithOwner);

  console.log("data was initialized");
  mongoose.connection.close(); // ✅ optional but recommended
};

initDB();
