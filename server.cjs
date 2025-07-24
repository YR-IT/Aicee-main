const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/members', (req, res) => {
  fs.readFile('members.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading members.json:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    const members = JSON.parse(data);
    res.json(members);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

app.post('/members', (req, res) => {
  const newMember = { ...req.body, id: Date.now(), status: 'pending' };
  fs.readFile('members.json', 'utf8', (err, data) => {
    const members = data ? JSON.parse(data) : [];
    members.push(newMember);
    fs.writeFile('members.json', JSON.stringify(members, null, 2), err => {
      if (err) return res.status(500).json({ error: 'Failed to save member' });
      res.status(201).json({ message: 'Member added as pending', member: newMember });
    });
  });
});

app.get('/pending-members', (req, res) => {
  fs.readFile('members.json', 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Failed to read members' });
    const members = JSON.parse(data);
    const pending = members.filter(m => m.status === 'pending');
    res.json(pending);
  });
});

app.post('/approve-member', (req, res) => {
  const { id } = req.body;
  fs.readFile('members.json', 'utf8', (err, data) => {
    if (err) return res.status(500).json({ error: 'Read error' });

    let members = JSON.parse(data);
    let found = false;

    members = members.map(member => {
      if (member.id === id) {
        found = true;
        return { ...member, status: 'approved' };
      }
      return member;
    });

    if (!found) return res.status(404).json({ error: 'Member not found' });

    fs.writeFile('members.json', JSON.stringify(members, null, 2), err => {
      if (err) return res.status(500).json({ error: 'Write error' });
      res.json({ message: 'Member approved successfully' });
    });
  });
});
