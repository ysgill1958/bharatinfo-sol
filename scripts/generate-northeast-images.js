const fs = require('fs');
const path = require('path');
const https = require('https');

const images = [
  {
    name: 'directories-bg.jpg',
    url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'trade-bg.jpg',
    url: 'https://images.unsplash.com/photo-1556742393-75e5fc197a07?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'marketplace-bg.jpg',
    url: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'network-bg.jpg',
    url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'industry-bg.jpg',
    url: 'https://images.unsplash.com/photo-1581091226825-c6c3b9c0c0c0?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'tourism-bg.jpg',
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'economy-bg.jpg',
    url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'urban-bg.jpg',
    url: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=800&q=80'
  }
];

const outputDir = path.join(__dirname, '../public/northeast');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Download each image
images.forEach(image => {
  const outputPath = path.join(outputDir, image.name);
  
  https.get(image.url, (response) => {
    if (response.statusCode === 200) {
      response.pipe(fs.createWriteStream(outputPath));
      console.log(`Downloaded: ${image.name}`);
    } else {
      console.error(`Failed to download ${image.name}: ${response.statusCode}`);
    }
  }).on('error', (err) => {
    console.error(`Error downloading ${image.name}:`, err);
  });
}); 