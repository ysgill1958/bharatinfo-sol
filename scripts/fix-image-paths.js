const fs = require('fs');
const path = require('path');

// Recursively find all HTML files in a directory
function findHtmlFiles(dir, fileList = []) {
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
  
  return fileList;
}

// Find all JS files (for fixing image paths in JS)
function findJsFiles(dir, fileList = []) {
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
  
  return fileList;
}

// Find all CSS files
function findCssFiles(dir, fileList = []) {
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
  
  return fileList;
}

// Main function to fix image paths in all files
function fixImagePaths() {
  const outDir = path.join(__dirname, '../out');
  const htmlFiles = findHtmlFiles(outDir);
  const jsFiles = findJsFiles(outDir);
  const cssFiles = findCssFiles(outDir);
  
  console.log(`Found ${htmlFiles.length} HTML files, ${jsFiles.length} JS files, and ${cssFiles.length} CSS files to process`);
  
  let totalChanges = 0;
  
  // Fix HTML files
  htmlFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    const originalContent = content;
    
    // Fix image src attributes (but not if they're already absolute URLs or have correct basePath)
    content = content.replace(/(src=["'])\//g, '$1/bharatinfo-sol/');
    
    // Fix CSS background image urls (but not if they're already absolute URLs or have correct basePath)
    content = content.replace(/(url\(["']?)\//g, '$1/bharatinfo-sol/');
    
    // Fix href for links to local resources (like JSON data files, but avoiding links to routes)
    content = content.replace(/(href=["']\/(?!bharatinfo-sol\/|http)(?!#)(?!javascript))/g, 'href="/bharatinfo-sol/');
    
    if (content !== originalContent) {
      fs.writeFileSync(file, content, 'utf8');
      totalChanges++;
    }
  });
  
  // Fix JS files (like chunks with image references)
  jsFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    const originalContent = content;
    
    // Fix image paths in JS strings - look for patterns that likely reference images
    // Only fix paths that start with "/" but don't already have the basePath
    content = content.replace(/(['"`])\/(images|northeast|logo\.png|banner\.jpg|community-bg\.jpg|info-bg\.jpg|news-bg\.jpg|ai-bg\.jpg|directory-bg\.jpg)/g, '$1/bharatinfo-sol/$2');
    
    if (content !== originalContent) {
      fs.writeFileSync(file, content, 'utf8');
      totalChanges++;
    }
  });
  
  // Fix CSS files
  cssFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    const originalContent = content;
    
    // Fix url() references in CSS
    content = content.replace(/(url\(["']?)\//g, '$1/bharatinfo-sol/');
    
    if (content !== originalContent) {
      fs.writeFileSync(file, content, 'utf8');
      totalChanges++;
    }
  });
  
  console.log(`Fixed image paths in ${totalChanges} files`);
}

// Run the function
fixImagePaths(); 