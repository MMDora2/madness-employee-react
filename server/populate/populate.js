/*
Loading the .env file and creates environment variables from it
*/
require("dotenv").config();
const mongoose = require("mongoose");
const names = require("./names.json"); // Tesztadatok
const levels = require("./levels.json"); // Tesztadatok
const positions = require("./positions.json"); // Tesztadatok
const brands = require("./brands.json"); // Tesztadatok

const EmployeeModel = require("../db/employee.model");
const FavoriteBrandModel = require("../db/favoriteBrand.model");
const EquipmentModel = require("../db/equipment.model");

const mongoUrl = process.env.MONGO_URL;

if (!mongoUrl) {
  console.error("Missing MONGO_URL environment variable");
  process.exit(1); // Exit if MongoDB URL is missing
}

const pick = (from) => from[Math.floor(Math.random() * from.length)];

const populateBrands = async () => {
  await FavoriteBrandModel.deleteMany({}); // Törli az összes rekordot
  const favs = brands.map((brand) => ({ name: brand }));
  await FavoriteBrandModel.create(...favs);
  console.log("Created favorite brands");
};

const populateEmployees = async () => {
  await EmployeeModel.deleteMany({}); // Törli az összes rekordot
  const brands = await FavoriteBrandModel.find(); // Lekéri az összes márkát a DB-ből

  const employees = names.map((name) => ({
    name,
    level: pick(levels),
    position: pick(positions),
    present: 0,
    favoriteBrand: pick(brands),
    bonuses: [],
  }));

  await EmployeeModel.create(...employees);
  console.log("Employees created");
};

const main = async () => {
  await mongoose.connect(mongoUrl);

  await populateBrands();
  await populateEmployees();

  await mongoose.disconnect();
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
