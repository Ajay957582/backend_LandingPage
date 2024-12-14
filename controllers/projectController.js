const Project = require("../models/Project");

// const getProjects = async (req, res) => {
//   try {
//     const projects = await Project.find();
//     res.json(projects);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// const createProject = async (req, res) => {
//   try {
//     // console.log("checking for body", req.body);
//     // console.log(req);
//     let body = "";
//     req.on("data", (chunk) => {
//       body += chunk.toString();
//     });

//     req.on("end", async () => {
//       try {
//         const parsedBody = JSON.parse(body);
//         const newProduct = new Project({
//           image: parsedBody.image,
//           name: parsedBody.name,
//           description: parsedBody.description,
//         });
//         const { name, description, image } = req.body;
//         console.log("reached create project.....", name, description, image);

//         const newProject = new Project({ name, description, image });
//         const savedProject = await newProject.save();
//         res.status(201).json(savedProject);
//       } catch (err) {
//         res.status(400).json({ message: err.message });
//       }
//     });
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

// const createProject = async (req, res) => {
//   try {
//     console.log("entered createProject");
//     // Collect the request body
//     // console.log(req);
//     let body = "";
//     req.on("data", (chunk) => {
//       body += chunk.toString();
//       console.log("doing...");
//     });

//     req.on("end", async () => {
//       try {
//         // Parse the body and extract the project details
//         console.log("res ended");
//         const { name, description, image } = JSON.parse(body);

//         // Log the data for debugging
//         console.log("Creating new project:", { name, description, image });

//         // Create a new project document
//         const newProject = new Project({ name, description, image });

//         // Save the project to the database
//         const savedProject = await newProject.save();

//         // Send a success response
//         res.status(201).json({
//           message: "Project created successfully!",
//           project: savedProject,
//         });
//       } catch (err) {
//         console.error("Error while creating project:", err.message);
//         res
//           .status(400)
//           .json({ message: "Invalid data format or missing fields" });
//       }
//     });
//   } catch (err) {
//     console.error("Server error:", err.message);
//     res.status(500).json({ message: "Server error. Please try again later." });
//   }
// };
const getProjects = async (req, res) => {
  try {
    const projects = await Project.find(); // Fetch projects from the database
    res.status(200).json(projects);
  } catch (err) {
    console.error("Error fetching projects:", err.message);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

const createProject = async (req, res) => {
  try {
    // Extract data directly from req.body
    const { name, description, image } = req.body;

    // Log the data for debugging
    console.log("Creating new project:", { name, description, image });

    // Check if required fields are provided
    if (!name || !description || !image) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Create a new project document
    const newProject = new Project({ name, description, image });
    console.log("hey here is it ...", newProject);

    // Save the project to the database
    const savedProject = await newProject.save();

    // Send a success response
    res.status(201).json({
      message: "Project created successfully!",
      project: savedProject,
    });
  } catch (err) {
    console.error("Error while creating project:", err.message);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

module.exports = { createProject };

module.exports = { getProjects, createProject };
