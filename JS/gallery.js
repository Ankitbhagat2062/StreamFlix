(() => {
    if (document.querySelector('html').classList.contains('is-builder')) return;
  
    function applyScrollAnimation() {
      const galleryWrappers = document.querySelectorAll('.gallery-wrapper');
  
      if (!galleryWrappers.length) return;
  
      galleryWrappers.forEach((galleryWrapper) => {
        const gridContainer1 = galleryWrapper.querySelector('.grid-container-1');
        const gridContainer2 = galleryWrapper.querySelector('.grid-container-2');
        const gridContainer3 = galleryWrapper.querySelector('.grid-container-3');
  
        const initialTransform1 = gridContainer1 ? getComputedStyle(gridContainer1).transform : null;
        const initialTransform2 = gridContainer2 ? getComputedStyle(gridContainer2).transform : null;
        const initialTransform3 = gridContainer3 ? getComputedStyle(gridContainer3).transform : null;
  
        function updateScrollAnimation() {
          const scrollPosition = window.scrollY;
          const screenHeight = window.innerHeight;
          const galleryBlockTop = galleryWrapper.getBoundingClientRect().top + window.scrollY;
          const distanceFromTop = galleryBlockTop - screenHeight;
  
          if (scrollPosition >= distanceFromTop) {
            const matrix1 = initialTransform1 ? new DOMMatrix(initialTransform1) : null;
            const matrix2 = initialTransform2 ? new DOMMatrix(initialTransform2) : null;
            const matrix3 = initialTransform3 ? new DOMMatrix(initialTransform3) : null;
  
            if (matrix1) {
              const gridItems1 = gridContainer1.querySelectorAll('.grid-item');
              const numItems1 = gridItems1.length;
  
              //fix for mbr-ai
              gridItems1.forEach(item => {
                const img = item.querySelector('img');
                img.classList.remove('hidden');
              });
  
              if (numItems1 >= 8 && !gridContainer1.classList.contains('moving-left')) {
                matrix1.m41 = -2000;
              }
  
              if (numItems1 >= 8 && !gridContainer1.classList.contains('moving-left') && window.innerWidth < 1200) {
                matrix1.m41 = -900;
              }
  
              function cloneGalleryItems() {
                for (let i = 0; i < numItems1; i++) {
                  const clonedItem = gridItems1[i].cloneNode(true);
                  gridContainer1.appendChild(clonedItem);
                }
              }
  
              switch (true) {
                case (numItems1 < 8):
                  cloneGalleryItems();
                case (gridContainer1.classList.contains('moving-right')):
                  translateX1 = matrix1.m41 + (scrollPosition - distanceFromTop) * 0.9;
                  break;
                case (gridContainer1.classList.contains('moving-left')):
                  translateX1 = matrix1.m41 - (scrollPosition - distanceFromTop) * 0.9;
                  break;
                default:
                  if (window.innerWidth >= 2560) {
                    translateX1 = matrix1.m41 + (scrollPosition - distanceFromTop) * 0.9;
                  } else if (window.innerWidth >= 1440) {
                    translateX1 = matrix1.m41 + (scrollPosition - distanceFromTop) * 0.55;
                  } else if (window.innerWidth >= 1024) {
                    translateX1 = matrix1.m41 + (scrollPosition - distanceFromTop) * 0.45;
                  } else if (window.innerWidth >= 768) {
                    translateX1 = matrix1.m41 + (scrollPosition - distanceFromTop) * 0.35;
                  } else if (window.innerWidth >= 320) {
                    translateX1 = matrix1.m41 + (scrollPosition - distanceFromTop) * 0.25;
                  }
                  break;
              }
  
              gridContainer1.style.transform = `translate3d(${translateX1}px, 0, 0)`;
            }
  
            if (matrix2) {
              const gridItems2 = gridContainer2.querySelectorAll('.grid-item');
              const numItems2 = gridItems2.length;
  
              //fix for mbr-ai
              gridItems2.forEach(item => {
                const img = item.querySelector('img');
                img.classList.remove('hidden');
              });
  
              if (numItems2 >= 8 && gridContainer2.classList.contains('moving-left')) {
                matrix2.m41 = -2000;
              }
  
              if (numItems2 >= 8 && !gridContainer2.classList.contains('moving-left') && window.innerWidth < 1200) {
                matrix2.m41 = 0;
              }
  
              function cloneGalleryItems() {
                for (let i = 0; i < numItems2; i++) {
                  const clonedItem = gridItems2[i].cloneNode(true);
                  gridContainer2.appendChild(clonedItem);
                }
              }
  
              switch (true) {
                case (numItems2 < 8):
                  cloneGalleryItems();
                case (gridContainer2.classList.contains('moving-right')):
                  translateX2 = matrix2.m41 + (scrollPosition - distanceFromTop) * 0.9;
                  break;
                case (gridContainer2.classList.contains('moving-left')):
                  translateX2 = matrix2.m41 - (scrollPosition - distanceFromTop) * 0.9;
                  break;
                default:
                  if (window.innerWidth >= 2560) {
                    translateX2 = matrix2.m41 - (scrollPosition - distanceFromTop) * 0.9;
                  } else if (window.innerWidth >= 1440) {
                    translateX2 = matrix2.m41 - (scrollPosition - distanceFromTop) * 0.55;
                  } else if (window.innerWidth >= 1024) {
                    translateX2 = matrix2.m41 - (scrollPosition - distanceFromTop) * 0.45;
                  } else if (window.innerWidth >= 768) {
                    translateX2 = matrix2.m41 - (scrollPosition - distanceFromTop) * 0.35;
                  } else if (window.innerWidth >= 320) {
                    translateX2 = matrix2.m41 - (scrollPosition - distanceFromTop) * 0.25;
                  }
                  break;
              }
  
              gridContainer2.style.transform = `translate3d(${translateX2}px, 0, 0)`;
            }
  
            if (matrix3) {
              const gridItems3 = gridContainer3.querySelectorAll('.grid-item');
              const numItems3 = gridItems3.length;
  
              //fix for mbr-ai
              gridItems3.forEach(item => {
                const img = item.querySelector('img');
                img.classList.remove('hidden');
              });
  
              if (numItems3 >= 8 && !gridContainer3.classList.contains('moving-left')) {
                matrix3.m41 = -2000
              }
  
              if (numItems3 >= 8 && !gridContainer3.classList.contains('moving-left') && window.innerWidth < 1200) {
                matrix3.m41 = -900;
              }
  
              let translateX3 = matrix3.m41 + (scrollPosition - distanceFromTop) * 0.9;
  
              function cloneGalleryItems() {
                for (let i = 0; i < numItems3; i++) {
                  const clonedItem = gridItems3[i].cloneNode(true);
                  gridContainer3.appendChild(clonedItem);
                }
              }
  
              if (numItems3 < 8) {
                cloneGalleryItems()
              }
  
              if (!gridContainer3.classList.contains('moving-left')) {
                if (window.innerWidth >= 2560) {
                  translateX3 = matrix3.m41 + (scrollPosition - distanceFromTop) * 0.9;
                } else if (window.innerWidth >= 1440) {
                  translateX3 = matrix3.m41 + (scrollPosition - distanceFromTop) * 0.55;
                } else if (window.innerWidth >= 1024) {
                  translateX3 = matrix3.m41 + (scrollPosition - distanceFromTop) * 0.45;
                } else if (window.innerWidth >= 768) {
                  translateX3 = matrix3.m41 + (scrollPosition - distanceFromTop) * 0.35;
                } else if (window.innerWidth >= 320) {
                  translateX3 = matrix3.m41 + (scrollPosition - distanceFromTop) * 0.25;
                }
              } else if (gridContainer3.classList.contains('moving-left')) {
                if (numItems3 < 8) {
                  cloneGalleryItems()
                }
                if (window.innerWidth >= 2560) {
                  translateX3 = matrix3.m41 - (scrollPosition - distanceFromTop) * 0.9;
                } else if (window.innerWidth >= 1440) {
                  translateX3 = matrix3.m41 - (scrollPosition - distanceFromTop) * 0.55;
                } else if (window.innerWidth >= 1024) {
                  translateX3 = matrix3.m41 - (scrollPosition - distanceFromTop) * 0.45;
                } else if (window.innerWidth >= 768) {
                  translateX3 = matrix3.m41 - (scrollPosition - distanceFromTop) * 0.35;
                } else if (window.innerWidth >= 320) {
                  translateX3 = matrix3.m41 - (scrollPosition - distanceFromTop) * 0.25;
                }
              }
  
              gridContainer3.style.transform = `translate3d(${translateX3}px, 0, 0)`;
            }
          }
        }
        window.addEventListener('DOMContentLoaded', () => {
          requestAnimationFrame(updateScrollAnimation);
        });
  
        window.addEventListener('scroll', () => {
          requestAnimationFrame(updateScrollAnimation);
        });
      });
    }
  
    applyScrollAnimation();
  })();
  
  //# sourceMappingURL=scroll-gallery.js.map