const fs = require('fs');
const path = require('path');

// Recursively find all HTML files in a directory
function findHtmlFiles(dir, fileList = []) {
  try {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        fileList = findHtmlFiles(filePath, fileList);
      } else if (file.endsWith('.html')) {
        fileList.push(filePath);
      }
    });
  } catch (error) {
    console.error(`Error finding HTML files in ${dir}:`, error);
  }
  
  return fileList;
}

// Find all JS files (for fixing image paths in JS)
function findJsFiles(dir, fileList = []) {
  try {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        fileList = findJsFiles(filePath, fileList);
      } else if (file.endsWith('.js')) {
        fileList.push(filePath);
      }
    });
  } catch (error) {
    console.error(`Error finding JS files in ${dir}:`, error);
  }
  
  return fileList;
}

// Find all CSS files
function findCssFiles(dir, fileList = []) {
  try {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        fileList = findCssFiles(filePath, fileList);
      } else if (file.endsWith('.css')) {
        fileList.push(filePath);
      }
    });
  } catch (error) {
    console.error(`Error finding CSS files in ${dir}:`, error);
  }
  
  return fileList;
}

// Copy all public files to out directory maintaining directory structure
function copyPublicDirectory() {
  try {
    const sourceDir = path.join(__dirname, '../public');
    const targetDir = path.join(__dirname, '../out');
    
    console.log('Ensuring all images from public directory are copied to out directory...');
    
    // Function to recursively copy directory
    function copyDir(src, dest) {
      const entries = fs.readdirSync(src, { withFileTypes: true });
      
      // Create destination directory if it doesn't exist
      if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
      }
      
      // Copy each file/directory
      for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);
        
        if (entry.isDirectory()) {
          copyDir(srcPath, destPath);
        } else {
          fs.copyFileSync(srcPath, destPath);
        }
      }
    }
    
    // Copy public directory to out directory
    copyDir(sourceDir, targetDir);
    console.log('Public directory copied to out directory successfully.');
  } catch (error) {
    console.error('Error copying public directory:', error);
  }
}

// Main function to fix image paths in all files
function fixImagePaths() {
  try {
    const outDir = path.join(__dirname, '../out');
    
    // First, ensure all public files are copied
    copyPublicDirectory();
    
    const htmlFiles = findHtmlFiles(outDir);
    const jsFiles = findJsFiles(outDir);
    const cssFiles = findCssFiles(outDir);
    
    console.log(`Found ${htmlFiles.length} HTML files, ${jsFiles.length} JS files, and ${cssFiles.length} CSS files to process`);
    
    let totalChanges = 0;
    
    // Fix HTML files
    htmlFiles.forEach(file => {
      try {
        let content = fs.readFileSync(file, 'utf8');
        const originalContent = content;
        
        // Fix image src attributes (but not if they're already absolute URLs or have correct basePath)
        content = content.replace(/(src=["'])\/(?!bharatinfo-sol\/)/g, '$1/bharatinfo-sol/');
        
        // Fix CSS background image urls (but not if they're already absolute URLs or have correct basePath)
        content = content.replace(/(url\(["']?)\/(?!bharatinfo-sol\/)/g, '$1/bharatinfo-sol/');
        
        // Fix href for links to local resources (like JSON data files, but avoiding links to routes)
        content = content.replace(/(href=["'])\/(?!bharatinfo-sol\/|http)(?!#)(?!javascript)/g, '$1/bharatinfo-sol/');
        
        if (content !== originalContent) {
          fs.writeFileSync(file, content, 'utf8');
          totalChanges++;
        }
      } catch (error) {
        console.error(`Error processing HTML file ${file}:`, error);
      }
    });
    
    // Fix JS files (like chunks with image references)
    jsFiles.forEach(file => {
      try {
        let content = fs.readFileSync(file, 'utf8');
        const originalContent = content;
        
        // Fix image paths in JS strings - look for patterns that likely reference images
        // Only fix paths that start with "/" but don't already have the basePath
        const imagePatterns = [
          'images', 'northeast', 'logo\\.png', 'banner\\.jpg', 'community-bg\\.jpg', 
          'info-bg\\.jpg', 'news-bg\\.jpg', 'ai-bg\\.jpg', 'directory-bg\\.jpg',
          'organic-bg\\.jpg', '\\.jpg', '\\.png', '\\.webp', '\\.svg', '\\.gif'
        ];
        
        const regex = new RegExp(`(['"\`])\\/(?!bharatinfo-sol\\/)(?:${imagePatterns.join('|')})`, 'g');
        content = content.replace(regex, '$1/bharatinfo-sol/');
        
        if (content !== originalContent) {
          fs.writeFileSync(file, content, 'utf8');
          totalChanges++;
        }
      } catch (error) {
        console.error(`Error processing JS file ${file}:`, error);
      }
    });
    
    // Fix CSS files
    cssFiles.forEach(file => {
      try {
        let content = fs.readFileSync(file, 'utf8');
        const originalContent = content;
        
        // Fix url() references in CSS
        content = content.replace(/(url\(["']?)\/(?!bharatinfo-sol\/)/g, '$1/bharatinfo-sol/');
        
        if (content !== originalContent) {
          fs.writeFileSync(file, content, 'utf8');
          totalChanges++;
        }
      } catch (error) {
        console.error(`Error processing CSS file ${file}:`, error);
      }
    });
    
    console.log(`Fixed image paths in ${totalChanges} files`);
  } catch (error) {
    console.error('Error fixing image paths:', error);
  }
}

// Run the function
fixImagePaths(); 