#!/usr/bin/env node
import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

const inputPath = join(rootDir, 'images/medspa/main_injector.jpg');
const outputDir = join(rootDir, 'images/medspa');

async function optimizeImages() {
  console.log('Starting image optimization...');
  console.log(`Input: ${inputPath}`);

  try {
    // Load the image and get metadata
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    console.log(`Original image: ${metadata.width}x${metadata.height}, format: ${metadata.format}`);

    // Calculate center crop to square
    const minDimension = Math.min(metadata.width, metadata.height);
    const left = Math.floor((metadata.width - minDimension) / 2);
    const top = Math.floor((metadata.height - minDimension) / 2);

    console.log(`Cropping to ${minDimension}x${minDimension} (centered)`);

    // Create base image with center crop
    const baseImage = sharp(inputPath)
      .extract({
        left: left,
        top: top,
        width: minDimension,
        height: minDimension
      });

    // Generate 600x600 WebP
    await baseImage
      .clone()
      .resize(600, 600, {
        fit: 'cover',
        position: 'center'
      })
      .webp({ quality: 82 })
      .toFile(join(outputDir, 'main_injector-600.webp'));
    console.log('✓ Created main_injector-600.webp');

    // Generate 1000x1000 WebP
    await baseImage
      .clone()
      .resize(1000, 1000, {
        fit: 'cover',
        position: 'center'
      })
      .webp({ quality: 82 })
      .toFile(join(outputDir, 'main_injector-1000.webp'));
    console.log('✓ Created main_injector-1000.webp');

    // Generate 1000x1000 JPEG (fallback)
    await baseImage
      .clone()
      .resize(1000, 1000, {
        fit: 'cover',
        position: 'center'
      })
      .jpeg({ quality: 85, mozjpeg: true })
      .toFile(join(outputDir, 'main_injector-1000.jpg'));
    console.log('✓ Created main_injector-1000.jpg');

    console.log('\nImage optimization complete!');
  } catch (error) {
    console.error('Error optimizing images:', error);
    process.exit(1);
  }
}

optimizeImages();
