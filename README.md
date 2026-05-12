# University Media Club Management System (MERN Stack)

## Project Overview
A comprehensive management system for the University Media Club to handle events, attendance (QR-based), equipment tracking, and member analytics.

## Tech Stack
- **Frontend:** React (Vite), Tailwind CSS, Framer Motion (for animations).
- **Backend:** Node.js, Express.js.
- **Database:** MongoDB.
- **Language Support:** Multi-language (English, Sinhala, Tamil) via i18next.

## Branding & UI
- **Primary Color:** `#f07d01`
- **Themes:** Light & Dark Mode support.
- **Design:** Modern, section-based, and mobile-responsive.

## Core Features
1. **RBAC (Role Based Access Control):** 
   - Super Admin, Event Manager, Inventory Manager, Member.
2. **Default Admin Account:** 
   - Email: `admin@gmail.com`
   - Password: `admin123` (To be seeded automatically).
3. **Event Management:** 
   - Registration with capacity limits & waitlists.
   - QR Code generation for attendees.
   - QR Scanner for marking attendance.
4. **Analytics & Reports:** 
   - Dashboard with charts (Recharts).
   - Export reports as PDF and Excel (XLSX).
5. **Surveys & Feedback:** 
   - Internal form builder for event feedback.
6. **Equipment Inventory:** 
   - Track cameras and gear status.

## Development Steps
1. Setup Backend with MongoDB models & Admin seeding logic.
2. Setup Frontend with Theme & Multi-language configuration.
3. Build Auth & Role-based routing.
4. Implement Event & QR systems.
5. Develop Analytics Dashboard.