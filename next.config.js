module.exports = {
  reactStrictMode: true,
  env: {
    DB_LOCAL_URI: 'mongodb://localhost:27017/careforyou',
    CLOUDINARY_CLOUD_NAME: 'careforyou',
    CLOUDINARY_API_KEY: '381723694724926',
    CLOUDINARY_API_SECRET: 'kYIcElHuwFT8TCW2dPV9V5FaGd4',
  },
  images: {
    domain: ['res.cloudinary.com']
  }
}
