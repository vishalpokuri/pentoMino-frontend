
# 🧩 Calendar Puzzle Solver (Pentomino)

![image (1)](https://github.com/user-attachments/assets/190f5030-89b5-423b-89b7-c9876d5831cb)


A fun & challenging puzzle visualizer that places uniquely shaped pieces onto a 6x9 board — while revealing **today’s date** through open slots. Inspired by [@the_puzzle_guy](https://www.instagram.com/the_puzzle_guy/) pentomino puzzles, this project uses backtracking to find valid solutions each day!



## 🚀 Demo

> Curious how it works? [Click here to view logic](https://thunder-slouch-7c4.notion.site/How-did-I-actually-do-1d117266fbd680d3a796dc1757eb67d5) 


## 🧠 How It Works

- The board is a static 6x9 grid with **53 fixed positions**.
- The solver leaves 3 specific blocks empty to show the **date, month, and day**.
- It uses a recursive **backtracking algorithm** to fit the remaining pieces.
- A custom **Top-left Empty Cell Heuristic** helps optimize piece placement.

---

## ⚙️ Tech Stack

- **Frontend**: React(Vite) + TailwindCSS
- **Backend**: SpringBoot
- **Logic**: Java (for recursion performance)
- **Solver**: Custom heuristic, orientation mapping, collision detection



## 📦 Features

- ✅ Solve puzzle for any given date
- ✅ Shows month, date & day dynamically
- ✅ Works on any orientation of pieces
- ✅ Visual transitions & animations




## 🖥️ Run Locally

```bash
# Clone the repo
git clone https://github.com/yourusername/calendar-puzzle

# Go into the folder
cd calendar-puzzle

# Install dependencies
npm install

# Run the app
npm run dev
