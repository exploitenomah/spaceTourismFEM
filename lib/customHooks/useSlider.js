

import { useState, useCallback } from 'react';

const useSlider = (data) => {
   const [allSlides, setAllSlides] = useState(data.map((datum, index) => {
       return  index === 0
        ? {
            ...datum,
            id: datum.name + index,
            active: true,
            idx: index,
          }
        : {
            ...datum,
            id: datum.name + index,
            active: false,
            idx: index, 
          };
   }))
  const [current, setCurrent] = useState(allSlides[0]);

   const toggleCurrent = useCallback((id) => {
       setAllSlides((previousSlides) =>
        previousSlides.map((slide, idx) => {
           return slide.id === id
            ? {
                ...slide,
                active: true, 
              }
            : {
                ...slide,
                active: false,
            }
       }))
       let newCurrent = allSlides.filter((slide) => {
         return slide.id === id;
       });
       setCurrent((prev) => {
         return newCurrent === prev ? prev : newCurrent[0];  //newCurrent[0] because allSlides.filter(callback()) returns an array with one item 
       });
   }, [])
   // swipe functionality
     const [position, setPosition] = useState({
       xDown: null,
       yDown: null,
     });
     function handleTouchStart(e) {
       setPosition(() => {
         return {
           xDown: e.touches[0].clientX,
           yDown: e.touches[0].clientY,
         };
       });
     } 
      function handleTouchMove(e, idx) {
        if (!position.xDown || !position.yDown) {
          return;
        }
        let xUp = e.touches[0].clientX;
        let yUp = e.touches[0].clientY;
        let xDiff = position.xDown - xUp;
        let yDiff = position.yDown - yUp;
        const setActiveSlide = (slide) => {
          setAllSlides((prevSlides) => {
            return prevSlides.map((prevSlide) => {
              return prevSlide === slide
                ? {
                    ...prevSlide,
                    active: true,
                  }
                : {
                    ...prevSlide,
                    active: false,
                  };
            });
          });
        };
        if (Math.abs(xDiff) > Math.abs(yDiff)) {
          /*most significant*/
          let currentActive = allSlides.filter((slide, index) => {
            return index === idx && slide;   
          })[0];
            if (xDiff > 0) {
              if (idx === allSlides.length - 1) {
              setTimeout(() => {
                setCurrent(() => {
                  return allSlides[0];
                });
                setActiveSlide(allSlides[0]);
                }, 450)
              } else {
              setTimeout(() => {
                setActiveSlide(allSlides[currentActive.idx + 1]);
                setCurrent(() => {
                  return allSlides[idx + 1];
                });
                }, 450)
              }
            } else {
            if (idx === 0) {
              setTimeout(() => {
                setCurrent(() => {
                  return allSlides[allSlides.length - 1];
                });
                setActiveSlide(allSlides[allSlides.length - 1]);
              }, 450);
            } else {
              setTimeout(() => {
                setCurrent(() => {
                  return allSlides[idx - 1];
                });
                setActiveSlide(allSlides[currentActive.idx - 1]);
              }, 450);
            }
          }
            setPosition(() => {
              return {
                xDown: null,
                yDown: null,
              };
            });
        }

      } 
  return [allSlides, toggleCurrent, current, handleTouchStart, handleTouchMove];
};

export default useSlider;
