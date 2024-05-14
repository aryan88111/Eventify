const mongoose = require("mongoose");

const foodSchema = mongoose.Schema({
  starter1: {
    type: String,
    required: true,
  },
  starter1: {
    type: String,
    required: true,
  },
  maincoursedish1: {
    type: String,
    required: true,
  },
  maincoursedis2: {
    type: String,
    required: true,
  },
  maincoursedish3: {
    type: String,
    required: true,
  },
  rice: {
    type: String,
    required: true,
  },
  bread1: {
    type: String,
    required: true,
  },
  bread2: {
    type: String,
    required: true,
  },
  date:{
    type: String,
    required: true,

  },
  event: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event",
  },
});

const Food = mongoose.model("Food", foodSchema); //creates

module.exports = Food;
