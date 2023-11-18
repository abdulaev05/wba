'use client';

import Link from 'next/link';
import styles from '@/styles/components/multi/footer.module.scss';
import { THeaderNav } from '@/types/typeNavs';

const Footer = () => {
  const footerNav: THeaderNav[] = [
    {
      href: '',
      content: 'Окна',
      droplist: [
        { href: '', content: 'Простое окно' },
        { href: '', content: 'Энергоэффективное окно' },
        { href: '', content: 'Окно с солнцезащитой' },
        { href: '', content: 'Окно с защитой от шума' },
        { href: '', content: 'Панорамные окна' },
        { href: '', content: 'Цветные пластиковые окна' },
      ],
    },
    {
      href: '',
      content: 'Балконы и лоджии',
      droplist: [
        { href: '', content: 'Распашное остекление балконов и лоджий' },
        { href: '', content: 'Остекление с раздвижными створками' },
        { href: '', content: 'Теплое остекление балконов и лоджий' },
        { href: '', content: 'Французские окна' },
        { href: '', content: 'Остекление террасы' },
      ],
    },
    {
      href: '',
      content: 'Двери',
      droplist: [
        { href: '', content: 'Входная дверь' },
        { href: '', content: 'Межкомнатная (офисная) дверь' },
        { href: '', content: 'Балконные двери' },
      ],
    },
    {
      href: '',
      content: 'Решения для загородного дома',
      droplist: [
        { href: '', content: 'Окно для коттеджа (загородного дома)' },
        { href: '', content: 'Панорамные двери' },
        { href: '', content: 'Раздвижные окна для веранды и террасы' },
      ],
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row">
          <nav className={styles.container}>
            {footerNav.map((element, id) => {
              return (
                <ul key={id} className={styles.column}>
                  <Link href={`/${element.href}`} className="link-blue">
                    <h4 className="list-title">{element.content}</h4>
                  </Link>
                  <div className={styles.list}>
                    {element.droplist?.map((elem, i) => {
                      return (
                        <Link key={i} href={`/${elem.href}`} className="link-blue">
                          <span>{elem.content}</span>
                        </Link>
                      );
                    })}
                  </div>
                </ul>
              );
            })}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
