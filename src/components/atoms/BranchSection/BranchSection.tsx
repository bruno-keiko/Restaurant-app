import React from 'react';
import InfoCard from '../infoCard';
import Image from 'next/image';
import styles from './BranchSection.module.scss';

const BranchSection = () => {
  const branches = [
    {
      name: 'Robert Food',
      address: '1986 Hilltop Drive, Borger, TX 79007',
    },
    {
      name: 'Mark A. Reed Food',
      address: '4877 Rose Avenue, New Orleans, LA 70112',
    },
    {
      name: 'Karie K. Hill Food',
      address: '1509 Peaceful Lane, Cleveland, OH 44115',
    },
  ];

  return (
    <div className={styles['branch-section']}>
      <div className={styles.branches}>
        {branches.map((branch, index) => {
          // Encode the address for use in a URL
          const mapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(branch.address)}`;

          return (
            <div key={index} className={styles.branch}>
              <h3>{branch.name}</h3>
              <div className={styles.address}>{branch.address}</div>

              <div className={styles['info-box']}>
                <InfoCard
                  title="7.30 AM - 9.30 PM"
                  icon={
                    <Image src="/icons/watch_icon.svg" alt="Watch icon" width={20} height={20} />
                  }
                />
                <InfoCard
                  title="+880 1630 225 015"
                  icon={
                    <Image src="/icons/phone_icon.svg" alt="Phone icon" width={20} height={20} />
                  }
                />
              </div>

              <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
                Click to View Google Map
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BranchSection;
