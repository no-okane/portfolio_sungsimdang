// 변수 설정
const header = document.querySelector('header');
const lineBnrWrap = document.getElementById('line_bnr_wrap');
let lastScrollTop = 0; // 마지막 스크롤 위치

// 초기 header의 위치 (라인 배너 바로 아래)
const lineBnrHeight = lineBnrWrap.offsetHeight; // #line_bnr_wrap의 높이

// 스크롤 이벤트 리스너
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY; // 현재 스크롤 위치

    if (scrollPosition > lastScrollTop) {
        // 스크롤을 내릴 때
        if (scrollPosition > lineBnrHeight) {
            // 스크롤을 내렸을 때, header가 화면 상단에 고정
            header.style.position = 'fixed';
            header.style.top = '0';  // 화면 상단에 고정
            header.style.width = '100%';
            header.style.zIndex = '9999';
        }
    } else {
        // 스크롤을 올릴 때
        if (scrollPosition <= lineBnrHeight) {
            // 스크롤을 올렸을 때, header를 #line_bnr_wrap 바로 아래로
            header.style.position = 'absolute';
            header.style.top = `${lineBnrHeight}px`; // #line_bnr_wrap 바로 아래로 이동
            header.style.width = '100%';
            header.style.zIndex = '9999';
        }
    }

    lastScrollTop = scrollPosition <= 0 ? 0 : scrollPosition; // 문서의 최상단이면 0으로 설정
});
