# Contributing to Blooming Math 🌸

Thank you for your interest in contributing to BloomingMath! This project combines machine learning, computer vision, and interactive web development to make math education more engaging for children.

## 🚀 Quick Start

### Prerequisites
- Basic knowledge of JavaScript, HTML, CSS
- Understanding of Canvas API for drawing features
- Familiarity with TensorFlow.js for ML contributions
- OpenCV.js knowledge for image processing improvements

### Development Setup

1. **Fork and Clone**:
   ```bash
   git clone https://github.com/YOUR-USERNAME/BloomingMath.git
   cd BloomingMath
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start Development Server**:
   ```bash
   npm run dev
   # Opens http://localhost:8000 with live reload
   ```

4. **Test the Application**:
   - Draw math problems on the canvas
   - Verify MNIST model recognition (97.82% accuracy)
   - Check blooming animations and visual effects

## 📁 Project Architecture

### Core Components

#### **1. Machine Learning Pipeline**
```
TFJS/
├── model.json          # MNIST model architecture (97.82% accuracy)
├── model_weights.bin   # Trained weights
└── tfjs-handler.js     # Model loading and inference
```

#### **2. Canvas Drawing System**
```javascript
// drawing.js - Key functions
function initializeCanvas()      // Setup drawing area
function handleDrawing(event)    // Process touch/mouse input
function clearCanvas()           // Reset drawing surface
function captureDrawing()        // Extract image data for ML
```

#### **3. Image Processing (OpenCV)**
```javascript
// processing.js - Computer vision pipeline
function preprocessImage(imageData)  // Normalize for MNIST
function segmentDigits(canvas)       // Extract individual numbers
function enhanceContrast(image)     // Improve recognition
function normalizeToMNIST(digit)    // 28x28 grayscale format
```

#### **4. Mathematical Validation**
```javascript
// maths.js - Problem solving logic
function parseExpression(digits)     // Convert digits to math
function validateAnswer(problem)     // Check correctness
function supportedOperations()       // +, -, ×, ÷
```

#### **5. Visual Effects System**
```javascript
// blooming-effects.js - Animation system
function triggerBloomingEffect()     // Success animations
function animateGrass()             // Background movement
function showEncouragement()        // Wrong answer feedback
```

## 🛠️ Development Guidelines

### Code Style

#### **JavaScript**
- Use ES6+ features (const/let, arrow functions, async/await)
- Comment complex ML and CV operations
- Handle errors gracefully (especially TFJS loading)
- Use meaningful variable names for ML tensors

```javascript
// Good
const preprocessedImage = await normalizeCanvasImage(canvasData);
const prediction = await model.predict(preprocessedImage);

// Avoid
const img = norm(data);
const p = m.predict(img);
```

#### **CSS**
- Follow BEM methodology for blooming effects
- Use CSS custom properties for theme colors
- Ensure animations are smooth (60fps target)
- Mobile-first responsive design

```css
/* Blooming animation styles */
.bloom__flower--success {
  animation: bloom-effect 2s ease-out forwards;
}

.grass__blade {
  animation: gentle-sway 3s infinite ease-in-out;
}
```

#### **HTML**
- Semantic markup for accessibility
- ARIA labels for canvas drawing area
- Touch-friendly button sizes (44px minimum)

### Performance Guidelines

#### **TensorFlow.js Optimization**
- Warm up model on app initialization
- Dispose tensors after use to prevent memory leaks
- Use `tf.tidy()` for tensor memory management

```javascript
// Good tensor management
const prediction = tf.tidy(() => {
  const preprocessed = preprocessImage(imageData);
  return model.predict(preprocessed);
});
```

#### **Canvas Performance**
- Use `requestAnimationFrame` for smooth drawing
- Implement efficient drawing algorithms
- Optimize for touch devices (prevent default behaviors)

#### **OpenCV Processing**
- Process images on separate thread when possible
- Cache preprocessing results for similar inputs
- Use efficient matrix operations

## 🧪 Testing Guidelines

### Manual Testing Checklist

#### **Drawing Functionality**
- [ ] Smooth drawing on desktop (mouse)
- [ ] Responsive touch drawing on mobile/tablet
- [ ] Clear canvas functionality works
- [ ] Drawing persists during recognition

#### **ML Recognition Testing**
- [ ] Digits 0-9 recognized with high accuracy
- [ ] Various handwriting styles supported
- [ ] Fast inference (< 50ms per digit)
- [ ] Handles poorly drawn numbers gracefully

#### **Mathematical Operations**
- [ ] Addition problems validate correctly
- [ ] Subtraction with negative results
- [ ] Multiplication accuracy
- [ ] Division with decimal handling

#### **Visual Effects**
- [ ] Blooming animations trigger on correct answers
- [ ] Grass animations run smoothly
- [ ] Responsive design on different screen sizes
- [ ] Accessibility features work

### Browser Compatibility
Test on:
- **Desktop**: Chrome, Firefox, Safari, Edge
- **Mobile**: iOS Safari, Chrome Mobile, Samsung Internet
- **Tablets**: iPad Safari, Android Chrome

### Performance Benchmarks
- Model loading: < 3 seconds
- First draw response: < 100ms
- Recognition inference: < 50ms
- Animation frame rate: 60fps

## 🎯 Contribution Areas

### 🌱 **Beginner Friendly**

#### **Visual Enhancements**
- New blooming flower types and animations
- Seasonal themes (spring, summer, autumn)
- Sound effects for interactions
- Improved mobile UI/UX

#### **Educational Features**
- More encouraging feedback messages
- Progress indicators
- Simple achievement system
- Colorful number highlighting

### 🌿 **Intermediate**

#### **Canvas Improvements**
- Multiple brush sizes and colors
- Eraser functionality
- Undo/redo drawing actions
- Better touch sensitivity

#### **Math Extensions**
- Support for fractions (1/2 + 1/3)
- Multi-digit numbers (12 + 34)
- Word problems with number extraction
- Basic geometry shape recognition

#### **Performance Optimization**
- Web Workers for image processing
- Model caching strategies
- Progressive loading
- Better error handling

### 🌳 **Advanced**

#### **Machine Learning**
- Improve MNIST model accuracy (target: 99%+)
- Support for mathematical symbols (+, -, ×, ÷, =)
- Equation structure recognition
- Custom model training pipeline

#### **Computer Vision**
- Real-time digit segmentation
- Handwriting style adaptation
- Advanced image preprocessing
- Support for multiple languages

#### **Architecture**
- Progressive Web App (PWA) functionality
- Offline mode support
- WebAssembly optimization
- Advanced caching strategies

## 📋 Pull Request Process

### Before Submitting

1. **Test Thoroughly**:
   - Run the manual testing checklist
   - Test on multiple devices/browsers
   - Verify model accuracy isn't degraded
   - Check animation performance

2. **Code Quality**:
   - Follow established code style
   - Add comments for complex algorithms
   - Ensure no console errors
   - Optimize for performance

### PR Description Template

```markdown
## 🌸 Description
Brief description of changes and motivation.

## 🧪 Testing
- [ ] Desktop browsers tested
- [ ] Mobile devices tested  
- [ ] MNIST recognition accuracy verified
- [ ] Animation performance checked
- [ ] No console errors

## 📸 Screenshots/GIFs
(If UI changes) Include before/after images or demo GIFs

## 🔗 Related Issues
Fixes #(issue_number)

## 📝 Additional Notes
Any special instructions or considerations.
```

### Review Process
1. **Automated Checks**: Code style and basic functionality
2. **Manual Review**: Code quality and educational value
3. **Testing**: Cross-browser and device compatibility
4. **Performance**: Ensure no regression in model accuracy or speed

## 🐛 Bug Reports

### Information to Include

```markdown
## 🐛 Bug Description
Clear description of the issue.

## 🔄 Steps to Reproduce
1. Open the app
2. Check & Draw 2 + 3 = "5"
3. Observe incorrect recognition

## 🎯 Expected Behavior
The digits should be recognized correctly.

## 📱 Environment
- **Browser**: Chrome 91.0.4472.124
- **OS**: macOS Big Sur 11.4
- **Device**: MacBook Pro 13"
- **Canvas Size**: 800x600

## 📸 Screenshots
(Include images of the drawing and any error messages)

## 🧠 ML Model Info
- Model accuracy during testing: X.XX%
- Inference time: XXms
- Console errors: (paste any relevant logs)
```

## 🎮 Feature Requests

### Template for New Features

```markdown
## 🌟 Feature Description
What educational problem does this solve?

## 🎯 Use Case
How would students/teachers use this feature?

## 🎨 Proposed Design
Mockups or detailed description of implementation.

## 🧠 Technical Considerations
- ML model changes needed?
- Performance impact?
- Browser compatibility?

## 📚 Educational Value
How does this improve math learning?
```

## 🏆 Recognition

### Contributor Rewards
- **First-time contributors**: Special mention in README
- **Significant features**: Credit in release notes
- **Bug fixes**: Listed in changelog
- **Documentation**: Technical writing recognition

### Hall of Fame
Contributors who significantly improve the educational value or technical capabilities will be featured prominently.

## 🆘 Getting Help

- **GitHub Issues**: Technical problems and bugs
- **Discussions**: Feature ideas and general questions
- **Code Review**: Request feedback on implementations
- **ML Questions**: TensorFlow.js and OpenCV help

## 📚 Learning Resources

### Machine Learning
- [TensorFlow.js Documentation](https://www.tensorflow.org/js)
- [MNIST Dataset Tutorial](https://www.tensorflow.org/datasets/catalog/mnist)
- [Model Optimization Guide](https://www.tensorflow.org/js/guide/platform_environment)

### Computer Vision
- [OpenCV.js Tutorials](https://docs.opencv.org/3.4/d5/d10/tutorial_js_root.html)
- [Image Preprocessing Techniques](https://opencv-python-tutroals.readthedocs.io/en/latest/py_tutorials/py_imgproc/py_table_of_contents_imgproc/py_table_of_contents_imgproc.html)

### Web Development
- [Canvas API Reference](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [Touch Events Handling](https://developer.mozilla.org/en-US/docs/Web/API/Touch_events)
- [CSS Animation Performance](https://web.dev/animations-guide/)

---

## 🌸 **Let's Grow Together!**

Every contribution, no matter how small, helps make math education more accessible and enjoyable for children worldwide. Whether you're fixing a typo, adding a new animation, or improving our ML model, you're part of something beautiful! 🌱

**Happy contributing!** 🎉
