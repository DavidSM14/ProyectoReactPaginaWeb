import cors from 'cors';

const ACCEPTED_ORIGINS = [
  'http://localhost:8080',
  'http://localhost:1234',
  'https://movies.com',
  'https://midu.dev',
  'http://localhost:5173',
  'https://translate.google.com',
  'https://proyecto-react-cjmw-despliegue-backend.vercel.app',
  'https://proyecto-react-cjmw-despliegue-backend.vercel.app/products',
  'https://cjmw.vercel.app'
  // Agregado para permitir solicitudes desde Google Translate
];

export const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) => cors({
  origin: (origin, callback) => {
    if (acceptedOrigins.includes(origin)) {
      return callback(null, true);
    }

    if (!origin) {
      return callback(null, true);
    }

    return callback(new Error('Not allowed by CORS'));
  }
});
