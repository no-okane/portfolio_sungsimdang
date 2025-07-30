// 변수 설정
const header = document.querySelector('header');
const lineBnrWrap = document.getElementById('line_bnr_wrap');
const h1 = header.querySelector('h1');
let lastScrollTop = 0; // 마지막 스크롤 위치

// 초기 header의 위치 (라인 배너 바로 아래)
const lineBnrHeight = lineBnrWrap.offsetHeight; // #line_bnr_wrap의 높이

// h1을 정확히 중앙에 배치하기 위한 함수
function adjustH1Position() {
    const headerHeight = header.offsetHeight; // header의 높이
    const h1Height = h1.offsetHeight; // h1의 높이

    // h1을 중앙에 배치
    h1.style.position = 'relative'; // position을 relative로 유지
    h1.style.top = `${(headerHeight - h1Height) / 2}px`; // 중앙 정렬
    h1.style.left = '50%'; // 수평 중앙
    h1.style.transform = 'translateX(-50%)'; // 수평 중앙 정렬
}

// 페이지 로드 후 초기 설정
adjustH1Position();  // 페이지 로드 시 h1을 중앙에 위치시키기

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

            // h1 스타일 변경 (고정된 헤더에 맞게 조정)
            h1.style.position = 'relative'; // position은 그대로 유지
            h1.style.top = 'initial'; // 상단에 딱 붙지 않도록
            h1.style.transform = 'none'; // transform 초기화
        }
    } else {
        // 스크롤을 올릴 때
        if (scrollPosition <= lineBnrHeight) {
            // 스크롤을 올렸을 때, header를 #line_bnr_wrap 바로 아래로
            header.style.position = 'absolute';
            header.style.top = `${lineBnrHeight}px`; // #line_bnr_wrap 바로 아래로 이동
            header.style.width = '100%';
            header.style.zIndex = '9999';

            // h1 스타일 초기화
            adjustH1Position(); // h1을 중앙으로 다시 배치
        }
    }

    // 스크롤 시에도 h1을 계속 중앙에 배치
    adjustH1Position();

    lastScrollTop = scrollPosition <= 0 ? 0 : scrollPosition; // 문서의 최상단이면 0으로 설정
});
