// export default function scrollToSection(ref) {
//   ref.current.scrollIntoView({ behavior: 'smooth' });
// }

const navbarHeight = 100;

// Scroll function with offset
export default function scrollToSection(ref) {
  const element = ref.current;
  const elementPosition = element.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = elementPosition - navbarHeight;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
}
