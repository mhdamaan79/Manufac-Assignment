# Manufac Crop Data Analysis - Frontend Developer Assignment

[View the deployed project here ↗️](https://manufac-assignment-tau.vercel.app/)

This project was created as part of a frontend developer assignment for Manufac. The objective is to analyze and display Indian agricultural data from 1950-2020, focusing on crop production, yield, and cultivation area. The project presents two main tables: **Maximum and Minimum Crop Production per Year** and **Average Yield and Cultivation Area per Crop**.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started)
- [Technologies](#technologies)
- [Screenshot](#screenshot)

## Project Overview
This application provides insights into agricultural statistics in India through a frontend analysis tool. Using the **Mantine** component library for styling, the app displays data in a clean, organized format, with columns sorted by maximum and minimum production per year, as well as the average yield and area for each crop.

## Features
- **Maximum and Minimum Production Table**: Displays the crop with the highest and lowest production per year.
- **Average Yield and Area Table**: Calculates and displays the average yield and cultivation area per crop.
- **Responsive Layout**: Both tables are centered on the screen and organized in a column layout.

## Folder Structure
```plaintext
project-root
├── public
│   └── index.html                    # Main HTML file
├── src
│   ├── components
│   │   ├── CropAverageTable.tsx      # Component for displaying average yield and area per crop
│   │   └── MaxMinProductionTable.tsx # Component for displaying max/min production per year
│   ├── data
│   │   └── Manufac_India_Agro_Dataset.json # JSON data file with crop statistics
│   ├── utils
│   │   ├── dataAggregation.ts        # Data aggregation functions
│   │   └── types.ts                  # Types
│   ├── App.tsx                       # Main app component
│   └── main.tsx                      # Entry point for the React app
└── README.md                         # Project README
```

## Getting Started
To run the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/mhdamaan79/Manufac-Assignment.git
   cd Manufac-Assignment
   ```
2. **Install dependencies**:
   ```bash
   yarn install
   ```
3. **Start the development server**:
   ```bash
   yarn dev
   ```
   
## Technologies
- **React**: For building the user interface.
- **TypeScript**: To provide type safety.
- **Mantine**: Used for table components and styling.
- **Vite**: For fast development and build tooling.

## Screenshot
![screencapture-localhost-5173-2024-11-10-20_00_55](https://github.com/user-attachments/assets/e9efadae-99f1-4bc7-bbaa-82d78b39c073)

## Deployed Link
[View the deployed project here ↗️](https://manufac-assignment-tau.vercel.app/)

