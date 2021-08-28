module.exports = {
  reactStrictMode: true,
  env: {
    // NEXTAUTH_URL: 'http://localhost:3000',
    DB_LOCAL_URI: 'mongodb://localhost:27017/careforyou',
    CLOUDINARY_CLOUD_NAME: 'careforyou',
    CLOUDINARY_API_KEY: '',
    CLOUDINARY_API_SECRET: '',

    SMTP_HOST: '',
    SMTP_PORT: '',
    SMTP_USER: '',
    SMTP_PASSWORD: '',

    STMP_FROM_NAME: 'CareForYou',
    STMP_FROM_EMAIL: 'noreply@careforyou.com'
  },
  images: {
    domain: ['res.cloudinary.com']
  }
}
