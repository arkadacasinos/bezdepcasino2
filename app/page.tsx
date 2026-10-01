const keywordTags = [
  'бездепозитные бонусы',
  'бездепозитный бонус',
  'бездепозитный бонус за регистрацию',
  'бездепозитные бонусы за регистрацию',
  'бездепозитный бонус казино',
  'бездепы в казино',
  'бонус казино',
]

export default function Page() {
  return (
    <main className="x7z2k1-shell">
      <header className="x7z2k1-header">
        <a className="x7z2k1-brand" href="#top" aria-label="Бездеп Казино — на главную">
          <span className="x7z2k1-brand-mark">✦</span>
          <span>Бездеп Казино</span>
        </a>
        <nav className="x7z2k1-nav" aria-label="Основная навигация">
          <a href="#bonuses">Бонусы</a>
          <a href="#guide">Как получить</a>
          <a href="#faq">FAQ</a>
        </nav>
      </header>

      <section id="top" className="x7z2k1-hero" aria-labelledby="hero-title">
        <div className="x7z2k1-hero-copy">
          <p className="x7z2k1-eyebrow">Актуально для игроков 18+</p>
          <h1 id="hero-title">Бездепозитные бонусы казино без лишних условий</h1>
          <p className="x7z2k1-lead">Собрали понятный список предложений для тех, кто хочет начать игру без пополнения счёта. Изучайте условия, выбирайте бонус за регистрацию и играйте ответственно.</p>
          <a className="x7z2k1-primary" href="#bonuses">Смотреть предложения <span aria-hidden="true">→</span></a>
        </div>
        <div className="x7z2k1-hero-art" aria-label="Игровая фишка и золотая звезда" role="img">
          <div className="x7z2k1-star">✦</div>
          <div className="x7z2k1-chip"><span>FREE</span><small>SPINS</small></div>
          <span className="x7z2k1-art-note">Игра начинается<br />с правильного бонуса</span>
        </div>
      </section>

      <section id="bonuses" className="x7z2k1-section" aria-labelledby="bonuses-title">
        <div className="x7z2k1-section-heading">
          <p className="x7z2k1-eyebrow">Что доступно сегодня</p>
          <h2 id="bonuses-title">Бездепозитный бонус за регистрацию</h2>
        </div>
        <div className="x7z2k1-grid">
          <article className="x7z2k1-card x7z2k1-card-featured">
            <span className="x7z2k1-card-label">Популярный выбор</span>
            <h3>Бездепозитные бонусы</h3>
            <p>Бездепозитный бонус позволяет протестировать казино без своих денег. Обычно это фриспины или небольшая сумма на игровой баланс после создания аккаунта.</p>
            <a href="#guide">Разобраться в условиях <span aria-hidden="true">↗</span></a>
          </article>
          <article className="x7z2k1-card">
            <span className="x7z2k1-card-label">Для новичков</span>
            <h3>Бонусы за регистрацию</h3>
            <p>Бездепозитные бонусы за регистрацию выдают после подтверждения телефона или почты. Перед активацией проверьте вейджер, срок действия и минимальную сумму вывода.</p>
            <a href="#faq">Частые вопросы <span aria-hidden="true">↗</span></a>
          </article>
        </div>
      </section>

      <section id="guide" className="x7z2k1-guide" aria-labelledby="guide-title">
        <div>
          <p className="x7z2k1-eyebrow">Три простых шага</p>
          <h2 id="guide-title">Как получить бездепозитный бонус казино</h2>
        </div>
        <ol className="x7z2k1-steps">
          <li><span>01</span><div><h3>Выберите предложение</h3><p>Сравните бездепозитный бонус, размер фриспинов и правила отыгрыша.</p></div></li>
          <li><span>02</span><div><h3>Создайте аккаунт</h3><p>Заполните короткую форму регистрации и подтвердите контакты.</p></div></li>
          <li><span>03</span><div><h3>Активируйте и играйте</h3><p>Введите промокод, если он нужен, и придерживайтесь лимитов.</p></div></li>
        </ol>
      </section>

      <section id="faq" className="x7z2k1-faq" aria-labelledby="faq-title">
        <p className="x7z2k1-eyebrow">Полезно знать</p>
        <h2 id="faq-title">Бездепы в казино: на что смотреть</h2>
        <p>Бездепы в казино выглядят привлекательно, но любой бездепозитный бонус имеет правила. Уточните, доступно ли предложение в вашем регионе, сколько времени даётся на отыгрыш и можно ли вывести выигрыш без внесения депозита. Бонус казино — это не гарантия выигрыша, а способ познакомиться с платформой.</p>
      </section>

      <footer className="x7z2k1-footer">
        <div><a className="x7z2k1-brand" href="#top"><span className="x7z2k1-brand-mark">✦</span><span>Бездеп Казино</span></a><p>Информация о бонусах для осознанной игры.</p></div>
        <div className="x7z2k1-tags" aria-label="Ключевые фразы сайта">{keywordTags.map((tag) => <a key={tag} href={`#${tag.replaceAll(' ', '-')}`}>#{tag.replaceAll(' ', '')}</a>)}</div>
        <p className="x7z2k1-age">18+ · Играйте ответственно · © 2025</p>
      </footer>
    </main>
  )
}

export const dynamic = 'force-static'

