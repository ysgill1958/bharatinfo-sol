/**
 * Simple script to copy all public files to the out directory
 * This ensures all images are available in the build
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Paths
const publicDir = path.join(__dirname, '../public');
const outDir = path.join(__dirname, '../out');

console.log('🔍 Starting fast image fix process...');

// 1. Ensure the out directory exists
if (!fs.existsSync(outDir)) {
  console.log('📁 Creating out directory...');
  fs.mkdirSync(outDir, { recursive: true });
}

// 2. Copy all files from public to out
console.log('📋 Copying all public files to out directory...');

try {
  // Using shell commands for better cross-platform compatibility and speed
  if (process.platform === 'win32') {
    // Windows
    execSync(`xcopy "${publicDir}" "${outDir}" /E /I /Y`);
  } else {
    // Unix (Linux/macOS)
    execSync(`cp -R "${publicDir}/"* "${outDir}/"`);
  }
  console.log('✅ Successfully copied all public files to out directory');
} catch (error) {
  console.error('❌ Error copying files:', error);
  
  // Fallback to node.js file copy if shell command fails
  console.log('⚠️ Falling back to Node.js file copy...');
  
  function copyDir(src, dest) {
    try {
      const entries = fs.readdirSync(src, { withFileTypes: true });
      
      if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
      }
      
      for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);
        
        if (entry.isDirectory()) {
          copyDir(srcPath, destPath);
        } else {
          fs.copyFileSync(srcPath, destPath);
        }
      }
      
      console.log(`✅ Successfully copied ${src} to ${dest}`);
    } catch (error) {
      console.error(`❌ Error copying directory ${src}:`, error);
    }
  }
  
  copyDir(publicDir, outDir);
}

console.log('🎉 Fast image fix completed!'); 