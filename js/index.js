function toggleAccordion(id) {
  console.log(id);
  const accordionItem = document.querySelector(`[data-accordion="${id}"]`);
  const content = document.getElementById(`content-${id}`);
  const icon = document.getElementById(`icon-${id}`);
  const textContainer = accordionItem.querySelector('.flex.flex-col.md\\:flex-row');

  const allContents = document.querySelectorAll("[id^='content-']");
  const allIcons = document.querySelectorAll("[id^='icon-']");
  const allAccordionItems = document.querySelectorAll("[data-accordion]");
  const allTextContainers = document.querySelectorAll(".flex.flex-col.md\\:flex-row");

  // Close all other accordions
  allContents.forEach((el, index) => {
    if (el !== content) {
      el.style.maxHeight = null;
      allIcons[index].style.transform = 'rotate(0deg)';
      allAccordionItems[index].classList.remove('border-[#E86DFC]');
      allAccordionItems[index].classList.add('border-white');
      if (allTextContainers[index]) {
        allTextContainers[index].classList.remove('text-[#E86DFC]');
        allTextContainers[index].classList.add('text-white');
      }
      allIcons[index].classList.remove('text-[#E86DFC]');
      allIcons[index].classList.add('text-white');
    }
  });

  // Toggle clicked accordion
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
    icon.style.transform = 'rotate(0deg)';
    accordionItem.classList.remove('border-[#E86DFC]');
    accordionItem.classList.add('border-white');
    if (textContainer) {
      textContainer.classList.remove('text-[#E86DFC]');
      textContainer.classList.add('text-white');
    }
    icon.classList.remove('text-[#E86DFC]');
    icon.classList.add('text-white');
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
    icon.style.transform = 'rotate(45deg)';
    accordionItem.classList.add('border-[#E86DFC]');
    accordionItem.classList.remove('border-white');
    if (textContainer) {
      textContainer.classList.add('text-[#E86DFC]');
      textContainer.classList.remove('text-white');
    }
    icon.classList.add('text-[#E86DFC]');
    icon.classList.remove('text-white');
  }
}
