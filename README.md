# Blooming Math 🌸🌿

**AI-Powered Handwritten Math Learning Web Application**

An interactive educational platform where children learn mathematics by drawing problems on a canvas while a custom-trained MNIST model (97.82% accuracy) recognizes their handwriting in real-time, all wrapped in a beautiful blooming garden interface.

## 🎯 Project Overview


BloomingMath transforms traditional math learning into an engaging, interactive experience by combining:
- **Custom MNIST Model**: 97.82% accuracy handwritten digit recognition
- **Interactive Canvas**: Natural drawing interface for math problems
- **OpenCV Processing**: Advanced image preprocessing for better recognition
- **Blooming Theme**: Beautiful grass and flower animations that make learning delightful

## ✨ Key Features

### 🧠 **AI-Powered Recognition**
- Custom-trained MNIST neural network with **97.82% accuracy**
- Real-time handwritten digit classification using TensorFlow.js
- OpenCV integration for image preprocessing and enhancement
- Robust recognition of numbers 0-9 in various handwriting styles

### 🎨 **Interactive Learning Experience**
- HTML5 Canvas drawing interface optimized for touch devices
- Support for basic arithmetic: addition, subtraction, multiplication, division
- Format: `a + b = answer` - kids draw the complete equation
- Instant validation and feedback system

### 🌺 **Beautiful Visual Design**
- Blooming flower animations that respond to correct answers
- Grass and nature-themed background elements
- Kid-friendly color palette and typography
- Responsive design for tablets and mobile devices

### ⚡ **Technical Excellence**
- Client-side processing - no server required
- Fast inference using optimized TensorFlow.js models
- Smooth canvas drawing with configurable brush settings
- Cross-browser compatibility

## 🏗️ Technical Architecture

```
User Drawing → Canvas Capture → OpenCV Processing → MNIST Model → Math Validation → Visual Feedback
```

### **Technology Stack**
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **ML Framework**: TensorFlow.js for browser-based inference
- **Computer Vision**: OpenCV.js for image preprocessing
- **Model**: Custom MNIST CNN (97.82% accuracy)
- **Canvas**: HTML5 Canvas API for drawing interface
- **Design**: CSS animations with blooming/grass themes

## 📁 Project Structure

```
BloomingMath/
├── css/
│   └── styles.css        # All custom CSS for styling
├── images/
│   ├── background1.svg   # Background images for the blooming theme
│   └── ...
├── TFJS/
│   ├── group1-shard1of1.bin # The TensorFlow.js model weights
│   └── model.json           # The TensorFlow.js model architecture
├── vendor/
│   ├── opencv.js            # OpenCV.js library for image processing
│   └── drawing.js           # Core drawing logic for the canvas
├── favicon-16x16.png        # Website favicon
├── index.html               # The main entry point of the application
├── maths.js                 # Handles mathematical operations and problem generation
└── processing.js            # Manages image preprocessing and ML inference
└── README.md
```

## 🚀 Installation & Setup

### **Prerequisites**
- Modern web browser with JavaScript enabled
- Local web server (for CORS compliance)

### **Quick Start**
1. **Clone the repository**:
   ```bash
   git clone https://github.com/Ameer-pasha/BloomingMath.git
   cd Blooming-Math
   ```

2. **Start a local server**:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js
   npx http-server -p 8000
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Open in browser**:
   ```
   http://localhost:8000
   ```

### **For Development**
```bash
npm install
npm run dev  # Starts development server with live reload
```

## 🎮 How to Use

### **For Students**
1. **Open the app** and see the beautiful blooming math garden
2. **Draw a math problem** on the black canvas (e.g., "2 + 3 = 5")
3. **Watch the magic** as the AI recognizes your handwriting instantly
4. **See flowers bloom** when you get the answer right!
5. **Try different problems** and watch your garden grow

### **Drawing Tips**
- Write numbers clearly with decent spacing
- 
## 🧠 The MNIST Model

### **Training Details**
- **Dataset**: MNIST handwritten digits (70,000 images)
- **Accuracy Achieved**: **97.82%**
- **Framework**: TensorFlow → TensorFlow.js conversion
- **Optimization**: Quantized for web performance


## 🔬 OpenCV Integration

### **Image Processing Pipeline**
1. **Canvas Capture**: Extract drawing region as ImageData
2. **Preprocessing**: Grayscale conversion, noise reduction
3. **Normalization**: Resize to 28x28, pixel value scaling
4. **Enhancement**: Contrast adjustment, edge sharpening
5. **Model Input**: Format for TensorFlow.js inference


## 🌸 Visual Effects System

### **Blooming Animations**
- **Correct Answer**: Flowers bloom across the screen
- **Wrong Answer**: Gentle encouragement animations
- **Drawing**: Grass sways as user writes
- **Background**: Subtle nature animations


## 📊 Performance Metrics

- **Model Accuracy**: 97.82%
- **Average Inference Time**: 15ms
- **Canvas Response Time**: <5ms

## 🎨 Customization

### **Themes**
Modify `css/blooming.css` to create new visual themes:
- Change flower types and colors
- Adjust grass animation speed
- Customize success/failure feedback

## 🤝 Contributing

We welcome contributions! Areas for improvement:

### **Beginner Friendly**
- New blooming animations and visual effects
- Additional math operation support
- UI/UX improvements
- Mobile optimization

### **Intermediate**
- Performance optimizations
- New drawing tools and features
- Accessibility improvements
- Multi-language support

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.


## 📈 Future Roadmap

- [ ] **Enhanced Recognition**: Support for mathematical symbols
- [ ] **Complex Equations**: Multi-step problem solving
- [ ] **Progress Tracking**: Student performance analytics
- [ ] **Gamification**: Points, levels, and achievements

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **MNIST Dataset**: Yann LeCun and the machine learning community
- **TensorFlow.js Team**: For making ML accessible in browsers
- **OpenCV Community**: For computer vision tools
- **Educational Community**: For inspiration and feedback on math learning

## 📞 Contact & Support

**Ameer Pasha**
- GitHub: [@Ameer-pasha](https://github.com/Ameer-pasha)
- Project: [BloomingMath Repository](https://github.com/Ameer-pasha/Blooming-Math)

---

**🌸 Making Mathematics Beautiful, One Drawing at a Time! 🌸**

*Built with ❤️ for the next generation of learners*
