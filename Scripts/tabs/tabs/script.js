$(document).ready(function () {
  //  showing the clicked tab
  $('.tabs-control a').click(function () {
    $('.tabs-control a').removeClass('active');
    $(this).addClass('active');

    let currentTab = $(this).attr('href');
    $('.box').hide();
    $(currentTab).fadeIn();

    // saving current tab to local storage
    let index = $(this).index();
    localStorage.setItem('currentTab', index);
  });

  //  getting last current tab from storage
  let getTab = localStorage.getItem('currentTab');
  $('.tabs-control a').eq(getTab).addClass('active');
  $('.box').eq(getTab).show();
});