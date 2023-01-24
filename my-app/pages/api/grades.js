const data = {
  grades: [{ grade: Math.floor(Math.random() * 20), class: "Math", weight:Math.floor(Math.random()*3+1) },
  { grade: Math.floor(Math.random() * 20), class: "Math", weight:(Math.floor(Math.random()*3) + 1) },
  { grade: Math.floor(Math.random() * 20), class: "Math", weight:Math.floor(Math.random()*3) + 1 },
  { grade: Math.floor(Math.random() * 20), class: "Math", weight:Math.floor(Math.random()*3) + 1 },
  { grade: Math.floor(Math.random() * 20), class: "Math", weight:Math.floor(Math.random()*3) + 1 },
  { grade: Math.floor(Math.random() * 20), class: "Physics", weight:Math.floor(Math.random()*3) + 1 },
  { grade: Math.floor(Math.random() * 20), class: "Physics", weight:Math.floor(Math.random()*3) + 1 },
  { grade: Math.floor(Math.random() * 20), class: "Spanish", weight:Math.floor(Math.random()*3) + 1 },
  { grade: Math.floor(Math.random() * 20), class: "Spanish", weight:Math.floor(Math.random()*3) + 1 },
  { grade: Math.floor(Math.random() * 20), class: "Art", weight:Math.floor(Math.random()*3) + 1 },
  { grade: Math.floor(Math.random() * 20), class: "Art", weight:Math.floor(Math.random()*3) + 1 },
  { grade: Math.floor(Math.random() * 20), class: "Art", weight:Math.floor(Math.random()*3) + 1 },
  { grade: Math.floor(Math.random() * 20), class: "Physics", weight:Math.floor(Math.random()*3) + 1 },
  { grade: Math.floor(Math.random() * 20), class: "Chemistry", weight:Math.floor(Math.random()*3) + 1 },
  { grade: Math.floor(Math.random() * 20), class: "Chemistry", weight:Math.floor(Math.random()*3) + 1 },
  { grade: Math.floor(Math.random() * 20), class: "Chemistry", weight:Math.floor(Math.random()*3) + 1 },
  { grade: Math.floor(Math.random() * 20), class: "History", weight:Math.floor(Math.random()*3) + 1 },
  { grade: Math.floor(Math.random() * 20), class: "History", weight:Math.floor(Math.random()*3) + 1 },
  { grade: Math.floor(Math.random() * 20), class: "History", weight:Math.floor(Math.random()*3) + 1 },

]
};

export default function handler(req, res) {
    res.status(200).json(data)
  }