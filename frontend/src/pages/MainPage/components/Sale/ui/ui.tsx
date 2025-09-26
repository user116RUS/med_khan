import c from './ui.module.scss';
import { SaleCard } from './SaleCard';

const Sale = () => {
return (
    <div className={c.container}>
        <div className={c.header}>
            <span className={c.title}>Акции</span>
            <span className={c.button}>
                <img src="/arrow-right-black.svg" className={c.arrow} />
            </span>
        </div>
        <div>
            <SaleCard />
        </div>
    </div>
)
}