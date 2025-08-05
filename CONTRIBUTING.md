# 🤝 Contributing to StreamFlix

Thank you for your interest in contributing to StreamFlix! This document provides guidelines and instructions for contributing to our premium streaming platform. We welcome contributions from developers of all skill levels.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [How to Contribute](#how-to-contribute)
- [Coding Standards](#coding-standards)
- [Pull Request Process](#pull-request-process)
- [Issue Reporting](#issue-reporting)
- [Project Structure](#project-structure)
- [Testing Guidelines](#testing-guidelines)
- [Style Guide](#style-guide)
- [Commit Message Guidelines](#commit-message-guidelines)

## 📜 Code of Conduct

### Our Pledge
We pledge to make participation in our project a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.

### Our Standards
- **Be respectful** and inclusive in your communication
- **Provide constructive feedback** that helps others grow
- **Focus on what's best** for the community and project
- **Show empathy** towards other community members
- **No harassment, trolling, or inappropriate behavior**

### Enforcement
Unacceptable behavior may result in temporary or permanent bans from the project. Report issues to project maintainers at ankitbhagat2062@gmail.com.

## 🚀 Getting Started

### Prerequisites
- **Git** - Version control system
- **Modern Web Browser** - Chrome, Firefox, Safari, or Edge
- **Code Editor** - VS Code, Sublime Text, or similar
- **Basic Knowledge** - HTML, CSS, JavaScript, and Bootstrap

### Fork and Clone
1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/StreamFlix.git
   cd StreamFlix
   ```

3. **Add upstream remote**:
   ```bash
   git remote add upstream https://github.com/Ankitbhagat2062/StreamFlix.git
   ```

## ⚙️ Development Setup

### Local Development
1. **Open the project** in your code editor
2. **Start a local server** (recommended):
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Open in browser**: Navigate to `http://localhost:8000`

### Development Tools
- **Live Server Extension** (VS Code) - Auto-reload on file changes
- **Browser DevTools** - Debugging and testing
- **Lighthouse** - Performance auditing

## 🎯 How to Contribute

### Types of Contributions
- 🐛 **Bug Fixes** - Report and fix issues
- ✨ **New Features** - Add functionality
- 🎨 **UI/UX Improvements** - Enhance visual design
- 📚 **Documentation** - Improve guides and comments
- 🧪 **Testing** - Add test cases and validation
- 🔧 **Performance** - Optimize loading and rendering

### Contribution Workflow
1. **Check existing issues** - Look for open issues or create new ones
2. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/issue-description
   ```

3. **Make your changes** following our coding standards
4. **Test thoroughly** across different devices and browsers
5. **Commit with clear messages** (see [Commit Guidelines](#commit-message-guidelines))
6. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a Pull Request** with detailed description

## 📝 Coding Standards

### HTML Standards
- **Semantic HTML5** - Use appropriate tags (`<header>`, `<nav>`, `<main>`, etc.)
- **Accessibility** - Include ARIA labels and proper alt text
- **Indentation** - 2 spaces for HTML
- **Comments** - Add comments for complex sections

```html
<!-- Good -->
<nav class="navbar" aria-label="Main navigation">
  <ul class="nav-list">
    <li><a href="#home" aria-current="page">Home</a></li>
  </ul>
</nav>
```

### CSS Standards
- **BEM Methodology** - Block__Element--Modifier naming
- **CSS Variables** - Use CSS custom properties for colors and sizes
- **Mobile First** - Responsive design starting from mobile
- **Comments** - Organize with section headers

```css
/* Good */
:root {
  --primary-color: #e50914;
  --spacing-unit: 1rem;
}

.hero-section {
  padding: var(--spacing-unit);
}

.hero-section__title {
  color: var(--primary-color);
}
```

### JavaScript Standards
- **ES6+ Features** - Use modern JavaScript syntax
- **Modular Code** - Organize into functions and modules
- **Error Handling** - Include try-catch blocks
- **Comments** - JSDoc style for functions

```javascript
/**
 * Initialize the video player
 * @param {string} videoId - YouTube video ID
 * @param {HTMLElement} container - DOM element for player
 */
function initializeVideoPlayer(videoId, container) {
  try {
    // Implementation
  } catch (error) {
    console.error('Failed to initialize player:', error);
  }
}
```

### Bootstrap Usage
- **Bootstrap 5.3.2** - Latest stable version
- **Custom Classes** - Extend with custom CSS, don't override
- **Responsive Utilities** - Use Bootstrap's grid and utility classes

## 🔄 Pull Request Process

### Before Submitting
1. **Test thoroughly**:
   - Check responsive design on mobile, tablet, desktop
   - Test in Chrome, Firefox, Safari, and Edge
   - Validate HTML and CSS (use W3C validators)
   - Check console for JavaScript errors

2. **Update documentation** if needed
3. **Add screenshots** for UI changes

### PR Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] UI/UX improvement
- [ ] Documentation update
- [ ] Performance improvement

## Testing
- [ ] Tested on mobile
- [ ] Tested on tablet
- [ ] Tested on desktop
- [ ] Cross-browser tested

## Screenshots
Add screenshots for UI changes

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] No console errors
```

### Review Process
1. **Automated checks** - Basic validation
2. **Code review** - Maintainers review the code
3. **Testing** - Manual testing of changes
4. **Approval** - At least one maintainer approval required
5. **Merge** - Squash and merge by maintainers

## 🐛 Issue Reporting

### Bug Report Template
```markdown
**Bug Description**
Clear description of the bug

**Steps to Reproduce**
1. Go to '...'
2. Click on '...'
3. Scroll to '...'
4. See error

**Expected Behavior**
What should happen

**Actual Behavior**
What actually happens

**Screenshots**
If applicable, add screenshots

**Environment:**
- OS: [e.g. Windows 10]
- Browser: [e.g. Chrome 91]
- Device: [e.g. iPhone 12]

**Additional Context**
Any other relevant information
```

### Feature Request Template
```markdown
**Feature Description**
Clear description of the feature

**Problem Statement**
What problem does this solve?

**Proposed Solution**
How should this be implemented?

**Alternatives Considered**
Other solutions you've thought of

**Additional Context**
Screenshots, examples, or references
```

## 📁 Project Structure Guide

### File Organization
```
StreamFlix/
├── index.html                 # Main entry point
├── CSS/
│   ├── style.css             # Main stylesheet
│   ├── components/           # Component-specific styles
│   └── utilities/            # Utility classes
├── JS/
│   ├── script.js             # Main JavaScript
│   ├── modules/              # Modular JavaScript
│   └── utils/                # Utility functions
├── Images/
│   ├── optimized/            # Compressed images
│   └── originals/            # Source images
└── Screenshots/              # Documentation images
```

### Naming Conventions
- **Files**: kebab-case (e.g., `user-profile.js`)
- **CSS Classes**: BEM methodology (e.g., `card__header--active`)
- **Images**: descriptive names (e.g., `hero-background-mobile.jpg`)
- **Variables**: camelCase (e.g., `userName`, `isLoggedIn`)

## 🧪 Testing Guidelines

### Manual Testing Checklist
- [ ] **Responsive Design** - Test on multiple screen sizes
- [ ] **Cross-browser** - Chrome, Firefox, Safari, Edge
- [ ] **Performance** - Check loading times
- [ ] **Accessibility** - Keyboard navigation, screen readers
- [ ] **User Experience** - Intuitive navigation
- [ ] **Error Handling** - Graceful error messages

### Performance Testing
- **Lighthouse Score** - Aim for 90+ in all categories
- **Image Optimization** - Use WebP format when possible
- **Minification** - Minify CSS and JavaScript
- **Lazy Loading** - Implement for images and videos

## 🎨 Style Guide

### Color Palette
```css
:root {
  --primary-red: #e50914;
  --dark-gray: #221f1f;
  --light-gray: #564d4d;
  --white: #ffffff;
  --black: #000000;
}
```

### Typography
- **Headings**: Netflix Sans, Helvetica Neue
- **Body**: Arial, sans-serif
- **Monospace**: Consolas, Monaco

### Spacing
- **Base Unit**: 8px
- **Scale**: 8px, 16px, 24px, 32px, 48px, 64px

## 📝 Commit Message Guidelines

### Format
```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types
- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes
- **refactor**: Code refactoring
- **test**: Adding tests
- **chore**: Maintenance tasks

### Examples
```bash
feat(navbar): add responsive mobile menu

- Implement hamburger menu for mobile devices
- Add smooth transitions and animations
- Include ARIA attributes for accessibility

Closes #123
```

```bash
fix(video-player): resolve autoplay issue on Safari

- Add Safari-specific autoplay handling
- Implement user interaction requirement
- Update error handling for video loading

Fixes #456
```

## 📞 Getting Help

### Resources
- **Documentation**: Check README.md and inline comments
- **Issues**: Search existing issues on GitHub
- **Discussions**: Use GitHub Discussions for questions

### Contact
- **Email**: ankitbhagat2062@gmail.com
- **GitHub Issues**: Create an issue for bugs or features
- **Discord**: Join our community (coming soon)

## 🏆 Recognition

### Contributors
Contributors will be recognized in:
- **README.md** - Contributors section
- **GitHub** - Contributors graph
- **Release notes** - For significant contributions

### Hall of Fame
Outstanding contributors may be invited as project maintainers.

---

## 📄 License

By contributing to StreamFlix, you agree that your contributions will be licensed under the same [MIT License](LICENSE) as the project.

---

**Thank you for contributing to StreamFlix! Together, we're building something amazing. 🎬✨**
