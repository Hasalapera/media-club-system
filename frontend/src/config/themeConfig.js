/**
 * Global Theme Configuration for University Media Club Website
 * Primary Color: #f07d01 (Orange)
 */

export const themeConfig = {
  colors: {
    primary: "#f07d01",
    secondary: "#ffffff",
    accent: "#ff9800",
    
    // Light Mode Palette
    light: {
      background: "#ffffff",
      surface: "#f8f9fa",
      text: "#1a1a1a",
      textMuted: "#666666",
      border: "#e0e0e0"
    },
    
    // Dark Mode Palette
    dark: {
      background: "#121212",
      surface: "#1e1e1e",
      text: "#ffffff",
      textMuted: "#b0b0b0",
      border: "#333333"
    },
    
    status: {
      success: "#4caf50",
      error: "#f44336",
      warning: "#ffc107",
      info: "#2196f3"
    }
  },
  
  fonts: {
    main: "'Poppins', sans-serif",
    sinhala: "'Abhaya Libre', serif",
    tamil: "'Arima', cursive"
  },
  
  animations: {
    transition: "all 0.3s ease-in-out",
    hoverScale: 1.05
  }
};
