# Safeguard-DH ORRI Hub

A local-first, serverless web application designed to operationalize the **Phase-Based ORRI Review Checklist** and **KPI Monitoring Dashboard** for digital cultural heritage projects.

This tool helps cultural heritage institutions identify and address ethical, legal, societal, technical, and governance issues throughout the digitalization lifecycle, with a specific focus on the responsible use of Artificial Intelligence (AI).

## 🚀 Features

* **Interactive Phase-Gate Checklists (Phases 0–6):** Step-by-step guidance through the digitalization lifecycle.
* **Automated Decision Logic:** Automatically calculates whether a project can *Proceed*, *Proceed with conditions*, or must *Escalate for further review* based on checklist inputs.
* **Local-First Architecture:** Zero backend or database required. Progress is saved directly to the user's browser (`localStorage`), ensuring maximum privacy and zero hosting costs.
* **Export / Import Functionality:** Project managers can export their progress as a `.json` file to share with ORRI Coordinators or switch devices.
* **Institutional KPI Dashboard:** Real-time tracking of checklist completion, active conditions, and pending escalations.
* **Governance Dossier Generation:** Automatically compiles answers and decisions into a clean, printable PDF record.
* **Bilingual Support:** Fully translated interface and checklists in English (EN) and Serbian (SR).

## 🛠️ Technical Stack

* **Framework:** [Astro.js](https://astro.build/) (Static Site Generation)
* **Interactive Components:** React
* **Styling:** Tailwind CSS 
* **Hosting:** GitHub Pages