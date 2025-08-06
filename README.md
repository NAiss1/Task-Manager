# Task Manager (To-Do App Pro+)

A feature-rich React Task Manager application with:

-  **Add / Edit / Delete** tasks  
-  **Due Dates** with calendar picker  
-  **Priority Levels** (1–5)  
-  **Categories / Tags**  
-  **Search & Filter** (All / Active / Completed)  
-  **Dark / Light Mode** toggle  
-  **Analytics Dashboard** (Completion Rate & Priority Breakdown)  


---

##  Folder Structure

```
task-manager/
├─ public/
│  └─ index.html
├─ src/
│  ├─ components/
│  │  ├─ AnalyticsDashboard.js
│  │  ├─ SearchBar.js
│  │  ├─ ThemeToggle.js
│  │  ├─ TodoInput.js
│  │  ├─ TodoItem.js
│  │  └─ TodoList.js
│  ├─ index.css
│  ├─ index.js
│  └─ App.js
├─ package.json
├─ tailwind.config.js
├─ postcss.config.js
└─ README.md
```

---

##  Getting Started



### Installation

1. **Clone the repo**  
   ```bash
   git clone https://github.com/your-username/task-manager.git
   cd task-manager
   ```

2. **Install dependencies**  
   ```bash
   npm install
   ```

3. **Run the app**  
   ```bash
   npm start
   ```
   Opens at [http://localhost:3000](http://localhost:3000).

---

## 🛠 Tech Stack

- **React**  
- **Tailwind CSS** (utility-first styling)  


---

##  Features

### Task Management

- **Add** tasks with text, due date, priority, and tags  
- **Edit** existing task text inline  
- **Delete** individual tasks  
- **Complete** tasks via checkbox   

### Filtering & Search

- Toggle between **All**, **Active**, and **Completed**  
- **Live search** by keyword  

### Due Dates & Reminders

- Select a due date from a calendar  
- Due date badges highlight upcoming tasks  

### Priority Levels

- Assign a priority (1 = lowest, 5 = highest)  
- Color-coded priority badges  

### Categories / Tags

- Attach one or more tags (e.g., Work, Home, Shopping)  
- Multi-select dropdown  

### Dark / Light Mode

- Toggle theme with switch  
- Persists choice in `localStorage`  

### Analytics Dashboard

- **Completion Rate** pie chart  
- **Tasks by Priority** bar chart  
- Responsive container adapts to screen size  

---

## 📄 License

This project is licensed under the MIT License.  
See [`LICENSE`](LICENSE) for details.
