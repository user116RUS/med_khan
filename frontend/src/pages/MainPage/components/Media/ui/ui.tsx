import c from './ui.module.scss';

const Media = () => {
  return (
    <div className={c.container}>
      <div className={c.main}>
        <span className={c.title}>Медиа</span>
        <img className={c.button} src="/arrow-right-black.svg" />
      </div>

      <div className={c.content}>
        <div className={c.list}>
          <div className={c.block}>
            <img src="/first-video.png" alt="" />
          </div>
          <div className={c.block}>
            <img src="/second-video.png" alt="" />
          </div>
          <div className={c.block}>
            <img src="/third-video.png" alt="" />
          </div>
        </div>
        <div className={c.links}>
          <div className={c.list}>
            <div className={c.wrapper}>
              <img src="/youtube.png" />
            </div>
            <div className={c.wrapper}>
              <img src="/telegram.png" />
            </div>
            <div className={c.wrapper}>
              <img src="/instagram.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;
