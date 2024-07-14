import style from './page.module.scss';

export default async function Home() {
  return (
    <>
      <span className={style.title}>111</span>
      <span style={{ color: style.primaryColor }}>222</span>
    </>
  );
}
