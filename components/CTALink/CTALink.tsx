import styles from './CTALink.module.scss';
import { FC } from 'react';

type Props = {
  label: string;
  href: string;
};

export const CTALink: FC<Props> = ({ label, href }) => {
  return (
    <a href={href} className={styles.ctaLink}>
      {label}
    </a>
  );
};
