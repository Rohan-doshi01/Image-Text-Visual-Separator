# Detailed Report

## Introduction
This project aims to separate text and visual elements from images using OCR and image segmentation techniques.

## Technologies Used
- easyocr for OCR.
- OpenCV for image segmentation.

## Implementation Details
### Text Extraction
Utilized easyocr to perform OCR on the image and extract textual content.

### Visual Element Segmentation
Implemented basic image segmentation using OpenCV to isolate individual visual elements in the image.

## Challenges and Solutions
### Challenge: Handling different fonts and resolutions
Solution: Applied image preprocessing techniques like grayscale conversion and thresholding to improve OCR accuracy.

## Results
### Extracted Text
Sample of extracted text from the image.

### Segmented Images
Samples of segmented images showing isolated visual elements.

## Conclusion
The program successfully separates text and visual elements from images. Future work could involve improving segmentation accuracy and handling more complex images.

## References
- [easyocr Documentation](https://github.com/JaidedAI/EasyOCR)
- [OpenCV Documentation](https://opencv.org/)
