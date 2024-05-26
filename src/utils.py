import os
import cv2

def save_results(results, output_dir):
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    with open(os.path.join(output_dir, 'extracted_text.txt'), 'w') as f:
        f.write(results['ocr_text'])
    
    for i, (segment, segment_type, content) in enumerate(results['classified_segments']):
        if segment_type == 'text':
            with open(os.path.join(output_dir, f'segment_{i}.txt'), 'w') as f:
                f.write(content)
        else:
            x, y, w, h = segment
            segment_image = content
            cv2.imwrite(os.path.join(output_dir, f'segment_{i}.png'), segment_image)
