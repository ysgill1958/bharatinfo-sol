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

// Main function to fix image paths in HTML files
function fixImagePaths() {
  const outDir = path.join(__dirname, '../out');
  const htmlFiles = findHtmlFiles(outDir);
  
  console.log(`Found ${htmlFiles.length} HTML files to process`);
  
  let totalChanges = 0;
  
  htmlFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    const originalContent = content;
    
    // Fix image src attributes (but not if they're already absolute URLs or have correct basePath)
    content = content.replace(/(src=["'])\//g, '$1/bharatinfo-sol/');
    
    // Fix CSS background image urls (but not if they're already absolute URLs or have correct basePath)
    content = content.replace(/(url\(["']?)\//g, '$1/bharatinfo-sol/');
    
    if (content !== originalContent) {
      fs.writeFileSync(file, content, 'utf8');
      totalChanges++;
    }
  });
  
  console.log(`Fixed image paths in ${totalChanges} HTML files`);
}

// Run the function
fixImagePaths(); 