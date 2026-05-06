window.addEventListener("load", () => {
  const tabLinks = document.querySelectorAll(".tab-nav li a");
  const tabItems = document.querySelectorAll(".tabitem");

  tabLinks.forEach((link, index) => {
    // console.log(link); // 하나씩 찍힘
    link.addEventListener("click", (e) => {
      e.preventDefault(); // 이벤트 비활성화 (초기화)

      // 1. MENU active 제거
      tabLinks.forEach((tl) => tl.classList.remove("active"));
      // 2. 내용 active 제거
      tabItems.forEach((ti) => ti.classList.remove("active"));

      // 3. 클릭한 MENU active 추가
      link.classList.add("active");
      // 4. 클릭한 MENU의 내용 active 추가
      // tabItems[index].classList.add("active");

      // 4-2. 연결된 콘텐츠 찾기
      const linkTarget = document.querySelector(link.getAttribute("href"));
      // console.log(linkTarget); // work0$이 찍혀야 함

      linkTarget.classList.add("active");
    });
  });
});
