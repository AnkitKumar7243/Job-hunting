# 🚀 CareerHub | Find Your Dream Job

<div align="center">
  <!--
  To add a screenshot:
  1. Take a screenshot of your application
  2. Save it as "app-screenshot.png" in the public/images folder
  3. Uncomment the image tag below
  -->
  <!-- <img src="./public/images/app-screenshot.png" alt="CareerHub Screenshot" width="800"/> -->
  <p><em>Modern job search platform with advanced filtering and application features</em></p>
</div>

## ✨ Features

- **🔍 Advanced Job Filtering** - Filter jobs by role, level, languages, and tools
- **📱 Responsive Design** - Optimized for all devices from mobile to desktop
- **📂 Categorized Job Listings** - Browse jobs organized by category in dropdown sections
- **📝 Job Application System** - Apply to jobs with a comprehensive application form
- **🌙 Modern UI/UX** - Clean, intuitive interface with smooth animations and transitions

## 🛠️ Technologies

<div align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/CSS_Modules-000000?style=for-the-badge&logo=css-modules&logoColor=white" alt="CSS Modules" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router" />
  <img src="https://img.shields.io/badge/Font_Awesome-528DD7?style=for-the-badge&logo=font-awesome&logoColor=white" alt="Font Awesome" />
</div>

## 📋 Project Overview

CareerHub is a modern job search platform that connects talented professionals with top companies worldwide. The application features a clean, intuitive interface that allows users to:

- Browse job listings organized by category (Frontend, Backend, DevOps, etc.)
- Filter jobs based on specific skills, roles, or experience levels
- View detailed job information including company, position, and requirements
- Submit job applications through an integrated application form
- Receive confirmation after successful application submission

The platform is designed with both job seekers and employers in mind, providing a seamless experience for finding the perfect job match.

## 🚀 Getting Started

### Prerequisites

- Node.js (v16.x recommended)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/careerhub/job-listings-platform.git
   cd job-listings-platform
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server
   ```bash
   npm start
   # or
   yarn start
   ```

4. Open your browser and navigate to `http://localhost:3000`

### Environment Setup

This project uses React 17 with an older version of React Scripts, which requires the legacy OpenSSL provider when running on Node.js v17 or higher. The project is configured to handle this automatically, but if you encounter crypto-related errors, you may need to set the following environment variable:

```bash
# Windows (PowerShell)
$env:NODE_OPTIONS="--openssl-legacy-provider"

# Linux/macOS
export NODE_OPTIONS=--openssl-legacy-provider
```

## 🚀 Deployment

### Deploying to Vercel

This project includes a `vercel.json` configuration file that sets up the necessary environment for deployment:

1. Sign up for a [Vercel account](https://vercel.com/signup) if you don't have one
2. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```
3. Deploy the project:
   ```bash
   vercel
   ```

### Deploying to Netlify

This project includes a `netlify.toml` configuration file for easy deployment to Netlify:

1. Sign up for a [Netlify account](https://app.netlify.com/signup) if you don't have one
2. Install the Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```
3. Deploy the project:
   ```bash
   netlify deploy
   ```

### Troubleshooting Deployment Issues

If you encounter the "digital envelope routines::unsupported" error during deployment:

1. Make sure you're using Node.js v16.x (recommended) or have the `NODE_OPTIONS=--openssl-legacy-provider` environment variable set
2. For Vercel: Check that the `vercel.json` file is in the root directory of your project
3. For Netlify: Ensure the `netlify.toml` file is properly configured
4. If using another hosting provider, add the `NODE_OPTIONS=--openssl-legacy-provider` environment variable in your hosting platform's settings

## 🧩 Project Structure

```
careerhub/
├── public/
│   ├── api/
│   │   └── data.json       # Job listings data
│   └── images/             # Company logos and icons
├── src/
│   ├── Components/         # React components
│   │   ├── ApplicationModal/  # Job application form
│   │   ├── Footer/         # Site footer
│   │   ├── Job/            # Individual job listing
│   │   ├── JobCategory/    # Category dropdown component
│   │   └── ...
│   ├── Contexts/           # React context providers
│   │   └── GlobalContext.js  # Global state management
│   ├── App.js              # Main application component
│   └── index.js            # Application entry point
└── README.md               # Project documentation
```

## 🎨 Key Features Explained

### Job Filtering System

Users can filter jobs by clicking on tags (role, level, languages, tools). The filtering system uses React Context API to manage state across components, ensuring a smooth and responsive user experience.

### Job Application Modal

The application includes a comprehensive job application form that appears when a user clicks on a job listing. The form includes:

- Personal information fields
- Experience selection
- Cover letter input
- Form validation
- Success confirmation message

### Responsive Category Dropdowns

Job listings are organized by category (Frontend, Backend, etc.) in collapsible dropdown sections. This improves navigation and helps users quickly find relevant positions.

## 🔧 Customization

### Adding More Job Categories

To add more job categories, simply update the `data.json` file with new job listings that include different role values.

### Styling

The application uses CSS Modules for styling, making it easy to customize the appearance without affecting other components. Each component has its own CSS file in the same directory.

## 📱 Responsive Design

CareerHub is fully responsive and optimized for:
- Mobile devices (375px and up)
- Tablets (768px and up)
- Desktops (992px and up)

The layout adapts seamlessly to different screen sizes, ensuring a consistent user experience across all devices.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

<div align="center">
  <p>Developed with ❤️ by CareerHub Team</p>
  <p>
    <a href="https://github.com/careerhub">GitHub</a> •
    <a href="https://linkedin.com/company/careerhub">LinkedIn</a> •
    <a href="https://twitter.com/careerhub">Twitter</a>
  </p>
</div>
