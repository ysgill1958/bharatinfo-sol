const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  {
    name: 'directories-bg.jpg',
    url: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    name: 'trade-bg.jpg',
    url: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    name: 'marketplace-bg.jpg',
    url: 'https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    name: 'network-bg.jpg',
    url: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    name: 'industry-bg.jpg',
    url: 'https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    name: 'tourism-bg.jpg',
    url: 'https://images.pexels.com/photos/2335126/pexels-photo-2335126.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    name: 'economy-bg.jpg',
    url: 'https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    name: 'urban-bg.jpg',
    url: 'https://images.pexels.com/photos/1538177/pexels-photo-1538177.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(fs.createWriteStream(filepath))
          .on('error', reject)
          .once('close', () => resolve(filepath));
      } else {
        response.resume();
        reject(new Error(`Request Failed With a Status Code: ${response.statusCode}`));
      }
    }).on('error', reject);
  });
};

const main = async () => {
  const outputDir = path.join(__dirname, '../public/northeast');
  
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  for (const image of images) {
    const filepath = path.join(outputDir, image.name);
    try {
      await downloadImage(image.url, filepath);
      console.log(`Downloaded: ${image.name}`);
    } catch (error) {
      console.error(`Error downloading ${image.name}:`, error.message);
      // Create a placeholder image if download fails
      const placeholderUrl = `https://placehold.co/800x600/${image.name.includes('tourism') ? '38B2AC' : '2196f3'}/ffffff/png?text=${encodeURIComponent(image.name.replace('-bg.jpg', ''))}`;
      try {
        await downloadImage(placeholderUrl, filepath);
        console.log(`Created placeholder for: ${image.name}`);
      } catch (placeholderError) {
        console.error(`Error creating placeholder for ${image.name}:`, placeholderError.message);
      }
    }
  }
};

main(); 