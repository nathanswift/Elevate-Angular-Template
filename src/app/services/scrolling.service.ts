import $ from 'jquery';

export function scrolling() {
  $(window).on('scroll', () => {
    const scrollHeight = $(document).height();
    const scrollPosition = $(window).height() + $(window).scrollTop();
    if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
      $(this).remove();
    }
  });

  $(window).bind('scroll', () => {
    if (window.scrollY < window.length) {
      console.log('top!');
    } 
  });
}
