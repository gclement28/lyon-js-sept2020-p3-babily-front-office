import Image from 'next/image';
import styles from './GrandTitreConcept.module.css';

export default function GrandTitreConcept() {
  return (
    <div className={styles.containerBackground}>
      <div className={styles.containerParagraphe}>
        <div className={styles.containerImg}>
          <Image
            src="/images/bbCote.jpg"
            alt="Picture of the author"
            width={600}
            height={800}
          />
        </div>
        <div className={styles.containerSousTitre}>
          <h3 className={styles.titleParagraphe}>Les enjeux</h3>
          <p className={styles.paragrapheConcept}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
            pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
          </p>
        </div>
      </div>
      <div className={styles.containerParagraphe}>
        <div className={styles.containerImg}>
          <Image
            src="/images/mainBb.jpg"
            alt="Picture of the author"
            width={600}
            height={800}
          />
        </div>
        <div className={styles.containerSousTitre}>
          <h3 className={styles.titleParagraphe}>Les précautions</h3>
          <p className={styles.paragrapheConcept}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
            pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
          </p>
        </div>
        <div className={styles.containerParagraphe}>
          <div className={styles.containerImg}>
            <Image
              // className={containerImg}
              src="/images/bbEntier.jpg"
              alt="Picture of the author"
              width={600}
              height={800}
            />
          </div>
          <div className={styles.containerSousTitre}>
            <h3 className={styles.titleParagraphe}>En securité</h3>
            <p className={styles.paragrapheConcept}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
              Aenean massa. Cum sociis natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Donec quam felis,
              ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat
              massa quis enim.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}