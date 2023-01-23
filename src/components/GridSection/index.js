import React from 'react'
import styles from './GridSection.module.css'

const GridSection = ({ data }) => (
    <>
        {data && (
            <section className="section">
                <h2 className={`title ${styles.title}`}>{data.title}</h2>
                <div className={styles.grid}>
                    {data.gridItems.map(item => (
                        <React.Fragment key={item.id}>
                            <img
                                className={styles.gridImage}
                                src={item.imageSrc}
                                alt=""
                                role="presentation"
                            />
                            <div className={styles.gridTextContainer}>
                                <h2 className={styles.gridTextContainer__title}>{item.title}</h2>
                                <p className={styles.gridTextContainer__details}>{item.detailsHTML}</p>
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </section>
        )}
    </>
)

export default GridSection