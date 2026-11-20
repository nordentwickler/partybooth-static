export default function stickyClassChange(stickyElement, introObserverElement ) {

    let optionsSignElement = {
        threshold: 1
    };



    const handlerSignElement = (entries) => {
        if (entries[0].isIntersecting) {
            stickyElement.classList.remove('sticked');
        } else {
            stickyElement.classList.add('sticked');
        }
    };

    const handlerIntroElement = (entries) => {
        if (entries[0].isIntersecting) {
            //
        }
    };

    const introObserver = new window.IntersectionObserver(handlerSignElement, optionsSignElement);

  introObserver.observe(introObserverElement);

}

