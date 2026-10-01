function initRotator(rotatorContainer) {
  const cases = Array.from(rotatorContainer.querySelectorAll('.rotator__case'));
  let activeIndex = cases.findIndex(item => item.classList.contains('rotator__case_active'));
  if (activeIndex === -1) {
    activeIndex = 0;
    cases[0].classList.add('rotator__case_active');
  }
  setInterval(() => {
    cases[activeIndex].classList.remove('rotator__case_active');

    activeIndex = (activeIndex + 1) % cases.length;

    cases[activeIndex].classList.add('rotator__case_active');
  }, 1000);
}
const allRotators = document.querySelectorAll('.rotator');
allRotators.forEach(rotator => initRotator(rotator));