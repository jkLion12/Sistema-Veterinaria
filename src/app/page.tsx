import { redirect } from 'next/navigation';

export default function Home() {
  // Por ahora redirige al login (más adelante verificarás autenticación)
  redirect('/login');
}
