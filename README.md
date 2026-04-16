EcoTravel is a web-based application developed to promote sustainable tourism and responsible travel practices. The platform provides users with information about eco-friendly destinations, encourages environmental awareness, and supports local communities. The main objective of this project is to reduce the negative impact of overtourism by guiding travelers toward more conscious and sustainable choices. The application focuses on simplicity, accessibility, and visually appealing design to enhance user experience.

🏗️ Architecture & Design

The EcoTravel project follows a simple front-end architecture built using HTML and CSS, with a supporting Node.js script for handling image validation. The application is structured into multiple static web pages, each dedicated to a specific feature such as destinations, sustainability awareness, community interaction, and project information.

The design emphasizes a modern user interface using gradient backgrounds, glassmorphism effects, and responsive layouts. CSS Grid is used to create flexible and adaptive layouts, ensuring the website performs well across different screen sizes. Common UI components such as the navigation bar, cards, and footer are reused across pages to maintain consistency and improve usability.

🧩 Modules

The application is divided into several functional modules. The destinations module displays eco-friendly travel locations using visually appealing cards that include images and descriptions. The about module provides an overview of the project and its mission. The sustainability module educates users about responsible tourism practices, while the community module is designed to encourage user engagement and shared experiences.

Additionally, a separate image handling module is implemented using Node.js. This script scans for broken image links from external sources and replaces them with placeholder images, ensuring that the website maintains visual consistency even when external resources fail.

🔌 APIs / Integrations Used

The project integrates external resources such as Unsplash for high-quality images and Google Fonts for modern typography. In cases where image links fail, the Picsum Photos API is used as a fallback to dynamically generate placeholder images. These integrations enhance both the visual quality and reliability of the application.

⚙️ Key Features

EcoTravel offers a clean and modern user interface with easy navigation between pages. It provides curated eco-friendly destinations and promotes sustainable travel practices. The responsive design ensures accessibility across devices, while the image validation script improves reliability by handling broken links efficiently.

🚧 Challenges Faced

During development, several challenges were encountered. Managing broken image links from external sources required implementing a custom script for detection and replacement. Maintaining a consistent design across multiple pages using only CSS also required careful planning. Ensuring responsiveness without using advanced frameworks was another challenge, along with integrating fallback mechanisms for images.

👨‍💻 Team Contributions

The project was developed collaboratively, with each team member contributing to different aspects such as UI design, page development, styling, and testing. Responsibilities were divided to ensure efficient development and proper integration of all modules.

📸 Screenshots

Screenshots of the application should include the home page, destinations page, about page, navigation menu, and card layouts to demonstrate the overall flow and features of the application.

🚀 How to Run

To run the project, download or clone the repository and open the index.html file in any web browser. For image validation, the Node.js script can be executed to automatically detect and replace broken image links.

🎯 Conclusion

EcoTravel successfully demonstrates how basic web technologies can be used to create an impactful application that promotes environmental awareness and sustainable tourism. The project highlights the importance of responsible travel while delivering a user-friendly and visually appealing experience.
