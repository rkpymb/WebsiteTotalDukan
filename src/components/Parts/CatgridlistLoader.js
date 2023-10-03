import React from 'react'
import Skeleton from '@mui/material/Skeleton';
import Mstyles from '../../../Styles/home.module.css'
const ProductGridlistLoader = () => {
  return (
      <div>
         
       
         

          <div className={Mstyles.ProductGrid}>
              <div className={Mstyles.ProductGridItem}>
                  <div className={Mstyles.ProductItemImage}>
                      <Skeleton variant="rectangular" width={'100%'} height={118} />
                  </div>

                  <div className={Mstyles.ProductItemTitle}>
                      <Skeleton />
                  </div>
                  <div className={Mstyles.ProductItemPrice}>
                      <Skeleton />
                  </div>
                  <div style={{ minHeight: '10px' }}></div>
                  <Skeleton width="60%" />
              </div>
              <div className={Mstyles.ProductGridItem}>
                  <div className={Mstyles.ProductItemImage}>
                      <Skeleton variant="rectangular" width={'100%'} height={118} />
                  </div>

                  <div className={Mstyles.ProductItemTitle}>
                      <Skeleton />
                  </div>
                  <div className={Mstyles.ProductItemPrice}>
                      <Skeleton />
                  </div>
                  <div style={{ minHeight: '10px' }}></div>
                  <Skeleton width="60%" />
              </div>
              <div className={Mstyles.ProductGridItem}>
                  <div className={Mstyles.ProductItemImage}>
                      <Skeleton variant="rectangular" width={'100%'} height={118} />
                  </div>

                  <div className={Mstyles.ProductItemTitle}>
                      <Skeleton />
                  </div>
                  <div className={Mstyles.ProductItemPrice}>
                      <Skeleton />
                  </div>
                  <div style={{ minHeight: '10px' }}></div>
                  <Skeleton width="60%" />
              </div>
              <div className={Mstyles.ProductGridItem}>
                  <div className={Mstyles.ProductItemImage}>
                      <Skeleton variant="rectangular" width={'100%'} height={118} />
                  </div>

                  <div className={Mstyles.ProductItemTitle}>
                      <Skeleton />
                  </div>
                  <div className={Mstyles.ProductItemPrice}>
                      <Skeleton />
                  </div>
                  <div style={{ minHeight: '10px' }}></div>
                  <Skeleton width="60%" />
              </div>
              <div className={Mstyles.ProductGridItem}>
                  <div className={Mstyles.ProductItemImage}>
                      <Skeleton variant="rectangular" width={'100%'} height={118} />
                  </div>

                  <div className={Mstyles.ProductItemTitle}>
                      <Skeleton />
                  </div>
                  <div className={Mstyles.ProductItemPrice}>
                      <Skeleton />
                  </div>
                  <div style={{ minHeight: '10px' }}></div>
                  <Skeleton width="60%" />
              </div>
              <div className={Mstyles.ProductGridItem}>
                  <div className={Mstyles.ProductItemImage}>
                      <Skeleton variant="rectangular" width={'100%'} height={118} />
                  </div>

                  <div className={Mstyles.ProductItemTitle}>
                      <Skeleton />
                  </div>
                  <div className={Mstyles.ProductItemPrice}>
                      <Skeleton />
                  </div>
                  <div style={{ minHeight: '10px' }}></div>
                  <Skeleton width="60%" />
              </div>
              <div className={Mstyles.ProductGridItem}>
                  <div className={Mstyles.ProductItemImage}>
                      <Skeleton variant="rectangular" width={'100%'} height={118} />
                  </div>

                  <div className={Mstyles.ProductItemTitle}>
                      <Skeleton />
                  </div>
                  <div className={Mstyles.ProductItemPrice}>
                      <Skeleton />
                  </div>
                  <div style={{ minHeight: '10px' }}></div>
                  <Skeleton width="60%" />
              </div>
              
          </div>
    </div>
  )
}

export default ProductGridlistLoader
