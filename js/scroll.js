
const container = document.querySelector('.scroll-container');
const scrollSpeed = 3; // 스크롤 속도를 조절하는 값

container.addEventListener('wheel', (event) => {
    event.preventDefault(); // 기본 스크롤 동작 방지

    const scrollAmount = event.deltaY * scrollSpeed; // 마우스 휠의 이동량

    // 이미지를 움직이기 위해 스크롤할 양 계산
    const currentScroll = container.scrollLeft;
    container.scrollTo({
        left: currentScroll + scrollAmount,
        behavior: 'smooth' // 부드러운 스크롤을 원하면 'smooth'로 설정하세요.
    });
});