import styles from './SnapScroll.module.css'

export default function SnapScroll ({children}: {children: React.ReactNode}) {
    return (
        <div className={styles.snap_scroll_container}>
            {children}
        </div>
    )
}