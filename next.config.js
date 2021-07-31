module.exports = {
  reactStrictMode: true,
  env: {
    // NEXTAUTH_URL: 'http://localhost:3000',
    DB_LOCAL_URI: 'mongodb://localhost:27017/careforyou',
    CLOUDINARY_CLOUD_NAME: 'careforyou',
    CLOUDINARY_API_KEY: '381723694724926',
    CLOUDINARY_API_SECRET: 'kYIcElHuwFT8TCW2dPV9V5FaGd4',

    SMTP_HOST: 'smtp.mailtrap.io',
    SMTP_PORT: '2525',
    SMTP_USER: '33b8cba2e225ee',
    SMTP_PASSWORD: 'c1c491564a2f21',

    STMP_FROM_NAME: 'CareForYou',
    STMP_FROM_EMAIL: 'noreply@careforyou.com'
  },
  images: {
    domain: ['res.cloudinary.com']
  }
}
