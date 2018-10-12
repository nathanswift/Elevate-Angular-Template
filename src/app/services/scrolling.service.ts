import $ from 'jquery';

export function scrolling() {
  $(window).on('scroll', () => {
    const scrollHeight = $(document).height();
    const scrollPosition = $(window).height() + $(window).scrollTop();
    if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
      // when scroll to bottom of the page
      console.log('bottom!');
    }
  });

  $(window).bind('scroll', () => {
    if (window.scrollY < window.length) {
      console.log('top!');
    } 
  });
}
