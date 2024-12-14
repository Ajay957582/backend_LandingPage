const Client = require("../models/Client");

const createClient = async (req, res) => {
  try {
    // Extract data directly from req.body
    const { name, designation, description, image } = req.body;

    // Log the data for debugging
    console.log("Creating new client:", {
      name,
      designation,
      description,
      image,
    });

    // Check if required fields are provided
    if (!name || !designation || !description || !image) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Create a new client document
    const newClient = new Client({ name, designation, description, image });
    console.log("New client data:", newClient);

    // Save the client to the database
    const savedClient = await newClient.save();

    // Send a success response
    res.status(201).json({
      message: "Client created successfully!",
      client: savedClient,
    });
  } catch (err) {
    console.error("Error while creating client:", err.message);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

const getClients = async (req, res) => {
  try {
    const clients = await Client.find(); // Fetch projects from the database
    res.status(200).json(clients);
  } catch (err) {
    console.error("Error fetching projects:", err.message);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

module.exports = { createClient, getClients };
