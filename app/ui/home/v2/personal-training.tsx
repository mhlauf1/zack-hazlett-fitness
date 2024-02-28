import { BlueButton } from 'components/buttons';
import styles from '../../styles.module.scss';

export default function PersonalTraining() {
  return (
    <section className="relative flex h-[90vh] items-center bg-[#232323]">
      <div className={styles.personalTrainingBg} />
      <div className="z-5 absolute left-5">
        <h2 className="z-5 mb-8 w-2/3 text-white">Interested in One on One Personal Training?</h2>
        <div className="w-1/2">
          <BlueButton dark href="/about">
            Let's work together
          </BlueButton>
        </div>
      </div>
    </section>
  );
}
