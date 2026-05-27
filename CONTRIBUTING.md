# Contributing Guidelines

Thank you for contributing! Here are the guidelines:

## How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Adding Questions

To add new questions, edit `questions.js`:

```javascript
{
    id: 21,
    type: "Multiple Choice",
    category: "Your Category",
    question: "Your question here?",
    options: [
        "Option A",
        "Option B (correct)",
        "Option C",
        "Option D"
    ],
    correct: 1,
    explanation: "Why Option B is correct..."
}
```

## Code Standards

- Use meaningful variable names
- Add comments for complex code
- Keep functions small and focused
- Use ES6+ JavaScript features
- Test your changes

## Reporting Issues

Include:
- Clear description
- Steps to reproduce
- Expected vs. actual behavior
- Screenshots if applicable

---

Thank you for improving this project! 🎉
