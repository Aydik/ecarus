import { FC } from 'react';
import styles from './index.module.scss';
import { contacts } from './constants';
import { CopyableText } from 'shared/ui/CopyableText';
import { ContactInfo } from './components/ContactInfo';

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.contactList}>
        {contacts.map((contact) => (
          <li key={contact.title} className={styles.contactList__item}>
            <CopyableText text={contact.toCopy}>
              <ContactInfo title={contact.title} icon={contact.icon} />
            </CopyableText>
          </li>
        ))}
      </ul>
    </footer>
  );
};
